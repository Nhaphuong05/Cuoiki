# -*- coding: utf-8 -*-
"""
roadmap_generator.py
----------------------
Sinh lộ trình triển khai (Gantt), RACI, KPI, rủi ro & biện pháp giảm thiểu, và
ước tính ngân sách theo tier — cho danh sách task đã chọn ở Trang 4 (truyền qua
st.session_state, xem app.py::_selected_items_from_state).

Mọi nội dung được sinh (generate) từ dữ liệu của item (task/occupation/zone/
n_workers/n_experts/...) — không có văn bản tĩnh cố định cho tất cả trường hợp.
"""
import pandas as pd
import plotly.graph_objects as go

# Màu theo giai đoạn (dùng chung cho mọi vùng)
PHASE_COLORS = {
    "Discovery": "#607d8b",
    "Pilot": "#2e7d32",
    "Đào tạo & minh bạch hoá": "#c62828",
    "Nghiên cứu & theo dõi (R&D)": "#1565c0",
    "Scale hoặc Hold": "#f9a825",
    "Governance & Monitoring": "#455a64",
}


def _phase_plan_for_zone(zone: str):
    """Trả về list (tên giai đoạn, tuần bắt đầu, tuần kết thúc) theo vùng.
    Chỉ Green Light có giai đoạn Pilot đúng nghĩa (Tuần 3-10) theo yêu cầu."""
    if zone == "Green Light":
        return [
            ("Discovery", 1, 2),
            ("Pilot", 3, 10),
            ("Scale hoặc Hold", 11, 14),
            ("Governance & Monitoring", 15, 26),
        ]
    if zone == "Red Light":
        return [
            ("Discovery", 1, 2),
            ("Đào tạo & minh bạch hoá", 3, 10),
            ("Scale hoặc Hold", 11, 14),
            ("Governance & Monitoring", 15, 26),
        ]
    if zone == "R&D Opportunity":
        return [
            ("Discovery", 1, 2),
            ("Nghiên cứu & theo dõi (R&D)", 3, 26),
            ("Governance & Monitoring", 27, 52),
        ]
    # Low Priority — chỉ Discovery ở mức tối thiểu, không hành động thêm
    return [("Discovery", 1, 2)]


def build_gantt_rows(selected_items: list) -> pd.DataFrame:
    """Mỗi hàng: 1 (task, giai đoạn) — dùng để vẽ Gantt chart theo tuần."""
    rows = []
    for item in selected_items:
        label = f"{item['occupation']} — {item['task'][:40]}"
        for phase, start, end in _phase_plan_for_zone(item["zone"]):
            rows.append({
                "task_label": label,
                "zone": item["zone"],
                "phase": phase,
                "start_week": start,
                "end_week": end,
                "duration": end - start + 1,
            })
    return pd.DataFrame(rows)


def render_gantt_figure(gantt_df: pd.DataFrame):
    if gantt_df.empty:
        return None
    fig = go.Figure()
    labels = list(dict.fromkeys(gantt_df["task_label"]))
    shown_phases = set()
    for _, row in gantt_df.iterrows():
        show_legend = row["phase"] not in shown_phases
        shown_phases.add(row["phase"])
        fig.add_trace(go.Bar(
            x=[row["duration"]],
            y=[row["task_label"]],
            base=[row["start_week"] - 1],
            orientation="h",
            name=row["phase"],
            legendgroup=row["phase"],
            showlegend=show_legend,
            marker_color=PHASE_COLORS.get(row["phase"], "#9e9e9e"),
            hovertext=f"{row['phase']}: Tuần {row['start_week']}–{row['end_week']}",
            hoverinfo="text",
        ))
    fig.update_layout(
        barmode="stack",
        xaxis_title="Tuần",
        yaxis=dict(autorange="reversed", title=""),
        height=max(300, 70 * len(labels)),
        legend_title_text="Giai đoạn",
    )
    return fig


def build_raci_table(selected_items: list, role_overrides: dict) -> pd.DataFrame:
    rows = []
    for item in selected_items:
        rows.append({
            "Task": f"{item['occupation']} — {item['task'][:50]}",
            "Vùng": item["zone"],
            "Responsible (R)": role_overrides.get("Responsible", "Trưởng khoa/đơn vị liên quan"),
            "Accountable (A)": role_overrides.get("Accountable", "Giám đốc vận hành / CIO"),
            "Consulted (C)": role_overrides.get("Consulted", "Phòng CNTT, Ban An toàn người bệnh"),
            "Informed (I)": role_overrides.get("Informed", "Toàn thể nhân sự khoa/đơn vị liên quan"),
        })
    return pd.DataFrame(rows)


