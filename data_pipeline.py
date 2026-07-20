# -*- coding: utf-8 -*-
"""
data_pipeline.py
-----------------
Nạp 4 file CSV gốc (WORKBank), lọc phạm vi Y tế/Dược/KHSS theo O*NET-SOC Code,
và tổng hợp thành:
    1. `build_scope()`               -> phạm vi occupation đã audit / chưa audit
    2. `build_task_level_table(...)` -> bảng 27 task (desire/capacity/trust_gap/zone)
    3. `compare_healthcare_vs_rest()` -> Mann-Whitney U + Chi-square (bằng chứng nền)

Nguyên tắc BẮT BUỘC (xem tài liệu yêu cầu):
    - Không chạy ANOVA 3 nhóm nghề.
    - Không ẩn n ở bất kỳ số liệu cấp task nào.
    - Không gắn nhãn "có ý nghĩa thống kê" khi n < 30 (áp dụng ở lớp UI cho số liệu
      cấp task; ở đây chỉ trả về p-value thô, việc gắn nhãn do app.py quyết định).

Tất cả hàm nạp dữ liệu nặng đều nên được bọc bằng st.cache_data ở phía app.py hoặc
ở đây (dùng @st.cache_data trực tiếp) để tránh đọc lại CSV mỗi lần tương tác.
"""
import os

import numpy as np
import pandas as pd
from scipy import stats
import streamlit as st

DATA_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "data")

REQUIRED_FILES = [
    "domain_worker_desires.csv",
    "domain_worker_metadata.csv",
    "expert_rated_technological_capability.csv",
    "task_statement_with_metadata.csv",
]

# Phạm vi O*NET-SOC Code: 29-xxxx (Lâm sàng), 31-xxxx (Hỗ trợ CSSK), 19-1xxx (KHSS)
SCOPE_PREFIXES = ("29-", "31-", "19-1")

# 13 cột lý do boolean dùng cho Chi-square (Automation Desire + Human Agency)
REASON_COLUMNS = [
    "Reasons for Automation Desire - Free Time",
    "Reasons for Automation Desire - Repetitive",
    "Reasons for Automation Desire - Human Error",
    "Reasons for Automation Desire - Stress",
    "Reasons for Automation Desire - Difficulty",
    "Reasons for Automation Desire - Scale",
    "Reasons for Human Agency - Physical",
    "Reasons for Human Agency - Control",
    "Reasons for Human Agency - Domain Knowledge",
    "Reasons for Human Agency - Empathy",
    "Reasons for Human Agency - Quality Oversight",
    "Reasons for Human Agency - Dynamic",
    "Reasons for Human Agency - Ethical",
]

# 7 cột lý do "giữ người" (Human Agency) — dùng để gợi ý nội dung đào tạo ở Trang 4
HUMAN_AGENCY_COLUMNS = [c for c in REASON_COLUMNS if c.startswith("Reasons for Human Agency")]


class DataLoadError(Exception):
    """Ném ra khi thiếu file CSV hoặc dữ liệu không đọc được — app.py bắt lỗi này
    và hiển thị st.error rõ ràng thay vì crash."""


def vn_number(value, decimals=2):
    """Định dạng số kiểu Việt Nam: dấu phẩy làm phần thập phân (vd 3,15).
    Chấp nhận None/NaN -> trả về 'N/A'."""
    try:
        if value is None or (isinstance(value, float) and np.isnan(value)):
            return "N/A"
        fmt = f"{{:.{decimals}f}}"
        s = fmt.format(float(value))
        return s.replace(",", "#").replace(".", ",").replace("#", ".")
    except (ValueError, TypeError):
        return "N/A"


def _check_files_exist():
    missing = [f for f in REQUIRED_FILES if not os.path.isfile(os.path.join(DATA_DIR, f))]
    if missing:
        raise DataLoadError(
            "Thiếu file CSV bắt buộc trong thư mục data/: " + ", ".join(missing)
        )


