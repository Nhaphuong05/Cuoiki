# -*- coding: utf-8 -*-
"""
recommendation_engine.py
-------------------------
Sinh khuyến nghị theo 4 vùng (Green Light / Red Light / R&D Opportunity /
Low Priority) từ bảng cấp task do data_pipeline.build_task_level_table() trả về.

Mọi câu chữ khuyến nghị được GENERATE từ dữ liệu đang lọc (task, occupation, số
liệu thật) — không hard-code văn bản tĩnh. Nếu risk tolerance hoặc dữ liệu đầu
vào thay đổi, gọi lại build_recommendations() sẽ sinh nội dung khác tương ứng.
"""
import numpy as np
import pandas as pd

import data_pipeline as dp

ZONE_ORDER = ["Green Light", "Red Light", "R&D Opportunity", "Low Priority"]


def priority_score(row) -> float:
    """Điểm ưu tiên đơn giản, minh bạch:

        priority_score = |trust_gap| * ln(n_workers + n_experts + 1)

    - abs(trust_gap): cả Trust Gap dương (AI đủ năng lực nhưng người lao động
      không muốn -> cần thuyết phục/đào tạo) lẫn âm (người lao động muốn nhưng
      AI chưa đủ năng lực -> cần đầu tư R&D) đều là TÍN HIỆU CẦN HÀNH ĐỘNG, nên
      lấy trị tuyệt đối thay vì chỉ ưu tiên một chiều.
    - log(n_workers + n_experts + 1): làm giảm ảnh hưởng của cỡ mẫu cực nhỏ,
      tránh trường hợp 1 task chỉ có 1-2 người trả lời nhưng trust_gap lớn lại
      bị đẩy lên đầu bảng ưu tiên một cách phi lý so với task có cỡ mẫu lớn hơn
      nhưng trust_gap nhỏ hơn một chút. Dùng +1 bên trong log để tránh log(0).

    LƯU Ý: điểm số này CHỈ dùng để SẮP XẾP THỨ TỰ trong bảng của mỗi vùng, KHÔNG
    được dùng để so sánh 2 task cụ thể thành một câu chuyện/kết luận nhân quả.
    Luôn hiển thị kèm n_workers/n_experts bên cạnh điểm số này.
    """
    weight = np.log((row["n_workers"] + row["n_experts"]) + 1)
    return abs(row["trust_gap"]) * weight


def add_priority_scores(task_level: pd.DataFrame) -> pd.DataFrame:
    out = task_level.copy()
    out["priority_score"] = out.apply(priority_score, axis=1)
    return out


def _base_evidence(row) -> dict:
    """Trích các trường bằng chứng cấp task dùng chung cho mọi vùng — luôn kèm n,
    luôn truy vết được về đúng dòng dữ liệu sinh ra khuyến nghị (traceable)."""
    return {
        "task_id": row["Task ID"],
        "occupation": row["Occupation"],
        "task": row["Task"],
        "n_workers": int(row["n_workers"]),
        "n_experts": int(row["n_experts"]),
        "desire_mean": float(row["desire_mean"]),
        "capacity_mean": float(row["capacity_mean"]),
        "trust_gap": float(row["trust_gap"]),
        "priority_score": float(row["priority_score"]),
        "domain_expertise_cap": float(row.get("domain_expertise_cap", 0.0)),
        "interpersonal_cap": float(row.get("interpersonal_cap", 0.0))
    }


def build_recommendations(task_level: pd.DataFrame, audited_desires: pd.DataFrame,
                           capacity_threshold: float = 3.0):
    """Sinh khuyến nghị cho cả 4 vùng.

    Trả về (recs, scored):
        recs   : dict {zone: [item_dict, ...]} — đã sắp xếp theo yêu cầu từng vùng
        scored : DataFrame task_level đã có cột priority_score (dùng lại ở Trang 5/6)
    """
    scored = add_priority_scores(task_level)
    recs = {zone: [] for zone in ZONE_ORDER}

    for zone in ZONE_ORDER:
        sub = scored[scored["zone"] == zone]
        if zone == "Green Light":
            sub = sub.sort_values("n_workers", ascending=False)
        else:
            sub = sub.sort_values("priority_score", ascending=False)

        for _, row in sub.iterrows():
            item = _base_evidence(row)
            item["zone"] = zone

            if zone == "Green Light":
                item["action"] = (
                    f"Triển khai pilot ngay trong 90 ngày cho: \"{row['Task']}\" "
                    f"({row['Occupation']})"
                )
            elif zone == "Red Light":
                item["action"] = (
                    f"KHÔNG triển khai ngay cho: \"{row['Task']}\" ({row['Occupation']}) — "
                    f"chạy chương trình minh bạch hoá năng lực AI + đào tạo trước khi triển khai"
                )
                reason_info = dp.most_common_human_agency_reason(audited_desires, row["Occupation"])
                if reason_info is not None:
                    label, pct, n_occ = reason_info
                    item["training_hint"] = (
                        f"Lý do giữ người phổ biến nhất tại '{row['Occupation']}': {label} "
                        f"({dp.vn_number(pct, 1)}% người trả lời, n={n_occ}) — nội dung đào tạo "
                        f"nên nhắm vào lý do này."
                    )
            elif zone == "R&D Opportunity":
                gap = max(capacity_threshold - row["capacity_mean"], 0.0)
                item["capacity_gap"] = float(gap)
                item["action"] = (
                    f"Đầu tư nghiên cứu/theo dõi công nghệ cho: \"{row['Task']}\" "
                    f"({row['Occupation']}) — Automation Capacity Rating hiện tại "
                    f"{dp.vn_number(row['capacity_mean'], 2)} cần tăng thêm khoảng "
                    f"{dp.vn_number(gap, 2)} điểm để vượt ngưỡng {dp.vn_number(capacity_threshold, 2)}; "
                    f"review lại sau 6-12 tháng."
                )
            else:  # Low Priority
                item["action"] = (
                    f"Không đầu tư ở giai đoạn này cho: \"{row['Task']}\" ({row['Occupation']})"
                )

            recs[zone].append(item)

    return recs, scored