def build_kpi_table(selected_items: list) -> pd.DataFrame:
    rows = []
    for item in selected_items:
        zone = item["zone"]
        if zone == "Green Light":
            kpi = (
                "Giảm thời gian xử lý task (so với baseline Discovery); giảm tỷ lệ lỗi; "
                "Automation Desire Rating trung bình hậu triển khai (KPI theo dõi, không "
                "phải số liệu đã đo thật)"
            )
        elif zone == "Red Light":
            kpi = (
                "Tỷ lệ nhân sự hoàn thành đào tạo minh bạch hoá; thay đổi Human Agency "
                "Scale Rating trước/sau đào tạo (KPI theo dõi, không phải số liệu đã đo thật)"
            )
        elif zone == "R&D Opportunity":
            kpi = (
                f"Automation Capacity Rating cần tăng thêm {item.get('capacity_gap', 0):.2f} điểm; "
                "theo dõi tiến độ công nghệ mỗi 6 tháng"
            )
        else:
            kpi = "Không cần KPI theo dõi ở giai đoạn này"
        rows.append({
            "Task": f"{item['occupation']} — {item['task'][:50]}",
            "Vùng": zone,
            "KPI đề xuất theo giai đoạn": kpi,
        })
    return pd.DataFrame(rows)


def build_risk_table(selected_items: list, audited_desires: pd.DataFrame) -> pd.DataFrame:
    import data_pipeline as dp

    rows = []
    for item in selected_items:
        zone = item["zone"]
        if zone == "Red Light":
            reason_info = dp.most_common_human_agency_reason(audited_desires, item["occupation"])
            reason_txt = reason_info[0] if reason_info else "chưa xác định"
            risk = "Nhân sự phản đối / lo ngại mất kiểm soát"
            mitigation = (
                f"Minh bạch hoá năng lực AI + đào tạo trước pilot, tập trung vào lý do "
                f"'{reason_txt}' (lý do giữ người phổ biến nhất tại occupation này)"
            )
        elif zone == "Green Light":
            risk = "Sai sót chuyên môn nếu giám sát lỏng trong giai đoạn pilot"
            mitigation = "Giữ human-in-the-loop trong suốt giai đoạn pilot, review định kỳ"
        elif zone == "R&D Opportunity":
            risk = "Đầu tư sớm khi công nghệ chưa đủ năng lực, lãng phí nguồn lực"
            mitigation = "Chỉ theo dõi/thử nghiệm nhỏ, review lại sau 6-12 tháng trước khi mở rộng"
        else:
            risk = "Không có rủi ro cần xử lý ở giai đoạn này"
            mitigation = "Không cần biện pháp — không đầu tư ở giai đoạn này"
        rows.append({
            "Task": f"{item['occupation']} — {item['task'][:50]}",
            "Vùng": zone,
            "Rủi ro": risk,
            "Biện pháp giảm thiểu": mitigation,
        })
    return pd.DataFrame(rows)


def estimate_budget_tier(selected_items: list):
    """Ước tính TIER ngân sách định tính (Thấp/Trung bình/Cao) — KHÔNG đưa số tiền
    cụ thể vì dữ liệu không hỗ trợ. Dựa trên số lượng task cần tích hợp và mức độ
    'custom' cần thiết (suy ra từ tỷ trọng Red Light/R&D — các vùng này thường cần
    thêm chương trình đào tạo/nghiên cứu ngoài phần tích hợp kỹ thuật)."""
    if not selected_items:
        return "Chưa xác định", "Chưa có task nào được chọn."

    n_tasks = len(selected_items)
    n_green = sum(1 for i in selected_items if i["zone"] == "Green Light")
    n_red = sum(1 for i in selected_items if i["zone"] == "Red Light")
    n_rnd = sum(1 for i in selected_items if i["zone"] == "R&D Opportunity")
    custom_heavy = n_red + n_rnd

    if n_tasks <= 2 and custom_heavy == 0:
        tier = "Thấp"
    elif n_tasks <= 5 and custom_heavy <= 2:
        tier = "Trung bình"
    else:
        tier = "Cao"

    reason = (
        f"Dựa trên {n_tasks} task được chọn ({n_green} Green Light, {n_red} Red Light, "
        f"{n_rnd} R&D Opportunity). Task thuộc Red Light/R&D cần thêm chương trình đào "
        f"tạo/minh bạch hoá hoặc nghiên cứu công nghệ ngoài phần tích hợp kỹ thuật thuần "
        f"tuý, nên mức độ 'custom' cần thiết và do đó tier ngân sách tăng theo số lượng "
        f"task thuộc 2 vùng này."
    )
    return tier, reason