@st.cache_data(show_spinner=False)
def _load_raw():
    _check_files_exist()
    try:
        desires = pd.read_csv(os.path.join(DATA_DIR, "domain_worker_desires.csv"))
        worker_meta = pd.read_csv(os.path.join(DATA_DIR, "domain_worker_metadata.csv"))
        expert = pd.read_csv(os.path.join(DATA_DIR, "expert_rated_technological_capability.csv"))
        task_meta = pd.read_csv(os.path.join(DATA_DIR, "task_statement_with_metadata.csv"))
    except Exception as exc:  # noqa: BLE001 — bắt mọi lỗi đọc file để báo rõ ràng
        raise DataLoadError(f"Lỗi khi đọc file CSV trong data/: {exc}") from exc
    return desires, worker_meta, expert, task_meta


OCC_COL = "Occupation (O*NET-SOC Title)"


@st.cache_data(show_spinner=False)
def build_scope():
    """Xác định phạm vi Y tế/Dược/KHSS và tập occupation đã audit (có mặt trong
    CẢ domain_worker_desires.csv VÀ expert_rated_technological_capability.csv).

    Trả về dict:
        final_occupations     : list occupation đã audit (kỳ vọng 4)
        unaudited_occupations : occupation trong phạm vi nhưng thiếu 1 trong 2 nguồn
        audited_desires        : DataFrame desires đã lọc theo occupation+task chung
        audited_expert          : DataFrame expert đã lọc theo occupation+task chung
    """
    desires, worker_meta, expert, task_meta = _load_raw()

    codes = task_meta[["O*NET-SOC Code", OCC_COL]].drop_duplicates()
    in_scope_mask = codes["O*NET-SOC Code"].astype(str).str.startswith(SCOPE_PREFIXES)
    scope_occupations = set(codes.loc[in_scope_mask, OCC_COL])

    desire_occupations = set(desires[OCC_COL].unique())
    expert_occupations = set(expert[OCC_COL].unique())

    final_occupations = sorted(scope_occupations & desire_occupations & expert_occupations)
    unaudited_occupations = sorted(scope_occupations - set(final_occupations))

    d_sub = desires[desires[OCC_COL].isin(final_occupations)].copy()
    e_sub = expert[expert[OCC_COL].isin(final_occupations)].copy()

    # Chỉ giữ Task ID xuất hiện ở CẢ 2 phía (người lao động và chuyên gia)
    common_tasks = set(d_sub["Task ID"]) & set(e_sub["Task ID"])
    audited_desires = d_sub[d_sub["Task ID"].isin(common_tasks)].reset_index(drop=True)
    audited_expert = e_sub[e_sub["Task ID"].isin(common_tasks)].reset_index(drop=True)

    return {
        "final_occupations": final_occupations,
        "unaudited_occupations": unaudited_occupations,
        "audited_desires": audited_desires,
        "audited_expert": audited_expert,
        "full_desires": desires,
        "full_worker_meta": worker_meta,
    }


def _zone_for(desire_mean, capacity_mean, desire_threshold, capacity_threshold):
    wants = desire_mean >= desire_threshold
    capable = capacity_mean >= capacity_threshold
    if wants and capable:
        return "Green Light"
    if (not wants) and capable:
        return "Red Light"
    if wants and (not capable):
        return "R&D Opportunity"
    return "Low Priority"


