// -*- coding: utf-8 -*-
/**
 * baocao.js
 * ---------
 * Báo cáo phân tích kỹ thuật, phương pháp luận thống kê và hướng dẫn chiến lược cấp cao (C-Level).
 * Dự án: "Hệ Thống Hỗ Trợ Quyết Định Đầu Tư AI Cho Y Tế / Dược Phẩm / Khoa Học Sự Sống"
 *
 * Tài liệu này bao gồm phân tích chiến lược, phương pháp luận khoa học dữ liệu,
 * mô hình toán học thống kê và giải trình chi tiết toàn bộ mã nguồn thực tế của hệ thống.
 * Phù hợp làm cẩm nang lưu trữ kỹ thuật và báo cáo hội đồng quản trị cấp cao.
 */

const BAO_CAO_DU_AN = {
    title: "Báo Cáo Phân Tích Kỹ Thuật, Thống Kê Và Chiến Lược Đầu Tư AI Lâm Sàng",
    version: "3.5.0",
    date: "2026-07-19",
    author: "Hệ thống Phân tích Đầu tư AI Y tế",
    content: `// -*- coding: utf-8 -*-
/**
 * baocao.js
 * ---------
 * Báo cáo phân tích kỹ thuật, phương pháp luận thống kê và hướng dẫn chiến lược cấp cao (C-Level).
 * Dự án: "Hệ Thống Hỗ Trợ Quyết Định Đầu Tư AI Cho Y Tế / Dược Phẩm / Khoa Học Sự Sống"
 *
 * Tài liệu này bao gồm phân tích chiến lược, phương pháp luận khoa học dữ liệu,
 * mô hình toán học thống kê và giải trình chi tiết toàn bộ mã nguồn thực tế của hệ thống.
 * Phù hợp làm cẩm nang lưu trữ kỹ thuật và báo cáo hội đồng quản trị cấp cao.
 */

const BAO_CAO_DU_AN = {
    title: "Báo Cáo Phân Tích Kỹ Thuật, Thống Kê Và Chiến Lược Đầu Tư AI Lâm Sàng",
    version: "3.5.0",
    date: "2026-07-19",
    author: "Hệ thống Phân tích Đầu tư AI Y tế",
    content: \`
================================================================================
BÁO CÁO PHÂN TÍCH KỸ THUẬT, THỐNG KÊ VÀ CHIẾN LƯỢC ĐẦU TƯ AI LÂM SÀNG
================================================================================

Tài liệu hướng dẫn chuyên sâu dành cho CIO, COO, CDO bệnh viện và tập đoàn dược phẩm
về phương pháp luận thực chứng, giải trình toàn bộ mã nguồn và lộ trình triển khai y tế.

--------------------------------------------------------------------------------
MỞ ĐẦU CHUYÊN SÂU: TỐI ƯU HÓA HOẠT ĐỘNG CHUYỂN ĐỔI SỐ AI Y TẾ & DƯỢC PHẨM
--------------------------------------------------------------------------------
Việc đưa Trí tuệ nhân tạo (AI) vào ứng dụng thực tiễn tại các tổ chức chăm sóc sức khỏe
và nghiên cứu khoa học là một quy trình vô cùng phức tạp, đòi hỏi sự cân bằng tuyệt đối
giữa tiến bộ kỹ thuật và tâm lý chấp nhận công nghệ của con người. Hơn 70% dự án chuyển
đổi số y khoa lâm sàng thất bại không phải do sự thiếu hụt về mặt công nghệ, mà do
sự e ngại của y bác sĩ lâm sàng về tính an toàn, đạo đức và quyền làm chủ quy trình
chuyên môn của họ. 

Mô hình hỗ trợ quyết định (Decision Support System - DSS) này sử dụng cơ sở dữ liệu
thực chứng từ khảo sát WORKBank (SALT-NLP) nhằm giải quyết triệt để bài toán này. Báo cáo
này phân tích toàn diện phương pháp luận thống kê, mô hình toán học và cấu trúc mã nguồn
của ứng dụng.

--------------------------------------------------------------------------------
CHƯƠNG I: PHÂN TÍCH BỐ CẢNH CHIẾN LƯỢC VÀ CHUYỂN ĐỔI SỐ Y TẾ
--------------------------------------------------------------------------------
1.1. Thách thức quá tải nhận thức lâm sàng (Clinical Cognitive Overload)
Các bác sĩ chẩn đoán hình ảnh, chuyên gia sinh học tin học ngày nay phải đối mặt với
lượng dữ liệu khổng lồ từ hình ảnh DICOM đến dữ liệu giải trình tự gen thế hệ mới (NGS).
Hội chứng kiệt sức lâm sàng (burnout) ngày càng phổ biến. AI được kỳ vọng sẽ giải phóng
họ khỏi các tác vụ lặp đi lặp lại. Tuy nhiên, việc áp dụng AI lâm sàng vô tội vạ mà
không có kiểm toán năng lực thuật toán và nguyện vọng của y bác sĩ sẽ dẫn đến các rủi
ro pháp lý nghiêm trọng hoặc tăng thêm gánh nặng nhận thức do sai số của mô hình.

1.2. Lý thuyết chấp nhận công nghệ (TAM) áp dụng trong y tế chuyên sâu
Mô hình TAM chỉ ra rằng công nghệ chỉ được ứng dụng thành công khi người dùng cảm nhận
được tính dễ sử dụng và tính hữu ích thực tiễn. Trong y tế, điều này tương đương với
việc công nghệ AI có bảo đảm an toàn cho bệnh nhân hay không. Nếu bác sĩ cảm thấy công
nghệ AI hoạt động như một "hộp đen" và họ không có quyền giám sát chất lượng chuyên
môn (Quality Oversight), họ sẽ từ chối sử dụng công nghệ đó để bảo vệ uy tín chuyên môn.

1.3. Khái niệm và cách đo lường "Trust Gap" (Khoảng cách niềm tin)
Hệ thống định nghĩa Trust Gap cấp tác vụ bằng công thức:
  Trust Gap = Capacity Mean - Desire Mean
- Khi Trust Gap âm: Nhân viên y tế muốn tự động hóa nhưng năng lực AI hiện tại chưa đáp
  ứng được -> Cơ hội đầu tư R&D dài hạn.
- Khi Trust Gap dương: AI có năng lực xử lý tốt nhưng nhân sự e ngại triển khai ->
  Rào cản tâm lý lâm sàng. CIO cần đào tạo và minh bạch thuật toán trước khi triển khai.

--------------------------------------------------------------------------------
CHƯƠNG II: KIẾN TRÚC TOÀN CỤC VÀ LUỒNG ĐI DỮ LIỆU
--------------------------------------------------------------------------------
Hệ thống được thiết kế theo mô hình 3 lớp chuẩn hóa:
1. Lớp Dữ liệu (Data Layer - data_pipeline.py): Đọc và tiền xử lý dữ liệu thô từ 4 file CSV.
2. Lớp Logic nghiệp vụ (Business Logic Layer - recommendation_engine.py & roadmap_generator.py):
   Tính toán điểm ưu tiên, phân vùng hành động, lập ma trận trách nhiệm RACI và đánh giá rủi ro.
3. Lớp Trình diễn (Presentation Layer - app.py): Lắp ráp giao diện tương tác Streamlit cao cấp.

Luồng đi của dữ liệu qua các biến session state bảo đảm sự đồng bộ tuyệt đối:
- Ngưỡng capacity_threshold thay đổi -> Bản đồ Scatter Chart và bộ khuyến nghị tự động tính lại.
- Trạng thái selected_task_keys được tick chọn -> Bảng Gantt chart, RACI, KPI và Ngân sách tự động
  cập nhật tương ứng.
- Role_overrides thay đổi -> Bảng ma trận RACI cập nhật tức thời mà không cần nạp lại toàn bộ trang.

--------------------------------------------------------------------------------
CHƯƠNG III: ĐÁNH GIÁ CHUYÊN SÂU MODULE XỬ LÝ DỮ LIỆU (DATA PIPELINE)
--------------------------------------------------------------------------------
Tệp tin \`data_pipeline.py\` chịu trách nhiệm toàn bộ về tính toàn vẹn của dữ liệu đầu vào.
Dưới đây là mã nguồn thực tế của module này:

\`\`\`python
# -*- coding: utf-8 -*-
"""
data_pipeline.py
-----------------
Nạp 4 file CSV gốc (WORKBank), lọc phạm vi Y tế/Dược/KHSS theo O*NET-SOC Code,
và tổng hợp thành:
    1. \`build_scope()\`               -> phạm vi occupation đã audit / chưa audit
    2. \`build_task_level_table(...)\` -> bảng 27 task (desire/capacity/trust_gap/zone)
    3. \`compare_healthcare_vs_rest()\` -> Mann-Whitney U + Chi-square (bằng chứng nền)

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

\`\`\`

3.3. Giải thích chi tiết mã nguồn data_pipeline.py
- Hàm \`build_scope()\`: Lọc O*NET-SOC lâm sàng/KHSS, thực hiện phép giao tập dữ liệu hai bên để bảo đảm tính 
  đồng bộ cao nhất. Lọc và chỉ giữ lại những Task ID xuất hiện ở cả hai tập dữ liệu lâm sàng và chuyên gia để bảo đảm
  tính tương đương 1-1 khi đối chiếu.
- Hàm \`build_task_level_table()\`: Tổng hợp dữ liệu thô cấp nhân sự thành 27 dòng dữ liệu cấp tác vụ duy nhất, 
  đồng thời tính các giá trị trung bình về năng lực chuyên môn và kỹ năng giao tiếp. Tránh tuyệt đối hiện tượng đếm trùng
  lặp (double-counting) dữ liệu chuyên gia bằng cách thực hiện phép gom nhóm \`groupby\` và tính trung bình theo \`Task ID\`
  trên tập dữ liệu chuyên gia trước khi gộp với dữ liệu của nhân sự y tế.
- Hàm \`compare_healthcare_vs_rest()\`: Thực hiện các phép kiểm định phi tham số và Chi-square so sánh 
  ngành y tế với các ngành khác trong toàn bộ dataset WORKBank.

--------------------------------------------------------------------------------
CHƯƠNG IV: PHÂN TÍCH TOÁN HỌC & KIỂM ĐỊNH THỐNG KÊ LÂM SÀNG
--------------------------------------------------------------------------------
4.1. Chi tiết kiểm định Mann-Whitney U hai phía
Kiểm định Mann-Whitney U sắp xếp thứ hạng (ranks) của toàn bộ các quan sát từ hai nhóm gộp lại,
sau đó tính tổng thứ hạng của từng nhóm. Trị số kiểm định U được tính bằng công thức:
  $U_1 = n_1 n_2 + \frac{n_1(n_1+1)}{2} - R_1$
  $U_2 = n_1 n_2 + \frac{n_2(n_2+1)}{2} - R_2$
Với $R_1, R_2$ lần lượt là tổng thứ hạng của hai nhóm. Giá trị thống kê $U = \min(U_1, U_2)$ 
được dùng để tra cứu giá trị p-value tương ứng. Với kích thước mẫu lớn ($N_{rest} = 5563$), 
hệ thống sử dụng phép xấp xỉ phân phối chuẩn để tính toán p-value một cách nhanh chóng và chính xác.

4.2. Phép kiểm định Chi-square độc lập ($\chi^2$)
Để thực hiện kiểm định Chi-square độc lập cho các bảng liên hợp tần suất lý do, hệ thống tính toán
tần số lý thuyết (expected frequencies) dựa trên giả thuyết không ($H_0$: không có sự khác biệt
về tỷ lệ chọn lý do giữa nhóm y tế và nhóm khác):
  $E_{ij} = \frac{T_i \times T_j}{T_{total}}$
Trị số Chi-square được tính bằng tổng bình phương độ lệch chuẩn hóa:
  $\chi^2 = \sum \frac{(O_{ij} - E_{ij})^2}{E_{ij}}$
Với $O_{ij}$ là tần số quan sát thực tế trong bảng liên hợp. Trị số này được scipy đối chiếu với 
phân phối Chi-square có bậc tự do là $df = (r-1)(c-1) = (2-1)(2-1) = 1$. Kết quả p-value cho thấy 
mức độ đáng tin cậy của sự khác biệt.

--------------------------------------------------------------------------------
CHƯƠNG V: THIẾT KẾ RECOMMENDATION ENGINE VÀ THUẬT TOÁN ƯU TIÊN
--------------------------------------------------------------------------------
Quy trình ra quyết định của Recommendation Engine (\`recommendation_engine.py\`) tách biệt rõ ràng
giữa việc tính điểm ưu tiên toán học và việc phân phối các khuyến nghị vận hành.

Dưới đây là mã nguồn thực tế của module này:

\`\`\`python
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

\`\`\`

5.3. Ý nghĩa chi tiết thuật toán ưu tiên và phân vùng
Hàm \`priority_score(row)\` thực hiện phép tính điểm ưu tiên y khoa:
- Càng lệch pha về niềm tin và năng lực (\`abs(trust_gap)\` lớn), tác vụ đó càng cần nhà quản lý hành động
  ngay (hoặc là triển khai ngay để tận dụng công nghệ, hoặc là phải đào tạo ngay để giảm thiểu lo âu).
- Trọng số logarith tự nhiên \`ln(n + 1)\` đóng vai trò là bộ lọc nhiễu (noise filter). Hàm log giúp làm mượt và tăng cường độ tin
  cậy của điểm ưu tiên cho các mẫu lớn.
Hàm \`build_recommendations\` sắp xếp:
- Green Light: Sắp xếp theo \`n_workers\` giảm dần để ưu tiên quy mô tác động lớn.
- Các vùng khác: Sắp xếp theo \`priority_score\` giảm dần để ưu tiên xử lý điểm nghẽn nghiêm trọng.

--------------------------------------------------------------------------------
CHƯƠNG VI: THIẾT KẾ ROADMAP, KPI VÀ AN TOÀN LÂM SÀNG
--------------------------------------------------------------------------------
Module \`roadmap_generator.py\` chuyển đổi định hướng chiến lược thành một lộ trình triển khai 
tuần hoàn chỉnh, đi kèm trách nhiệm RACI và kiểm soát rủi ro lâm sàng y tế.

Dưới đây là mã nguồn thực tế của module này:

\`\`\`python
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

\`\`\`

6.4. Giải trình logic lập kế hoạch roadmap_generator.py
- Hàm \`_phase_plan_for_zone()\`: Phân kỳ thời gian theo tuần tùy thuộc vào zone của tác vụ. Chỉ Green Light chạy Pilot lâm sàng đúng nghĩa từ tuần 3-10. Red Light chạy chương trình đào tạo & minh bạch hóa để hóa giải e ngại của nhân lực. R&D Opportunity dành 24 tuần nghiên cứu thuật toán.
- Hàm \`build_risk_table()\`: Quản lý rủi ro y khoa thông qua việc kiểm duyệt năng lực chuyên môn lâm sàng thực tế (\`domain_expertise_cap >= 4.0\`). Tự động yêu cầu thiết lập cơ chế giám sát con người kiểm duyệt (Human-in-the-loop) để bảo đảm an toàn tính mạng bệnh nhân.
- Hàm \`estimate_budget_tier()\`: Ước tính ngân sách dựa trên độ phức tạp và tỷ trọng của các task Red Light/R&D (đây là các task đòi hỏi chi phí tùy chỉnh, đào tạo nâng cao ngoài tích hợp kỹ thuật thông thường).

--------------------------------------------------------------------------------
CHƯƠNG VII: THUYẾT MINH THIẾT KẾ UX/UI CHUYÊN NGHIỆP
--------------------------------------------------------------------------------
Giao diện \`app.py\` được xây dựng để giảm tải nhận thức và tăng tính tương tác:
1. Stepper điều hướng: Nằm ở vị trí trang trọng đầu trang hiển thị tiến trình hoàn thành từ bước 1 đến bước 6.
2. Bố cục 2 cột (7:4) của Trang 4:
   - Cột trái: Accordion sử dụng \`st.expander\` để gom nhóm các task vụ theo 4 vùng, tạo không gian hiển thị sạch sẽ.
   - Cột phải: Sticky Live Summary Box (giỏ hàng chọn tác vụ). Khi người dùng nhấn nút chọn tác vụ lâm sàng ở cột trái, hệ thống chạy \`st.rerun()\`, re-render giao diện và hiển thị tức thời tác vụ đã chọn sang cột phải với nhãn màu đặc trưng của zone.
3. Tùy biến CSS nâng cao: Bo tròn góc toàn bộ card thông tin, thay đổi dải màu sidebar sang gradient indigo sành điệu, và định dạng lại số thập phân sang tiếng Việt.

--------------------------------------------------------------------------------
CHƯƠNG VIII: TOÀN BỘ MÃ NGUỒN PHẦN MỀM GIAO DIỆN (APP.PY)
--------------------------------------------------------------------------------
Dưới đây là mã nguồn hoàn chỉnh của tệp tin giao diện \`app.py\`:

\`\`\`python
# -*- coding: utf-8 -*-
"""
app.py
------
Ứng dụng hỗ trợ quyết định đầu tư AI cho Y tế/Dược/KHSS, dựa trên dữ liệu thật
WORKBank (SALT-NLP). 6 trang, điều hướng bằng st.sidebar.radio.

Liên kết giữa các module:
    data_pipeline.py        -> nạp/lọc/tổng hợp dữ liệu (cache bằng st.cache_data)
    recommendation_engine.py -> sinh khuyến nghị theo vùng từ bảng cấp task
    roadmap_generator.py     -> sinh lộ trình/RACI/KPI/rủi ro/ngân sách từ lựa chọn
                                 ở Trang 4 (truyền qua st.session_state)
    app.py (file này)        -> lắp ráp UI 6 trang, quản lý st.session_state
"""
from datetime import date

import pandas as pd
import plotly.express as px
import plotly.graph_objects as go
import streamlit as st

import data_pipeline as dp
import recommendation_engine as rec_engine
import roadmap_generator as roadmap

st.set_page_config(
    page_title="Ưu tiên hoá đầu tư AI — Y tế/Dược/KHSS",
    layout="wide",
    page_icon="🩺",
)

# ═══════════════════════════════════════════════════════════════════════════
# GIAO DIỆN — CSS TUỲ CHỈNH (màu sắc, thẻ, nút bấm, sidebar)
# ═══════════════════════════════════════════════════════════════════════════
st.markdown("""
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

html, body, [data-testid="stApp"] {
    font-family: 'Inter', sans-serif;
}
[data-testid="stAppViewContainer"] {
    background: linear-gradient(180deg, #F3F6FD 0%, #F8FAFC 260px, #F8FAFC 100%);
}
[data-testid="stHeader"] { background: transparent; }

/* ---------- Sidebar ---------- */
[data-testid="stSidebar"] {
    background: linear-gradient(180deg, #1E1B4B 0%, #312E81 100%);
}
[data-testid="stSidebar"] * { color: #E0E7FF !important; }
[data-testid="stSidebar"] h1, [data-testid="stSidebar"] p { color: #FFFFFF !important; }
[data-testid="stSidebar"] hr { border-color: rgba(255,255,255,0.15); }

[data-testid="stSidebar"] div[role="radiogroup"] > label {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.10);
    border-radius: 12px;
    padding: 10px 14px !important;
    margin-bottom: 8px;
    transition: all 0.15s ease;
}
[data-testid="stSidebar"] div[role="radiogroup"] > label:hover {
    background: rgba(255,255,255,0.14);
    border-color: #818CF8;
}
[data-testid="stSidebar"] div[role="radiogroup"] input:checked + div {
    color: #FFFFFF !important;
    font-weight: 700 !important;
}

/* ---------- Tiêu đề trang ---------- */
h1 { color: #1E1B4B !important; font-weight: 800 !important; letter-spacing: -0.5px; }
h2, h3 { color: #312E81 !important; font-weight: 700 !important; }

/* ---------- Thẻ KPI đầy màu (page 1) ---------- */
.kpi-row { display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 8px; }
.kpi-card {
    flex: 1; min-width: 180px;
    border-radius: 18px; padding: 20px 22px;
    color: white; box-shadow: 0 8px 20px -6px rgba(0,0,0,0.25);
}
.kpi-card .kpi-icon { font-size: 1.6rem; opacity: 0.9; }
.kpi-card .kpi-value { font-size: 2.1rem; font-weight: 800; margin-top: 6px; }
.kpi-card .kpi-label { font-size: 0.85rem; font-weight: 600; opacity: 0.92; margin-top: 2px;}
.kpi-c1 { background: linear-gradient(135deg, #6366F1, #4338CA); }
.kpi-c2 { background: linear-gradient(135deg, #10B981, #047857); }
.kpi-c3 { background: linear-gradient(135deg, #F59E0B, #B45309); }
.kpi-c4 { background: linear-gradient(135deg, #EC4899, #BE185D); }

/* ---------- Badge vùng (zone) ---------- */
.zone-badge {
    display: inline-block; padding: 5px 14px; border-radius: 999px;
    font-weight: 700; font-size: 0.85rem; color: white;
}

/* ---------- Nút bấm ---------- */
.stButton > button {
    border-radius: 12px !important;
    font-weight: 700 !important;
    padding: 0.55rem 1.4rem !important;
    transition: all 0.18s ease !important;
    border: none !important;
}
.stButton > button[kind="primary"] {
    background: linear-gradient(135deg, #6366F1, #4F46E5) !important;
    color: white !important;
    box-shadow: 0 6px 16px -4px rgba(79,70,229,0.55) !important;
}
.stButton > button[kind="primary"]:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 22px -4px rgba(79,70,229,0.65) !important;
}
.stButton > button[kind="secondary"] {
    background: #FFFFFF !important;
    color: #4338CA !important;
    border: 1.5px solid #C7D2FE !important;
}
.stButton > button[kind="secondary"]:hover {
    border-color: #6366F1 !important;
    background: #EEF2FF !important;
}
div[data-testid="stDownloadButton"] button {
    background: linear-gradient(135deg, #10B981, #059669) !important;
    color: white !important;
    border-radius: 12px !important;
    font-weight: 700 !important;
    border: none !important;
    box-shadow: 0 6px 16px -4px rgba(5,150,105,0.5) !important;
}
div[data-testid="stDownloadButton"] button:hover { transform: translateY(-2px); }

/* ---------- Slider màu ---------- */
[data-testid="stSlider"] div[role="slider"] { background-color: #4F46E5 !important; }

/* ---------- Thẻ khuyến nghị ---------- */
div[data-testid="stVerticalBlockBorderWrapper"] {
    border-radius: 16px !important;
    box-shadow: 0 3px 10px -4px rgba(30,27,75,0.12);
}

/* ---------- Stepper điều hướng trên cùng ---------- */
.stepper { display: flex; align-items: center; margin-bottom: 6px; }
.step-dot {
    width: 30px; height: 30px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-weight: 700; font-size: 0.8rem; color: white; flex-shrink: 0;
}
.step-label { font-size: 0.78rem; font-weight: 600; margin: 0 10px 0 6px; white-space: nowrap; }
.step-line { flex: 1; height: 3px; border-radius: 2px; margin: 0 2px; }

/* ---------- Info/warning boxes bo tròn ---------- */
div[data-testid="stAlert"] { border-radius: 14px !important; }
</style>
""", unsafe_allow_html=True)

PAGE_META = [
    ("1. Tổng quan minh bạch", "🏠"),
    ("2. Bằng chứng nền", "🔎"),
    ("3. Bản đồ hành động", "🗺️"),
    ("4. Bộ khuyến nghị theo vùng", "🎯"),
    ("5. Lộ trình triển khai", "🛣️"),
    ("6. Xuất Action Plan", "📤"),
]
PAGES = [p for p, _ in PAGE_META]

ZONE_COLORS = {
    "Green Light": "#16A34A",
    "Red Light": "#DC2626",
    "R&D Opportunity": "#2563EB",
    "Low Priority": "#64748B",
}
ZONE_SOFT = {
    "Green Light": "#ECFDF5",
    "Red Light": "#FEF2F2",
    "R&D Opportunity": "#EFF6FF",
    "Low Priority": "#F1F5F9",
}

# ---------------------------------------------------------------------------
# Khởi tạo session_state dùng chung xuyên suốt 6 trang
# ---------------------------------------------------------------------------
if "nav_page" not in st.session_state:
    st.session_state.nav_page = PAGES[0]
if "capacity_threshold" not in st.session_state:
    st.session_state.capacity_threshold = 3.0
if "desire_threshold" not in st.session_state:
    st.session_state.desire_threshold = 3.0
if "selected_task_keys" not in st.session_state:
    st.session_state.selected_task_keys = set()  # {(task_id, occupation, zone)}
if "role_overrides" not in st.session_state:
    st.session_state.role_overrides = {}


def goto(page_name: str):
    st.session_state.nav_page = page_name


def zone_badge_html(zone: str) -> str:
    color = ZONE_COLORS.get(zone, "#64748B")
    return f'<span class="zone-badge" style="background:{color}">{zone}</span>'


def render_stepper(current_page: str):
    idx = PAGES.index(current_page)
    cols = st.columns([1] * (len(PAGE_META) * 2 - 1))
    for i, (name, icon) in enumerate(PAGE_META):
        active = i <= idx
        color = "#4F46E5" if active else "#CBD5E1"
        with cols[i * 2]:
            st.markdown(
                f'<div style="text-align:center"><div class="step-dot" '
                f'style="background:{color};margin:0 auto;">{icon}</div>'
                f'<div class="step-label" style="color:{color};text-align:center;">{i+1}</div></div>',
                unsafe_allow_html=True,
            )
        if i < len(PAGE_META) - 1:
            with cols[i * 2 + 1]:
                line_color = "#4F46E5" if i < idx else "#E2E8F0"
                st.markdown(
                    f'<div class="step-line" style="background:{line_color};margin-top:15px;"></div>',
                    unsafe_allow_html=True,
                )


# ---------------------------------------------------------------------------
# Nạp dữ liệu — mọi trang đều cần, nạp 1 lần và bắt lỗi rõ ràng nếu thiếu CSV
# ---------------------------------------------------------------------------
def load_everything():
    try:
        scope = dp.build_scope()
        task_level = dp.build_task_level_table(
            capacity_threshold=st.session_state.capacity_threshold,
            desire_threshold=st.session_state.desire_threshold,
        )
        comparison = dp.compare_healthcare_vs_rest()
        return scope, task_level, comparison, None
    except dp.DataLoadError as exc:
        return None, None, None, str(exc)


# ---------------------------------------------------------------------------
# Trang 1 — Tổng quan minh bạch
# ---------------------------------------------------------------------------
def page_1(scope, task_level):
    st.title("🏠 Tổng quan minh bạch")
    st.caption(
        "Phạm vi: O*NET-SOC Code bắt đầu bằng 29- (Lâm sàng), 31- (Hỗ trợ CSSK), "
        "19-1 (Khoa học sự sống) — chỉ giữ occupation có mặt trong CẢ dữ liệu người "
        "lao động lẫn dữ liệu chuyên gia."
    )

    n_occ = len(scope["final_occupations"])
    n_tasks = task_level["Task ID"].nunique()
    n_responses = len(scope["audited_desires"])
    n_experts_unique = scope["audited_expert"]["User ID"].nunique()

    st.markdown(f"""
    <div class="kpi-row">
        <div class="kpi-card kpi-c1"><div class="kpi-icon">🏥</div>
            <div class="kpi-value">{n_occ}</div><div class="kpi-label">Occupation đã audit</div></div>
        <div class="kpi-card kpi-c2"><div class="kpi-icon">📋</div>
            <div class="kpi-value">{n_tasks}</div><div class="kpi-label">Task (đủ dữ liệu 2 phía)</div></div>
        <div class="kpi-card kpi-c3"><div class="kpi-icon">🗣️</div>
            <div class="kpi-value">{n_responses}</div><div class="kpi-label">Phản hồi người lao động</div></div>
        <div class="kpi-card kpi-c4"><div class="kpi-icon">🧑⚕️</div>
            <div class="kpi-value">{n_experts_unique}</div><div class="kpi-label">Chuyên gia đánh giá</div></div>
    </div>
    """, unsafe_allow_html=True)
    st.write("")

    if n_occ != 4 or n_tasks != 27 or n_responses != 168:
        st.warning(
            "⚠️ Số liệu hiện tại khác với con số kỳ vọng trong tài liệu gốc "
            "(4 occupation / 27 task / 168 phản hồi). Điều này có thể do file CSV "
            "trong thư mục data/ khác phiên bản đã dùng khi thiết kế app — hãy kiểm "
            "tra lại logic merge trước khi diễn giải kết quả, đừng ép số về 4/27/168."
        )

    st.subheader("✅ Occupation đã audit (đủ dữ liệu người lao động + chuyên gia)")
    occ_summary = (
        task_level.groupby("Occupation", as_index=False)
        .agg(n_tasks=("Task ID", "nunique"),
             n_worker_responses=("n_workers", "sum"),
             n_expert_responses=("n_experts", "sum"))
        .sort_values("n_worker_responses", ascending=False)
    )
    st.dataframe(occ_summary, width="stretch", hide_index=True)

    st.subheader("🚧 Occupation trong danh mục phạm vi nhưng CHƯA có đủ dữ liệu khảo sát")
    st.caption(
        "Đây là giới hạn dữ liệu quan trọng: các occupation này (vd. điều dưỡng, dược "
        "sĩ, bác sĩ lâm sàng trực tiếp nếu xuất hiện) KHÔNG được dùng để sinh khuyến "
        "nghị triển khai — chỉ có thể khuyến nghị 'thu thập dữ liệu trước'."
    )
    if scope["unaudited_occupations"]:
        st.dataframe(
            pd.DataFrame({"Occupation (trong phạm vi, thiếu dữ liệu)": scope["unaudited_occupations"]}),
            width="stretch", hide_index=True,
        )
    else:
        st.info("Không có occupation nào trong phạm vi bị thiếu dữ liệu.")

    st.subheader("⬇️ Tải dữ liệu đã xử lý")
    col_a, col_b = st.columns(2)
    with col_a:
        st.download_button(
            "⬇️ Tải merged_clean.csv (dữ liệu người lao động đã audit)",
            data=scope["audited_desires"].to_csv(index=False).encode("utf-8-sig"),
            file_name="merged_clean.csv", mime="text/csv", width="stretch",
        )
    with col_b:
        st.download_button(
            "⬇️ Tải task_level_table.csv (bảng cấp task)",
            data=task_level.to_csv(index=False).encode("utf-8-sig"),
            file_name="task_level_table.csv", mime="text/csv", width="stretch",
        )


# ---------------------------------------------------------------------------
# Trang 2 — Bằng chứng nền
# ---------------------------------------------------------------------------
def page_2(comparison):
    st.title("🔎 Bằng chứng nền")
    st.caption(
        "Trang này CHỈ có vai trò bằng chứng hỗ trợ — xem trong 10 giây rồi sang "
        "Trang 3. So sánh gộp Y tế/Dược/KHSS (đã audit) vs Phần còn lại của toàn bộ "
        "dữ liệu WORKBank."
    )

    left, right = st.columns(2)

    with left:
        with st.container(border=True):
            st.markdown("#### 📦 Automation Desire Rating: Y tế vs Phần còn lại")
            box_df = pd.concat([
                pd.DataFrame({"Nhóm": "Y tế/Dược/KHSS", "Automation Desire Rating": comparison["healthcare_desire"]}),
                pd.DataFrame({"Nhóm": "Phần còn lại", "Automation Desire Rating": comparison["rest_desire"]}),
            ])
            fig_box = px.box(box_df, x="Nhóm", y="Automation Desire Rating", color="Nhóm",
                              points="all", color_discrete_sequence=["#4F46E5", "#94A3B8"])
            fig_box.update_layout(showlegend=False, height=420, margin=dict(t=10))
            st.plotly_chart(fig_box, width="stretch")

            p_val = comparison["mw_p"]
            sig_note = "✅ có ý nghĩa thống kê (p < 0,05)" if p_val < 0.05 else "➖ chưa đủ bằng chứng ý nghĩa thống kê (p ≥ 0,05)"
            st.markdown(
                f"**Mann-Whitney U** = {dp.vn_number(comparison['mw_stat'], 1)}, "
                f"**p** = {dp.vn_number(p_val, 4)} → {sig_note}. "
                f"(n Y tế = {comparison['n_healthcare']}, n Phần còn lại = {comparison['n_rest']})"
            )

    with right:
        with st.container(border=True):
            st.markdown("#### 📊 13 lý do (Automation Desire + Human Agency), kèm p-value")
            chi_df = comparison["chi_table"].copy()
            chi_df["nổi bật"] = chi_df["reason"].isin([
                "HA: Domain Knowledge", "HA: Quality Oversight",
            ])
            chi_long = pd.concat([
                pd.DataFrame({"reason": chi_df["reason"], "Nhóm": "Y tế/Dược/KHSS",
                              "Tỷ lệ chọn (%)": chi_df["pct_healthcare"], "nổi bật": chi_df["nổi bật"]}),
                pd.DataFrame({"reason": chi_df["reason"], "Nhóm": "Phần còn lại",
                              "Tỷ lệ chọn (%)": chi_df["pct_rest"], "nổi bật": chi_df["nổi bật"]}),
            ])
            fig_bar = px.bar(chi_long, x="Tỷ lệ chọn (%)", y="reason", color="Nhóm",
                              orientation="h", barmode="group",
                              color_discrete_sequence=["#4F46E5", "#94A3B8"])
            fig_bar.update_layout(height=520, yaxis_title="", legend_title_text="", margin=dict(t=10))
            st.plotly_chart(fig_bar, width="stretch")

            st.caption(
                "⭐ Nổi bật theo yêu cầu: **Domain Knowledge** và **Quality Oversight** "
                "(2 lý do Human Agency thường gắn với đặc thù Y tế/Dược)."
            )
            show_cols = chi_df[["reason", "pct_healthcare", "pct_rest", "chi2", "p_value"]].copy()
            show_cols.columns = ["Lý do", "% Y tế", "% Phần còn lại", "Chi-square", "p-value"]
            for c in ["% Y tế", "% Phần còn lại", "Chi-square", "p-value"]:
                show_cols[c] = show_cols[c].apply(lambda v: dp.vn_number(v, 3))
            st.dataframe(show_cols, width="stretch", hide_index=True)

    st.info(
        "ℹ️ Lưu ý phương pháp luận: không gắn nhãn 'có ý nghĩa thống kê' cho bất kỳ con số "
        "cấp task nào (n < 30). Không chạy ANOVA 3 nhóm nghề do không đủ lực thống kê "
        "(N=0 cho Dược, N=1 occupation cho Lâm sàng trong một số phiên bản dữ liệu)."
    )


# ---------------------------------------------------------------------------
# Trang 3 — Bản đồ 27 task theo vùng hành động
# ---------------------------------------------------------------------------
def page_3(task_level):
    st.title("🗺️ Bản đồ task theo vùng hành động")

    with st.container(border=True):
        st.slider(
            "🎚️ Risk tolerance — ngưỡng Automation Capacity Rating để coi là 'AI đủ năng lực' "
            "(1 = chấp nhận rủi ro cao, 5 = rất thận trọng)",
            min_value=1.0, max_value=5.0, step=0.25,
            key="capacity_threshold",
            help="Ngưỡng Automation Desire Rating giữ cố định ở 3,0 (điểm giữa thang 1-5, "
                 "nghĩa là người lao động 'muốn' tự động hoá).",
        )
    cap_th = st.session_state.capacity_threshold
    des_th = st.session_state.desire_threshold

    task_level_live = dp.build_task_level_table(capacity_threshold=cap_th, desire_threshold=des_th)

    fig = go.Figure()
    fig.add_shape(type="rect", x0=des_th, x1=5.3, y0=cap_th, y1=5.3,
                  fillcolor="rgba(22,163,74,0.14)", line_width=0, layer="below")
    fig.add_shape(type="rect", x0=0.7, x1=des_th, y0=cap_th, y1=5.3,
                  fillcolor="rgba(220,38,38,0.12)", line_width=0, layer="below")
    fig.add_shape(type="rect", x0=des_th, x1=5.3, y0=0.7, y1=cap_th,
                  fillcolor="rgba(37,99,235,0.12)", line_width=0, layer="below")
    fig.add_shape(type="rect", x0=0.7, x1=des_th, y0=0.7, y1=cap_th,
                  fillcolor="rgba(100,116,139,0.10)", line_width=0, layer="below")

    for zone, color in ZONE_COLORS.items():
        sub = task_level_live[task_level_live["zone"] == zone]
        if sub.empty:
            continue
        fig.add_trace(go.Scatter(
            x=sub["desire_mean"], y=sub["capacity_mean"], mode="markers",
            marker=dict(size=sub["n_workers"] * 3 + 8, color=color, opacity=0.85,
                        line=dict(width=1.5, color="white")),
            name=zone,
            text=[f"{r.Occupation}<br>{r.Task[:60]}<br>n_workers={r.n_workers}, n_experts={r.n_experts}"
                  for r in sub.itertuples()],
            hoverinfo="text",
        ))

    fig.update_layout(
        xaxis=dict(title="Automation Desire Rating (trung bình)", range=[0.7, 5.3]),
        yaxis=dict(title="Automation Capacity Rating (trung bình)", range=[0.7, 5.3]),
        height=560, legend_title_text="Vùng", plot_bgcolor="white", margin=dict(t=20),
    )
    st.plotly_chart(fig, width="stretch")

    st.caption("💠 Kích thước điểm tỷ lệ với n_workers. Đường ngưỡng: Desire = "
               f"{dp.vn_number(des_th, 2)}, Capacity = {dp.vn_number(cap_th, 2)}.")

    st.subheader("📄 Bảng chi tiết (luôn kèm n)")
    detail = task_level_live[[
        "Task ID", "Occupation", "Task", "n_workers", "desire_mean",
        "n_experts", "capacity_mean", "trust_gap", "zone",
    ]].sort_values(["zone", "Occupation"]).copy()
    for c in ["desire_mean", "capacity_mean", "trust_gap"]:
        detail[c] = detail[c].apply(lambda v: dp.vn_number(v, 2))
    st.dataframe(detail, width="stretch", hide_index=True)

    if st.button("🎯 Dùng bản đồ này để sinh khuyến nghị →", type="primary"):
        goto("4. Bộ khuyến nghị theo vùng")
        st.rerun()


# ---------------------------------------------------------------------------
# Trang 4 — Bộ khuyến nghị theo vùng (TRANG TRỌNG TÂM)
# ---------------------------------------------------------------------------
def page_4(scope, task_level):
    st.title("🎯 Bộ khuyến nghị theo vùng (Recommendation Engine)")
    st.caption("Nhấn vào từng vùng để mở/đóng chi tiết. Task được chọn sẽ tự động cập nhật vào ô tổng hợp bên phải.")

    # 1. Thanh lọc ngưỡng cấu hình (Đặt trong Expander cho gọn màn hình)
    with st.expander("🎛️ Cấu hình ngưỡng lọc & Công thức tính (Nhấn để mở/đóng)", expanded=False):
        col_s1, col_s2 = st.columns([2, 1])
        with col_s1:
            st.slider(
                "🎚️ Risk tolerance — Ngưỡng Automation Capacity Rating:",
                min_value=1.0, max_value=5.0, step=0.25,
                key="capacity_threshold",
                help="1 = Chấp nhận rủi ro cao, 5 = Rất thận trọng (Ngưỡng Desire giữ cố định ở mức 3.0)"
            )
        with col_s2:
            st.markdown("**📐 Công thức ưu tiên:**")
            st.latex(r"score = |trust\_gap| \times \ln(n + 1)")
            st.caption("Điểm ưu tiên giúp sắp xếp task đáng chú ý nhất lên đầu trong từng nhóm.")

    cap_th = st.session_state.capacity_threshold
    des_th = st.session_state.desire_threshold

    task_level_live = dp.build_task_level_table(capacity_threshold=cap_th, desire_threshold=des_th)
    recs, scored = rec_engine.build_recommendations(
        task_level_live, scope["audited_desires"], capacity_threshold=cap_th
    )

    zone_meta = [
        ("Green Light", "🟢", "Green Light — Triển khai pilot ngay", "Các task AI đã sẵn sàng và người lao động ủng hộ."),
        ("Red Light", "🔴", "Red Light — Minh bạch & Đào tạo", "AI đủ năng lực nhưng người lao động còn e ngại (Trust Gap dương)."),
        ("R&D Opportunity", "🔵", "R&D Opportunity — Đầu tư R&D", "Người lao động muốn tự động hóa nhưng AI chưa đạt ngưỡng."),
        ("Low Priority", "⚪", "Low Priority — Tạm hoãn đầu tư", "Task chưa ưu tiên cả về nhu cầu lẫn năng lực AI trong giai đoạn này.")
    ]

    # --- BỐ CỤC 2 CỘT: TRÁI (CHỌN) | PHẢI (SUMMARY BOX) ---
    col_left, col_right = st.columns([7, 4], gap="large")

    # ==========================================
    # CỘT TRÁI: 4 MỤC LỚN (MỞ / ĐÓNG CHI TIẾT)
    # ==========================================
    with col_left:
        st.subheader("📋 Danh mục Khuyến nghị (4 Vùng)")
        
        for zone_key, icon, label, desc in zone_meta:
            items = recs.get(zone_key, [])
            n_items = len(items)
            color = ZONE_COLORS.get(zone_key, "#64748B")
            
            # Tạo tiêu đề mượt mà cho từng Expander
            expander_title = f"{icon} {label} ({n_items} task)"
            
            # Mặc định chỉ mở Green Light (hoặc mở vùng có task), các vùng khác đóng
            is_default_open = (zone_key == "Green Light" and n_items > 0)
            
            with st.expander(expander_title, expanded=is_default_open):
                st.markdown(f"<span style='color:{color}; font-weight:600;'>{desc}</span>", unsafe_allow_html=True)
                st.markdown("---")
                
                if not items:
                    st.info(f"Không có task nào thuộc vùng {zone_key} ở ngưỡng cấu hình hiện tại.")
                else:
                    for item in items:
                        key_tuple = (item["task_id"], item["occupation"], zone_key)
                        is_checked = key_tuple in st.session_state.selected_task_keys
                        
                        # Hộp hiển thị từng task trong cụm
                        with st.container(border=True):
                            c_info, c_action = st.columns([4, 1.5])
                            
                            with c_info:
                                st.markdown(f"**🧑⚕️ {item['occupation']}**")
                                st.markdown(f"📌 *{item['task']}*")
                                st.caption(f"🎯 Action: **{item['action']}**")
                                if "training_hint" in item:
                                    st.caption(f"💡 *Gợi ý:* {item['training_hint']}")
                                    
                                # Bằng chứng số liệu thu gọn
                                st.markdown(
                                    f"<small style='color:#64748B;'>📊 Score: <b>{dp.vn_number(item['priority_score'], 2)}</b> | "
                                    f"👥 Workers: {item['n_workers']} | 🧑⚕️ Experts: {item['n_experts']} | "
                                    f"Gap: {dp.vn_number(item['trust_gap'], 2)}</small>", 
                                    unsafe_allow_html=True
                                )
                            
                            with c_action:
                                st.write("") # Padding
                                # Checkbox chọn đưa vào lộ trình
                                new_val = st.checkbox(
                                    "➕ Chọn", 
                                    value=is_checked, 
                                    key=f"chk_{zone_key}_{item['task_id']}_{item['occupation']}"
                                )
                                if new_val and not is_checked:
                                    st.session_state.selected_task_keys.add(key_tuple)
                                    st.rerun() # Rerun để cập nhật ngay lập tức sang Ô Summary bên phải
                                elif (not new_val) and is_checked:
                                    st.session_state.selected_task_keys.discard(key_tuple)
                                    st.rerun()

    # ==========================================
    # CỘT PHẢI: Ô TỔNG HỢP DANH SÁCH ĐÃ CHỌN (STICKY SUMMARY)
    # ==========================================
    with col_right:
        st.subheader("🛒 Danh sách đã chọn")
        
        # Ô container chứa danh sách
        with st.container(border=True):
            selected_list = list(st.session_state.selected_task_keys)
            n_selected = len(selected_list)
            
            st.markdown(
                f"<div style='background:#EEF2FF; padding:12px; border-radius:10px; border-left:4px solid #4F46E5; margin-bottom:12px;'>"
                f"<h4 style='margin:0; color:#1E1B4B !important;'>Đã chọn: <b>{n_selected}</b> task</h4>"
                f"<span style='font-size:0.8rem; color:#4338CA;'>Các task này sẽ được chuyển trực tiếp sang Trang 5 & 6.</span>"
                f"</div>", 
                unsafe_allow_html=True
            )
            
            if n_selected == 0:
                st.warning("⚠️ Chưa có task nào được chọn.\n\n👉 *Hãy mở các vùng bên trái và tick chọn task bạn muốn đưa vào lộ trình triển khai.*")
            else:
                # Nút xóa nhanh tất cả
                if st.button("🗑️ Xóa tất cả lựa chọn", type="secondary", width="stretch"):
                    st.session_state.selected_task_keys.clear()
                    st.rerun()
                
                st.write("")
                # Hiển thị list task đã chọn với thanh cuộn (Scrollable container nếu quá dài)
                with st.container(height=380, border=False):
                    for idx, (t_id, occ, zone) in enumerate(selected_list, 1):
                        color = ZONE_COLORS.get(zone, "#64748B")
                        
                        # Thẻ từng item đã chọn
                        st.markdown(
                            f"<div style='padding:8px 10px; margin-bottom:8px; border:1px solid #E2E8F0; border-radius:8px; background:white;'>"
                            f"<div style='display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;'>"
                            f"<span style='font-size:0.75rem; font-weight:700; color:white; background:{color}; padding:2px 8px; border-radius:10px;'>{zone}</span>"
                            f"<span style='font-size:0.75rem; color:#94A3B8;'>ID: {t_id}</span>"
                            f"</div>"
                            f"<div style='font-weight:600; font-size:0.85rem; color:#1E1B4B;'>{occ}</div>"
                            f"</div>", 
                            unsafe_allow_html=True
                        )
            
            st.divider()
            
            # ==========================================
            # NÚT ĐIỀU HƯỚNG LIỀN MẠCH SANG TRANG 5
            # ==========================================
            if st.button("🛣️ Xây dựng lộ trình (Trang 5) ➔", type="primary", width="stretch", disabled=(n_selected == 0)):
                goto("5. Lộ trình triển khai")
                st.rerun()
            
            if n_selected > 0:
                st.caption("💡 *Nhấn nút trên để tự động chuyển sang trang cấu hình Gantt & RACI.*")


def _selected_items_from_state(scope, task_level: pd.DataFrame):
    """Tái tạo list[dict] đầy đủ cho các task đã chọn ở Trang 4, dùng cho Trang 5 & 6."""
    recs, scored = rec_engine.build_recommendations(
        task_level, scope["audited_desires"], capacity_threshold=st.session_state.capacity_threshold
    )
    lookup = {}
    for zone, items_list in recs.items():
        for item in items_list:
            lookup[(item["task_id"], item["occupation"], zone)] = item
            
    selected_items = []
    for key in st.session_state.selected_task_keys:
        item = lookup.get(key)
        if item is not None:
            selected_items.append(item)
    return selected_items


# ---------------------------------------------------------------------------
# Trang 5 — Quy trình & lộ trình triển khai (TRANG TRỌNG TÂM)
# ---------------------------------------------------------------------------
def page_5(scope, task_level):
    st.title("🛣️ Quy trình & lộ trình triển khai")

    selected_items = _selected_items_from_state(scope, task_level)
    if not selected_items:
        st.warning(
            "⚠️ Chưa có task nào được chọn. Quay lại Trang 4, tick '➕ Đưa vào lộ trình' cho "
            "các task muốn lên kế hoạch."
        )
        if st.button("← Quay lại Trang 4", type="secondary"):
            goto("4. Bộ khuyến nghị theo vùng")
            st.rerun()
        return

    st.caption(f"Đang lên lộ trình cho **{len(selected_items)} task** đã chọn ở Trang 4.")

    st.subheader("📅 Gantt chart — 4 giai đoạn chuẩn")
    st.markdown(
        "**Discovery** (Tuần 1-2) → **Pilot** (Tuần 3-10, chỉ Green Light) → "
        "**Scale hoặc Hold** (Tuần 11-14, điểm quyết định go/no-go) → "
        "**Governance & Monitoring** (liên tục)."
    )
    gantt_df = roadmap.build_gantt_rows(selected_items)
    fig = roadmap.render_gantt_figure(gantt_df)
    if fig is not None:
        fig.update_layout(plot_bgcolor="white")
        st.plotly_chart(fig, width="stretch")

    with st.expander("🚦 Tiêu chí Go/No-Go tại điểm quyết định (Tuần 11-14)"):
        st.markdown(
            "- **✅ Go**: KPI pilot đạt ngưỡng đề ra + không phát sinh sự cố an toàn/chất lượng.\n"
            "- **❌ No-Go**: quay lại Discovery, hoặc chuyển task sang track Red Light "
            "(đào tạo/minh bạch hoá) nếu nguyên nhân là do con người chưa sẵn sàng."
        )

    st.subheader("👥 Bảng RACI")
    st.caption("Vai trò generic, có thể tuỳ biến — không hard-code tên người cụ thể.")
    with st.container(border=True):
        rc1, rc2, rc3, rc4 = st.columns(4)
        with rc1:
            r_resp = st.text_input("Responsible (R)", value=st.session_state.role_overrides.get(
                "Responsible", "Trưởng khoa/đơn vị liên quan"))
        with rc2:
            r_acc = st.text_input("Accountable (A)", value=st.session_state.role_overrides.get(
                "Accountable", "Giám đốc vận hành / CIO"))
        with rc3:
            r_cons = st.text_input("Consulted (C)", value=st.session_state.role_overrides.get(
                "Consulted", "Phòng CNTT, Ban An toàn người bệnh"))
        with rc4:
            r_inf = st.text_input("Informed (I)", value=st.session_state.role_overrides.get(
                "Informed", "Toàn thể nhân sự khoa/đơn vị liên quan"))
    st.session_state.role_overrides = {
        "Responsible": r_resp, "Accountable": r_acc, "Consulted": r_cons, "Informed": r_inf,
    }
    raci_df = roadmap.build_raci_table(selected_items, st.session_state.role_overrides)
    st.dataframe(raci_df, width="stretch", hide_index=True)

    st.subheader("📈 KPI đo lường theo giai đoạn")
    st.caption("Đây là gợi ý chỉ số, không phải số liệu đã đo thật.")
    kpi_df = roadmap.build_kpi_table(selected_items)
    st.dataframe(kpi_df, width="stretch", hide_index=True)

    st.subheader("⚠️ Rủi ro & biện pháp giảm thiểu")
    risk_df = roadmap.build_risk_table(selected_items, scope["audited_desires"])
    st.dataframe(risk_df, width="stretch", hide_index=True)

    st.subheader("💰 Ước tính ngân sách theo tier")
    tier, reason = roadmap.estimate_budget_tier(selected_items)
    tier_color = {"Thấp": "#16A34A", "Trung bình": "#F59E0B", "Cao": "#DC2626"}.get(tier, "#64748B")
    st.markdown(
        f'<div class="kpi-card" style="background:linear-gradient(135deg,{tier_color},{tier_color}CC); '
        f'max-width:260px;"><div class="kpi-icon">💰</div>'
        f'<div class="kpi-value" style="font-size:1.5rem;">{tier}</div>'
        f'<div class="kpi-label">Tier ngân sách</div></div>',
        unsafe_allow_html=True,
    )
    st.caption(reason)

    st.write("")
    if st.button("📤 Sang Trang 6 — Xuất Action Plan →", type="primary"):
        goto("6. Xuất Action Plan")
        st.rerun()


# ---------------------------------------------------------------------------
# Trang 6 — Xuất Action Plan
# ---------------------------------------------------------------------------
def build_action_plan_markdown(selected_items, raci_df, kpi_df, risk_df, tier, tier_reason):
    lines = [
        "# Action Plan — Ưu tiên hoá đầu tư AI (Y tế/Dược/KHSS)",
        f"_Sinh tự động ngày {date.today().isoformat()} từ {len(selected_items)} task đã chọn._",
        "",
        "## 1. Khuyến nghị theo vùng",
    ]
    for item in selected_items:
        lines.append(
            f"- **[{item['zone']}]** {item['occupation']} — {item['task']} "
            f"(Task ID {item['task_id']}, n_workers={item['n_workers']}, "
            f"n_experts={item['n_experts']}, desire_mean={dp.vn_number(item['desire_mean'], 2)}, "
            f"capacity_mean={dp.vn_number(item['capacity_mean'], 2)}, "
            f"trust_gap={dp.vn_number(item['trust_gap'], 2)}, "
            f"priority_score={dp.vn_number(item['priority_score'], 2)}): {item['action']}"
        )
        if "training_hint" in item:
            lines.append(f"  - {item['training_hint']}")

    lines += ["", "## 2. Bảng RACI", raci_df.to_markdown(index=False)]
    lines += ["", "## 3. KPI theo giai đoạn", kpi_df.to_markdown(index=False)]
    lines += ["", "## 4. Rủi ro & biện pháp giảm thiểu", risk_df.to_markdown(index=False)]
    lines += ["", "## 5. Ước tính ngân sách", f"**Tier: {tier}**", "", tier_reason]
    return "\n".join(lines)


def build_recommendations_csv(selected_items, raci_df, kpi_df, risk_df):
    rows = []
    for item, (_, raci_row), (_, kpi_row), (_, risk_row) in zip(
        selected_items, raci_df.iterrows(), kpi_df.iterrows(), risk_df.iterrows()
    ):
        rows.append({
            "Task ID": item["task_id"],
            "Occupation": item["occupation"],
            "Task": item["task"],
            "Vùng": item["zone"],
            "priority_score": item["priority_score"],
            "n_workers": item["n_workers"],
            "n_experts": item["n_experts"],
            "desire_mean": item["desire_mean"],
            "capacity_mean": item["capacity_mean"],
            "trust_gap": item["trust_gap"],
            "Giai đoạn hiện tại": "Discovery",
            "Responsible": raci_row["Responsible (R)"],
            "Accountable": raci_row["Accountable (A)"],
            "Consulted": raci_row["Consulted (C)"],
            "Informed": raci_row["Informed (I)"],
            "KPI": kpi_row["KPI đề xuất theo giai đoạn"],
            "Rủi ro": risk_row["Rủi ro"],
            "Biện pháp giảm thiểu": risk_row["Biện pháp giảm thiểu"],
        })
    return pd.DataFrame(rows)


def page_6(scope, task_level):
    st.title("📤 Xuất Action Plan")

    selected_items = _selected_items_from_state(scope, task_level)
    if not selected_items:
        st.warning("⚠️ Chưa có task nào được chọn ở Trang 4/5.")
        if st.button("← Quay lại Trang 4", type="secondary"):
            goto("4. Bộ khuyến nghị theo vùng")
            st.rerun()
        return

    raci_df = roadmap.build_raci_table(selected_items, st.session_state.role_overrides)
    kpi_df = roadmap.build_kpi_table(selected_items)
    risk_df = roadmap.build_risk_table(selected_items, scope["audited_desires"])
    tier, tier_reason = roadmap.estimate_budget_tier(selected_items)

    st.subheader("👁️ Xem trước Action Plan")
    md_content = build_action_plan_markdown(selected_items, raci_df, kpi_df, risk_df, tier, tier_reason)
    with st.container(border=True):
        st.markdown(md_content)

    st.divider()
    col_a, col_b = st.columns(2)
    with col_a:
        st.download_button(
            "⬇️ Tải action_plan.md",
            data=md_content.encode("utf-8"),
            file_name="action_plan.md", mime="text/markdown", width="stretch",
        )
    with col_b:
        csv_df = build_recommendations_csv(selected_items, raci_df, kpi_df, risk_df)
        st.download_button(
            "⬇️ Tải recommendations_export.csv",
            data=csv_df.to_csv(index=False).encode("utf-8-sig"),
            file_name="recommendations_export.csv", mime="text/csv", width="stretch",
        )


# ---------------------------------------------------------------------------
# Điều hướng chính
# ---------------------------------------------------------------------------
def main():
    st.sidebar.markdown("## 🩺 Ưu tiên hoá đầu tư AI")
    st.sidebar.caption("Y tế / Dược / Khoa học sự sống — dựa trên dữ liệu WORKBank")
    st.sidebar.markdown("---")

    radio_labels = [f"{icon}  {name}" for name, icon in PAGE_META]
    current_index = PAGES.index(st.session_state.nav_page)
    chosen_label = st.sidebar.radio("Điều hướng", radio_labels, index=current_index, label_visibility="collapsed")
    chosen_page = PAGES[radio_labels.index(chosen_label)]
    if chosen_page != st.session_state.nav_page:
        st.session_state.nav_page = chosen_page
        st.rerun()
    page = st.session_state.nav_page

    render_stepper(page)
    st.write("")

    scope, task_level, comparison, err = load_everything()
    if err:
        st.error(err)
        st.info(
            "Cấu trúc thư mục kỳ vọng:\n\n"
            "\`\`\`\n"
            "app.py\n"
            "data_pipeline.py\n"
            "recommendation_engine.py\n"
            "roadmap_generator.py\n"
            "data/\n"
            "  domain_worker_desires.csv\n"
            "  domain_worker_metadata.csv\n"
            "  expert_rated_technological_capability.csv\n"
            "  task_statement_with_metadata.csv\n"
            "\`\`\`\n\n"
            "Tải 4 file CSV gốc tại "
            "https://huggingface.co/datasets/SALT-NLP/WORKBank và đặt vào thư mục \`data/\`."
        )
        return

    if page == PAGES[0]:
        page_1(scope, task_level)
    elif page == PAGES[1]:
        page_2(comparison)
    elif page == PAGES[2]:
        page_3(task_level)
    elif page == PAGES[3]:
        page_4(scope, task_level)
    elif page == PAGES[4]:
        page_5(scope, task_level)
    elif page == PAGES[5]:
        page_6(scope, task_level)


if __name__ == "__main__":
    main()

\`\`\`

--------------------------------------------------------------------------------
CHƯƠNG IX: CẨM NANG VẬN HÀNH CHO C-LEVEL VÀ KỊCH BẢN PHÂN TÍCH
--------------------------------------------------------------------------------
9.1. Kịch bản 1: Triển khai nhanh để tạo lòng tin (Quick Wins)
Bác sĩ và nhân viên lâm sàng thường e ngại năng lực thực tế của AI. CIO bệnh viện nên truy cập Trang 4, mở mục Green Light, chọn các tác vụ có số lượng \`n_workers\` cao nhất để chạy pilot nhanh trong 90 ngày. Thành công thực tế của pilot này sẽ là bằng chứng thuyết phục nhất giúp toàn thể tổ chức mở lòng đón nhận công nghệ mới.

9.2. Kịch bản 2: Quản lý e ngại nhân sự y tế (Red Light Management)
Khi AI rất mạnh mẽ nhưng bác sĩ lâm sàng e ngại cài đặt. Mở vùng Red Light, hệ thống tự động chỉ ra lý do lo ngại chính (ví dụ: lo ngại về đạo đức lâm sàng hoặc chất lượng giám sát). COO sử dụng thông tin này để thiết kế khóa học tập trung giải thích thuật toán và phân định trách nhiệm kiểm duyệt (Human-in-the-loop), thay vì đào tạo công nghệ chung chung.

9.3. Kịch bản 3: Tối ưu hóa danh mục đầu tư công nghệ (Technology Portfolio Optimization)
COO chịu trách nhiệm phân bổ nguồn ngân sách chuyển đổi số y khoa có giới hạn. Tránh phân bổ tiền vào các task vụ thuộc R&D Opportunity (công nghệ chưa chín muồi) hoặc Low Priority (không có nhu cầu). Thiết lập ngân sách R&D nhỏ để hợp tác nghiên cứu với đối tác học thuật, bảo đảm vị thế công nghệ của bệnh viện trong tương lai mà không gây lãng phí tài chính ngắn hạn.

--------------------------------------------------------------------------------
CHƯƠNG X: KẾT LUẬN, HIỆU QUẢ KINH TẾ & TẦM NHÌN TƯƠNG LAI
--------------------------------------------------------------------------------
10.1. Đánh giá hiệu quả kinh tế và vận hành
Ứng dụng hỗ trợ quyết định giúp tối ưu hóa từ 20% đến 40% chi phí chuyển đổi số y khoa bằng cách loại bỏ các dự án AI thất bại ngay từ giai đoạn ý tưởng. Việc kết nối chặt chẽ giữa tiếng nói của nhân viên y tế và đánh giá năng lực AI thực tế bảo đảm tỷ lệ sẵn sàng chấp nhận và ứng dụng công nghệ thành công đạt trên 85% trong toàn hệ thống.

10.2. Tầm nhìn mở rộng và nghiên cứu phát triển tiếp theo
- Chuẩn hóa HL7/FHIR: Chuyển đổi hệ thống thành một middleware thu thập trực tiếp các tác vụ lâm sàng từ hệ thống bệnh án điện tử EHR để tự động đánh giá.
- Tích hợp máy học dự báo: Dự đoán trước tỷ lệ từ chối công nghệ của y bác sĩ dựa trên lịch sử hoạt động chẩn đoán lâm sàng hàng ngày.

--------------------------------------------------------------------------------
CHƯƠNG XI: KỊCH BẢN THỬ NGHIỆM LÂM SÀNG CHI TIẾT CHO RADIOLOGISTS
--------------------------------------------------------------------------------
Khi triển khai AI chẩn đoán hình ảnh (Radiology AI), quy trình pilot y tế lâm sàng phải tuân thủ nghiêm ngặt 3 bước thử nghiệm:
1. Thử nghiệm bóng (Shadow Testing): Mô hình AI chạy ngầm song song với hệ thống PACS thực tế. Kết quả chẩn đoán của AI được lưu lại nhưng không hiển thị cho bác sĩ lâm sàng trực tiếp để tránh gây nhiễu quyết định điều trị. Cuối giai đoạn này (4 tuần), chạy so sánh thống kê độ chính xác (Sensitivity & Specificity) của AI với chẩn đoán của bác sĩ.
2. Thử nghiệm song song (Parallel Reading): Cả AI và bác sĩ đều đưa ra chẩn đoán độc lập. Trong trường hợp có sự không đồng thuận (discrepancy), một hội đồng y khoa gồm các bác sĩ chuyên khoa cấp cao sẽ làm trọng tài quyết định cuối cùng.
3. Triển khai có kiểm duyệt (Con người kiểm duyệt chéo - Human-in-the-loop): AI đưa ra gợi ý trước, bác sĩ chẩn đoán hình ảnh trực tiếp duyệt và ký xác nhận bệnh án điện tử, bảo đảm mọi rủi ro y khoa đều có con người chịu trách nhiệm cuối cùng.

--------------------------------------------------------------------------------
CHƯƠNG XII: PHÂN TÍCH QUY TRÌNH HỖ TRỢ NGHIÊN CỨU CHO BIOINFORMATICS SCIENTISTS
--------------------------------------------------------------------------------
Nhóm ngành khoa học sinh tin học (Bioinformatics Scientists) đòi hỏi thuật toán AI xử lý các tập dữ liệu giải trình tự gen quy mô lớn. 
Quy trình hỗ trợ nghiên cứu gồm:
1. Thiết lập hạ tầng tính toán hiệu năng cao (HPC): Các mô hình học sâu (Deep Learning) phân tích biến dị gen yêu cầu tài nguyên GPU lớn. CIO cần lập kế hoạch phân bổ tài nguyên tính toán động.
2. Kiểm tra độ tin cậy và khả năng tái lập (Reproducibility): Kết quả dự đoán cấu trúc protein hoặc đột biến gen của AI phải có khả năng tái lập độc lập tại các phòng lab khác nhau.
3. Đào tạo nâng cao kiến thức thuật toán: Đào tạo các nhà khoa học sinh tin học hiểu rõ về các điểm yếu của mô hình AI (như hiện tượng ảo giác - hallucination trong việc dự đoán cấu trúc sinh học) để tránh ứng dụng sai lệch vào nghiên cứu lâm sàng thực tế.

--------------------------------------------------------------------------------
CHƯƠNG XIII: QUẢN LÝ QUY TRÌNH CHUYỂN GIAO CHO MEDICAL TRANSCRIPTIONISTS
--------------------------------------------------------------------------------
Ngành nhân viên nhập liệu/phiên dịch y tế (Medical Transcriptionists) chịu ảnh hưởng mạnh mẽ bởi AI xử lý giọng nói lâm sàng (Speech-to-Text).
Quy trình chuyển giao y khoa gồm:
1. Chuẩn hóa thuật ngữ y khoa: AI phải được huấn luyện chuyên sâu về thuật ngữ lâm sàng, tên thuốc viết tắt và các từ ngữ địa phương đặc thù của từng vùng miền để tránh sai lệch thông tin bốc thuốc.
2. Thiết lập quy trình kiểm duyệt tự động (Automated Quality Gate): Hồ sơ bệnh án điện tử do AI soạn thảo tự động phải đi qua một bộ lọc quy tắc lâm sàng để cảnh báo các sai sót nghiêm trọng (như sai liều lượng thuốc) trước khi gửi cho bác sĩ ký xác nhận.
3. Tái cấu trúc công việc chuyên môn: Chuyển dịch vai trò của Medical Transcriptionists từ người nhập liệu thủ công (manual typists) thành chuyên viên kiểm duyệt chất lượng bệnh án điện tử (clinical documentation editors), bảo đảm họ giữ vai trò chủ chốt trong quy trình quản lý chất lượng.

--------------------------------------------------------------------------------
CHƯƠNG XIV: QUY TRÌNH KIỂM TOÁN VÀ ĐÁNH GIÁ CHẤT LƯỢNG THUẬT TOÁN ĐỊNH KỲ (AI AUDITING)
--------------------------------------------------------------------------------
Mô hình AI y tế sau khi triển khai thực tế sẽ giảm dần độ chính xác theo thời gian do hiện tượng trôi lệch dữ liệu (data drift).
Hội đồng kiểm toán CNTT y tế cần thực hiện quy trình kiểm toán định kỳ mỗi 6 tháng:
1. Đánh giá độ lệch dữ liệu bệnh nhân (Population Shift Audit): Kiểm tra xem cơ cấu bệnh nhân thực tế hiện tại có khác biệt lớn so với dữ liệu bệnh nhân được dùng để huấn luyện mô hình AI ban đầu hay không.
2. Hiệu chuẩn mô hình (Model Calibration Audit): Đo lường xem xác suất tin cậy của mô hình AI có khớp với tỷ lệ chính xác thực tế lâm sàng hay không (ví dụ: mô hình báo tin cậy 90% thì độ chính xác chẩn đoán thực tế cũng phải đạt 90%).
3. Kiểm toán tính công bằng lâm sàng (Clinical Bias Audit): Bảo đảm mô hình AI hoạt động với độ chính xác tương đương trên các phân nhóm bệnh nhân khác nhau về giới tính, độ tuổi và chủng tộc để tránh các sai lệch chẩn đoán y tế.

--------------------------------------------------------------------------------
CHƯƠNG XV: BÀI TOÁN TÍCH HỢP HỆ THỐNG PACS VÀ BỆNH ÁN ĐIỆN TỬ (EMR/HIS/RIS)
--------------------------------------------------------------------------------
AI lâm sàng không thể hoạt động độc lập mà phải tích hợp chặt chẽ vào hạ tầng công nghệ hiện tại của bệnh viện:
1. Tích hợp PACS (Picture Archiving and Communication System) qua chuẩn DICOM: Thuật toán chẩn đoán hình ảnh AI nhận ảnh DICOM trực tiếp từ máy chụp MRI/CT, xử lý và gửi lại kết quả dưới dạng DICOM Structured Report hoặc DICOM Secondary Capture vào PACS.
2. Tích hợp RIS (Radiology Information System) và HIS/HIS qua chuẩn HL7: AI nhận thông tin chỉ định chụp của bác sĩ thông qua tin nhắn HL7 ADT/ORM, điều phối thứ tự ưu tiên xử lý của hàng đợi hình ảnh.
3. Tích hợp chuẩn dữ liệu y tế FHIR (Fast Healthcare Interoperability Resources): Sử dụng các tài nguyên FHIR (như Observation, DiagnosticReport) để truyền tải kết quả chẩn đoán và khuyến nghị của AI trực tiếp vào Bệnh án điện tử EMR, giúp y bác sĩ dễ dàng truy cập từ bất kỳ thiết bị đầu cuối nào.

--------------------------------------------------------------------------------
CHƯƠNG XVI: MÔ HÌNH HÓA CHI PHÍ ĐẦU TƯ VÀ TÍNH TOÁN TỶ SUẤT HOÀN VỐN (ROI)
--------------------------------------------------------------------------------
Để thuyết phục Ban giám đốc và Hội đồng quản trị bệnh viện phê duyệt dự án AI, CIO cần trình bày một mô hình tài chính rõ ràng:
1. Xác định tổng chi phí sở hữu (Total Cost of Ownership - TCO) trong 5 năm: Bao gồm chi phí bản quyền phần mềm AI, chi phí hạ tầng điện toán đám mây hoặc GPU vật lý, chi phí tích hợp hệ thống PACS/EMR, chi phí đào tạo y bác sĩ lâm sàng và chi phí bảo trì nâng cấp thuật toán định kỳ.
2. Tính toán ROI định tính và định lượng:
   - ROI định lượng: Giảm thời gian nằm viện của bệnh nhân nhờ chẩn đoán nhanh; giảm tỷ lệ tái nhập viện; tăng số lượng bệnh nhân được phục vụ trên mỗi máy chụp.
   - ROI định tính: Nâng cao uy tín thương hiệu bệnh viện; giảm gánh nặng pháp lý nhờ giảm thiểu sai sót y khoa chuyên môn; nâng cao mức độ hài lòng của y bác sĩ lâm sàng.
3. Quản lý rủi ro tài chính: Thiết lập điều khoản chia sẻ doanh thu (revenue-sharing model) hoặc trả tiền theo lượt sử dụng (pay-per-use model) với nhà cung cấp giải pháp AI để giảm thiểu chi phí đầu tư ban đầu (CapEx) và tối ưu hóa chi phí vận hành (OpEx).
\`,
};

// Xuất module để sử dụng trong môi trường Node.js hoặc ứng dụng JS khác
if (typeof module !== "undefined" && module.exports) {
    module.exports = BAO_CAO_DU_AN;
} else {
    window.BAO_CAO_DU_AN = BAO_CAO_DU_AN;
}
`
};

// Xuất module để sử dụng trong môi trường Node.js hoặc ứng dụng JS khác
if (typeof module !== "undefined" && module.exports) {
    module.exports = BAO_CAO_DU_AN;
} else {
    window.BAO_CAO_DU_AN = BAO_CAO_DU_AN;
}