@st.cache_data(show_spinner=False)
def build_task_level_table(capacity_threshold: float = 3.0, desire_threshold: float = 3.0):
    """Bảng cấp task (kỳ vọng 27 dòng): n_workers, desire_mean, n_experts,
    capacity_mean, trust_gap, zone.

    trust_gap = capacity_mean - desire_mean
        > 0  -> AI đủ/thừa năng lực nhưng người lao động KHÔNG muốn tự động hoá
                => "cần thuyết phục" (Red Light nếu vượt ngưỡng capacity)
        < 0  -> Người lao động MUỐN tự động hoá nhưng AI CHƯA đủ năng lực
                => "cần đầu tư R&D" (R&D Opportunity nếu vượt ngưỡng desire)

    Ngưỡng zone mặc định 3/3 theo thang 1-5; desire_threshold giữ cố định ở 3,0,
    chỉ capacity_threshold được điều chỉnh qua risk-tolerance slider.
    """
    scope = build_scope()
    d = scope["audited_desires"]
    e = scope["audited_expert"]

    worker_agg = (
        d.groupby(["Task ID", OCC_COL, "Task"], as_index=False)
        .agg(n_workers=("User ID", "nunique"), desire_mean=("Automation Desire Rating", "mean"))
    )
    expert_agg = (
        e.groupby(["Task ID"], as_index=False)
        .agg(
            n_experts=("User ID", "nunique"), 
            capacity_mean=("Automation Capacity Rating", "mean"),
            domain_expertise_cap=("Domain Expertise Requirement", "mean"),
            interpersonal_cap=("Interpersonal Communication Requirement", "mean")
        )
    )

    table = worker_agg.merge(expert_agg, on="Task ID", how="inner")
    table = table.rename(columns={OCC_COL: "Occupation"})
    table["trust_gap"] = table["capacity_mean"] - table["desire_mean"]
    table["zone"] = table.apply(
        lambda r: _zone_for(r["desire_mean"], r["capacity_mean"], desire_threshold, capacity_threshold),
        axis=1,
    )
    return table.sort_values(["Occupation", "Task ID"]).reset_index(drop=True)


@st.cache_data(show_spinner=False)
def compare_healthcare_vs_rest():
    """So sánh gộp Y tế/Dược/KHSS (đã audit) vs Phần còn lại của TOÀN BỘ dữ liệu
    WORKBank (không giới hạn ở 4 occupation đã audit — đây là bằng chứng nền cấp
    tổng thể, khác với bảng cấp task ở Trang 3).

    - Mann-Whitney U cho Automation Desire Rating.
    - Chi-square cho từng cột trong 13 cột lý do boolean.
    """
    scope = build_scope()
    full_desires = scope["full_desires"]
    healthcare_occs = set(scope["final_occupations"])

    hc = full_desires[full_desires[OCC_COL].isin(healthcare_occs)]
    rest = full_desires[~full_desires[OCC_COL].isin(healthcare_occs)]

    mw_stat, mw_p = stats.mannwhitneyu(
        hc["Automation Desire Rating"], rest["Automation Desire Rating"], alternative="two-sided"
    )

    rows = []
    for col in REASON_COLUMNS:
        hc_counts = hc[col].value_counts()
        rest_counts = rest[col].value_counts()
        contingency = pd.DataFrame({
            "hc": [hc_counts.get(True, 0), hc_counts.get(False, 0)],
            "rest": [rest_counts.get(True, 0), rest_counts.get(False, 0)],
        }, index=["True", "False"])
        chi2, p_value, _, _ = stats.chi2_contingency(contingency.values)
        rows.append({
            "reason": col.replace("Reasons for Automation Desire - ", "AD: ")
                          .replace("Reasons for Human Agency - ", "HA: "),
            "pct_healthcare": 100.0 * hc[col].mean(),
            "pct_rest": 100.0 * rest[col].mean(),
            "chi2": chi2,
            "p_value": p_value,
        })

    return {
        "healthcare_desire": hc["Automation Desire Rating"].tolist(),
        "rest_desire": rest["Automation Desire Rating"].tolist(),
        "mw_stat": mw_stat,
        "mw_p": mw_p,
        "n_healthcare": len(hc),
        "n_rest": len(rest),
        "chi_table": pd.DataFrame(rows),
    }


def most_common_human_agency_reason(audited_desires: pd.DataFrame, occupation: str):
    """Trả về (tên lý do, tỷ lệ %, n) của lý do Human Agency (giữ người) phổ biến
    nhất trong occupation — dùng để gợi ý nội dung đào tạo ở Trang 4 (Red Light).
    Trả về None nếu không có dữ liệu."""
    sub = audited_desires[audited_desires[OCC_COL] == occupation]
    n = len(sub)
    if n == 0:
        return None
    rates = {col: sub[col].mean() for col in HUMAN_AGENCY_COLUMNS}
    best_col = max(rates, key=rates.get)
    label = best_col.replace("Reasons for Human Agency - ", "")
    return label, 100.0 * rates[best_col], n
