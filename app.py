# -*- coding: utf-8 -*-
"""
app.py
------
Ứng dụng hỗ trợ quyết định đầu tư AI cho Y tế/Dược/KHSS, dựa trên dữ liệu thật
WORKBank (SALT-NLP). 6 trang, điều hướng bằng st.sidebar.radio.
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
    page_title="Đầu tư AI trong Y tế — Hệ thống hỗ trợ quyết định",
    layout="wide",
    page_icon="🩺",
)

# ═══════════════════════════════════════════════════════════════════════════
# GIAO DIỆN — CSS TUỲ CHỈNH
# ═══════════════════════════════════════════════════════════════════════════
st.markdown("""
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

html, body, [data-testid="stApp"] {
    font-family: 'Inter', sans-serif;
}
[data-testid="stAppViewContainer"] {
    background: linear-gradient(180deg, #F0F4FF 0%, #F8FAFC 300px, #F8FAFC 100%);
}
[data-testid="stHeader"] { background: transparent; }

/* ---------- Sidebar ---------- */
[data-testid="stSidebar"] {
    background: linear-gradient(180deg, #1E1B4B 0%, #312E81 60%, #1e3a5f 100%);
}
[data-testid="stSidebar"] * { color: #E0E7FF !important; }
[data-testid="stSidebar"] h1,
[data-testid="stSidebar"] h2,
[data-testid="stSidebar"] p { color: #FFFFFF !important; }
[data-testid="stSidebar"] hr { border-color: rgba(255,255,255,0.15); }

[data-testid="stSidebar"] div[role="radiogroup"] > label {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.10);
    border-radius: 12px;
    padding: 10px 14px !important;
    margin-bottom: 8px;
    transition: all 0.18s ease;
}
[data-testid="stSidebar"] div[role="radiogroup"] > label:hover {
    background: rgba(255,255,255,0.14);
    border-color: #818CF8;
    transform: translateX(3px);
}
[data-testid="stSidebar"] div[role="radiogroup"] input:checked + div {
    color: #FFFFFF !important;
    font-weight: 700 !important;
}

/* ---------- Tiêu đề trang ---------- */
h1 { color: #1E1B4B !important; font-weight: 800 !important; letter-spacing: -0.5px; }
h2, h3 { color: #312E81 !important; font-weight: 700 !important; }
h4 { color: #1E3A5F !important; font-weight: 600 !important; }

/* ---------- Thẻ KPI đầy màu ---------- */
.kpi-row { display: flex; gap: 18px; flex-wrap: wrap; margin-bottom: 10px; }
.kpi-card {
    flex: 1; min-width: 185px;
    border-radius: 20px; padding: 22px 24px;
    color: white; box-shadow: 0 10px 24px -6px rgba(0,0,0,0.22);
    transition: transform 0.2s ease;
}
.kpi-card:hover { transform: translateY(-3px); }
.kpi-card .kpi-icon { font-size: 1.8rem; opacity: 0.88; }
.kpi-card .kpi-value { font-size: 2.3rem; font-weight: 800; margin-top: 8px; line-height: 1; }
.kpi-card .kpi-label { font-size: 0.83rem; font-weight: 600; opacity: 0.90; margin-top: 6px; }
.kpi-c1 { background: linear-gradient(135deg, #6366F1, #4338CA); }
.kpi-c2 { background: linear-gradient(135deg, #10B981, #047857); }
.kpi-c3 { background: linear-gradient(135deg, #F59E0B, #B45309); }
.kpi-c4 { background: linear-gradient(135deg, #EC4899, #BE185D); }

/* ---------- Badge vùng ---------- */
.zone-badge {
    display: inline-block; padding: 5px 14px; border-radius: 999px;
    font-weight: 700; font-size: 0.82rem; color: white;
}

/* ---------- Nút bấm ---------- */
.stButton > button {
    border-radius: 12px !important;
    font-weight: 600 !important;
    padding: 0.55rem 1.4rem !important;
    transition: all 0.18s ease !important;
    border: none !important;
    letter-spacing: 0.01em !important;
}
.stButton > button[kind="primary"] {
    background: linear-gradient(135deg, #6366F1, #4F46E5) !important;
    color: white !important;
    box-shadow: 0 6px 16px -4px rgba(79,70,229,0.50) !important;
}
.stButton > button[kind="primary"]:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 22px -4px rgba(79,70,229,0.60) !important;
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
    box-shadow: 0 6px 16px -4px rgba(5,150,105,0.45) !important;
}
div[data-testid="stDownloadButton"] button:hover { transform: translateY(-2px); }

/* ---------- Slider ---------- */
[data-testid="stSlider"] div[role="slider"] { background-color: #4F46E5 !important; }

/* ---------- Container bo tròn ---------- */
div[data-testid="stVerticalBlockBorderWrapper"] {
    border-radius: 16px !important;
    box-shadow: 0 3px 12px -4px rgba(30,27,75,0.10) !important;
}

/* ---------- Stepper điều hướng ---------- */
.step-dot {
    width: 30px; height: 30px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-weight: 700; font-size: 0.8rem; color: white; flex-shrink: 0;
}
.step-label { font-size: 0.78rem; font-weight: 600; margin: 0 10px 0 6px; white-space: nowrap; }
.step-line { flex: 1; height: 3px; border-radius: 2px; margin: 0 2px; }

/* ---------- Alert bo tròn ---------- */
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
    "Green Light":      "#16A34A",
    "Red Light":        "#DC2626",
    "R&D Opportunity":  "#2563EB",
    "Low Priority":     "#64748B",
}
ZONE_DISPLAY = {
    "Green Light":      "✅ Sẵn sàng triển khai",
    "Red Light":        "⚠️ Cần chuẩn bị thêm",
    "R&D Opportunity":  "🔬 Cần nghiên cứu thêm",
    "Low Priority":     "📋 Chưa ưu tiên lúc này",
}

# ---------------------------------------------------------------------------
# Khởi tạo session_state
# ---------------------------------------------------------------------------
if "nav_page" not in st.session_state:
    st.session_state.nav_page = PAGES[0]
if "capacity_threshold" not in st.session_state:
    st.session_state.capacity_threshold = 3.0
if "desire_threshold" not in st.session_state:
    st.session_state.desire_threshold = 3.0
if "selected_task_keys" not in st.session_state:
    st.session_state.selected_task_keys = set()
if "role_overrides" not in st.session_state:
    st.session_state.role_overrides = {}


def goto(page_name: str):
    st.session_state.nav_page = page_name


def zone_badge_html(zone: str) -> str:
    color = ZONE_COLORS.get(zone, "#64748B")
    label = ZONE_DISPLAY.get(zone, zone)
    return f'<span class="zone-badge" style="background:{color}">{label}</span>'


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
# Nạp dữ liệu
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
# Trang 1 — Tổng quan dữ liệu
# ---------------------------------------------------------------------------
def page_1(scope, task_level):
    st.title("🏠 Tổng quan dữ liệu nghiên cứu")
    st.caption(
        "Phạm vi nghiên cứu gồm các nhóm nghề thuộc lĩnh vực Y tế lâm sàng (mã O*NET 29-), "
        "Hỗ trợ chăm sóc sức khoẻ (31-) và Khoa học sự sống (19-1). "
        "Chỉ những nghề có đủ dữ liệu từ cả hai phía — người lao động và chuyên gia — "
        "mới được đưa vào phân tích."
    )

    n_occ            = len(scope["final_occupations"])
    n_tasks          = task_level["Task ID"].nunique()
    n_responses      = len(scope["audited_desires"])
    n_experts_unique = scope["audited_expert"]["User ID"].nunique()

    st.markdown(f"""
    <div class="kpi-row">
        <div class="kpi-card kpi-c1"><div class="kpi-icon">🏥</div>
            <div class="kpi-value">{n_occ}</div>
            <div class="kpi-label">Nhóm nghề được phân tích</div></div>
        <div class="kpi-card kpi-c2"><div class="kpi-icon">📋</div>
            <div class="kpi-value">{n_tasks}</div>
            <div class="kpi-label">Công việc (task) có đủ dữ liệu</div></div>
        <div class="kpi-card kpi-c3"><div class="kpi-icon">🗣️</div>
            <div class="kpi-value">{n_responses}</div>
            <div class="kpi-label">Phản hồi từ người lao động</div></div>
        <div class="kpi-card kpi-c4"><div class="kpi-icon">🧑‍⚕️</div>
            <div class="kpi-value">{n_experts_unique}</div>
            <div class="kpi-label">Chuyên gia tham gia đánh giá</div></div>
    </div>
    """, unsafe_allow_html=True)
    st.write("")

    if n_occ != 4 or n_tasks != 27 or n_responses != 168:
        st.warning(
            "⚠️ Số liệu hiện tại khác với con số trong tài liệu gốc "
            "(4 nhóm nghề / 27 công việc / 168 phản hồi). "
            "Có thể file dữ liệu trong thư mục data/ là phiên bản khác — "
            "hãy kiểm tra lại trước khi diễn giải kết quả."
        )

    st.subheader("✅ Các nhóm nghề được đưa vào phân tích")
    st.caption(
        "Những nhóm nghề dưới đây có đủ dữ liệu từ cả người lao động lẫn "
        "chuyên gia đánh giá năng lực AI."
    )
    occ_summary = (
        task_level.groupby("Occupation", as_index=False)
        .agg(
            n_tasks=("Task ID", "nunique"),
            n_worker_responses=("n_workers", "sum"),
            n_expert_responses=("n_experts", "sum"),
        )
        .sort_values("n_worker_responses", ascending=False)
        .rename(columns={
            "Occupation":         "Nhóm nghề",
            "n_tasks":            "Số công việc được khảo sát",
            "n_worker_responses": "Tổng phản hồi người lao động",
            "n_expert_responses": "Tổng đánh giá chuyên gia",
        })
    )
    st.dataframe(occ_summary, width="stretch", hide_index=True)

    st.subheader("🚧 Nhóm nghề trong phạm vi nhưng chưa đủ dữ liệu")
    st.caption(
        "Các nhóm nghề này nằm trong phạm vi nghiên cứu nhưng thiếu dữ liệu "
        "từ người lao động hoặc chuyên gia, nên không đưa vào phân tích."
    )
    if scope["unaudited_occupations"]:
        st.dataframe(
            pd.DataFrame({"Nhóm nghề (trong phạm vi, chưa đủ dữ liệu)": scope["unaudited_occupations"]}),
            width="stretch", hide_index=True,
        )
    else:
        st.info("Tất cả nhóm nghề trong phạm vi đều có đủ dữ liệu để phân tích.")

    st.subheader("⬇️ Tải dữ liệu đã xử lý")
    col_a, col_b = st.columns(2)
    with col_a:
        st.download_button(
            "⬇️ Tải dữ liệu người lao động (đã lọc)",
            data=scope["audited_desires"].to_csv(index=False).encode("utf-8-sig"),
            file_name="du_lieu_nguoi_lao_dong.csv", mime="text/csv", width="stretch",
        )
    with col_b:
        st.download_button(
            "⬇️ Tải bảng tổng hợp theo công việc",
            data=task_level.to_csv(index=False).encode("utf-8-sig"),
            file_name="bang_tong_hop_cong_viec.csv", mime="text/csv", width="stretch",
        )


# ---------------------------------------------------------------------------
# Trang 2 — Bằng chứng nền
# ---------------------------------------------------------------------------
def page_2(comparison):
    st.title("🔎 Bằng chứng nền tảng")
    st.caption(
        "Trang này so sánh mức độ mong muốn tự động hóa và lý do giữ lại yếu tố con người "
        "giữa nhóm Y tế–Dược–Khoa học sự sống và toàn bộ các ngành còn lại trong dữ liệu WORKBank. "
        "Đây là bằng chứng cho thấy ngành Y tế có đặc thù riêng so với mặt bằng chung."
    )

    left, right = st.columns(2)

    with left:
        with st.container(border=True):
            st.markdown("#### 📦 Mức độ mong muốn tự động hóa: Y tế so với các ngành khác")
            box_df = pd.concat([
                pd.DataFrame({
                    "Nhóm": "Y tế–Dược–Khoa học sự sống",
                    "Mức độ mong muốn tự động hóa (1–5)": comparison["healthcare_desire"]
                }),
                pd.DataFrame({
                    "Nhóm": "Các ngành còn lại",
                    "Mức độ mong muốn tự động hóa (1–5)": comparison["rest_desire"]
                }),
            ])
            fig_box = px.box(
                box_df, x="Nhóm", y="Mức độ mong muốn tự động hóa (1–5)", color="Nhóm",
                points="all", color_discrete_sequence=["#4F46E5", "#94A3B8"]
            )
            fig_box.update_layout(
                showlegend=False, height=420, margin=dict(t=10),
                plot_bgcolor="white", paper_bgcolor="white"
            )
            fig_box.update_xaxes(showgrid=False)
            fig_box.update_yaxes(gridcolor="#F1F5F9")
            st.plotly_chart(fig_box, width="stretch")

            p_val = comparison["mw_p"]
            if p_val < 0.05:
                sig_note = "✅ Sự khác biệt có ý nghĩa thống kê (p < 0,05)"
            else:
                sig_note = "➖ Chưa đủ bằng chứng thống kê để kết luận sự khác biệt (p ≥ 0,05)"
            st.markdown(
                f"**Kiểm định Mann-Whitney U** = {dp.vn_number(comparison['mw_stat'], 1)}, "
                f"**p** = {dp.vn_number(p_val, 4)} → {sig_note}. "
                f"*(Cỡ mẫu: Y tế = {comparison['n_healthcare']} phản hồi, "
                f"các ngành khác = {comparison['n_rest']} phản hồi)*"
            )
            st.caption(
                "💡 Kiểm định Mann-Whitney U được dùng để so sánh hai nhóm mà không yêu cầu "
                "phân phối chuẩn — phù hợp với dữ liệu thang đo Likert (1–5) trong nghiên cứu này."
            )

    with right:
        with st.container(border=True):
            st.markdown("#### 📊 13 lý do tự động hóa và giữ lại yếu tố con người")
            chi_df = comparison["chi_table"].copy()
            chi_df["nổi bật"] = chi_df["reason"].isin([
                "HA: Domain Knowledge", "HA: Quality Oversight",
            ])
            chi_long = pd.concat([
                pd.DataFrame({
                    "Lý do": chi_df["reason"],
                    "Nhóm": "Y tế–Dược–KHSS",
                    "Tỷ lệ người chọn (%)": chi_df["pct_healthcare"],
                    "nổi bật": chi_df["nổi bật"]
                }),
                pd.DataFrame({
                    "Lý do": chi_df["reason"],
                    "Nhóm": "Các ngành khác",
                    "Tỷ lệ người chọn (%)": chi_df["pct_rest"],
                    "nổi bật": chi_df["nổi bật"]
                }),
            ])
            fig_bar = px.bar(
                chi_long, x="Tỷ lệ người chọn (%)", y="Lý do", color="Nhóm",
                orientation="h", barmode="group",
                color_discrete_sequence=["#4F46E5", "#94A3B8"]
            )
            fig_bar.update_layout(
                height=520, yaxis_title="", legend_title_text="", margin=dict(t=10),
                plot_bgcolor="white", paper_bgcolor="white"
            )
            fig_bar.update_xaxes(gridcolor="#F1F5F9")
            fig_bar.update_yaxes(showgrid=False)
            st.plotly_chart(fig_bar, width="stretch")

            st.caption(
                "⭐ Hai lý do nổi bật trong ngành Y tế: **Kiến thức chuyên môn** (Domain Knowledge) "
                "và **Giám sát chất lượng** (Quality Oversight) — phản ánh tính chất đặc thù "
                "mà nghề Y tế cần giữ lại yếu tố con người cao hơn các ngành khác."
            )
            show_cols = chi_df[["reason", "pct_healthcare", "pct_rest", "chi2", "p_value"]].copy()
            show_cols.columns = ["Lý do", "% chọn (Y tế)", "% chọn (Ngành khác)", "Chi-square", "p-value"]
            for c in ["% chọn (Y tế)", "% chọn (Ngành khác)", "Chi-square", "p-value"]:
                show_cols[c] = show_cols[c].apply(lambda v: dp.vn_number(v, 3))
            st.dataframe(show_cols, width="stretch", hide_index=True)

    st.info(
        "ℹ️ **Lưu ý phương pháp:** Kiểm định thống kê chỉ được thực hiện ở cấp độ tổng thể "
        "(toàn bộ ngành Y tế vs. các ngành khác), không áp dụng cho từng công việc riêng lẻ "
        "vì cỡ mẫu từng task quá nhỏ (n < 30). Đây là nguyên tắc được tuân thủ xuyên suốt "
        "trong nghiên cứu này."
    )


# ---------------------------------------------------------------------------
# Trang 3 — Bản đồ phân loại công việc
# ---------------------------------------------------------------------------
def page_3(task_level):
    st.title("🗺️ Bản đồ phân loại công việc")
    st.caption(
        "Mỗi điểm trên biểu đồ đại diện cho một công việc cụ thể. "
        "Vị trí phản ánh mức độ người lao động muốn tự động hóa (trục ngang) "
        "và mức độ AI hiện tại có thể đảm nhận công việc đó (trục dọc). "
        "Kích thước điểm tỷ lệ với số người lao động tham gia khảo sát."
    )

    with st.container(border=True):
        st.slider(
            "🎚️ Điều chỉnh ngưỡng đánh giá năng lực AI — thay đổi cách phân loại công việc "
            "(1 = chấp nhận rủi ro cao hơn, 5 = yêu cầu AI phải rất chắc chắn)",
            min_value=1.0, max_value=5.0, step=0.25,
            key="capacity_threshold",
            help="Ngưỡng mức độ mong muốn tự động hóa được giữ cố định ở 3,0 — "
                 "tức là người lao động có xu hướng ủng hộ việc tự động hóa công việc đó.",
        )
    cap_th = st.session_state.capacity_threshold
    des_th = st.session_state.desire_threshold

    task_level_live = dp.build_task_level_table(capacity_threshold=cap_th, desire_threshold=des_th)

    fig = go.Figure()
    fig.add_shape(type="rect", x0=des_th, x1=5.3, y0=cap_th, y1=5.3,
                  fillcolor="rgba(22,163,74,0.12)", line_width=0, layer="below")
    fig.add_shape(type="rect", x0=0.7, x1=des_th, y0=cap_th, y1=5.3,
                  fillcolor="rgba(220,38,38,0.10)", line_width=0, layer="below")
    fig.add_shape(type="rect", x0=des_th, x1=5.3, y0=0.7, y1=cap_th,
                  fillcolor="rgba(37,99,235,0.10)", line_width=0, layer="below")
    fig.add_shape(type="rect", x0=0.7, x1=des_th, y0=0.7, y1=cap_th,
                  fillcolor="rgba(100,116,139,0.08)", line_width=0, layer="below")

    zone_annotations = [
        (des_th + (5.3-des_th)/2, cap_th + (5.3-cap_th)/2, "✅ Sẵn sàng triển khai", "#16A34A"),
        (0.7 + (des_th-0.7)/2,    cap_th + (5.3-cap_th)/2, "⚠️ Cần chuẩn bị thêm",  "#DC2626"),
        (des_th + (5.3-des_th)/2, 0.7 + (cap_th-0.7)/2,   "🔬 Cần nghiên cứu thêm","#2563EB"),
        (0.7 + (des_th-0.7)/2,    0.7 + (cap_th-0.7)/2,   "📋 Chưa ưu tiên",        "#64748B"),
    ]
    for lx, ly, ltxt, lcolor in zone_annotations:
        fig.add_annotation(x=lx, y=ly, text=ltxt, showarrow=False,
                           font=dict(color=lcolor, size=11, family="Inter"), opacity=0.55)

    for zone, color in ZONE_COLORS.items():
        sub = task_level_live[task_level_live["zone"] == zone]
        if sub.empty:
            continue
        fig.add_trace(go.Scatter(
            x=sub["desire_mean"], y=sub["capacity_mean"], mode="markers",
            marker=dict(size=sub["n_workers"] * 3 + 8, color=color, opacity=0.85,
                        line=dict(width=1.5, color="white")),
            name=ZONE_DISPLAY.get(zone, zone),
            text=[
                f"<b>{r.Occupation}</b><br>"
                f"📌 {r.Task[:65]}{'...' if len(r.Task)>65 else ''}<br>"
                f"👥 Người lao động: {r.n_workers} | 🧑‍⚕️ Chuyên gia: {r.n_experts}<br>"
                f"Mong muốn TĐH: {dp.vn_number(r.desire_mean,2)}/5 | "
                f"Năng lực AI: {dp.vn_number(r.capacity_mean,2)}/5"
                for r in sub.itertuples()
            ],
            hoverinfo="text",
        ))

    fig.update_layout(
        xaxis=dict(title="Mức độ mong muốn tự động hóa (trung bình, thang 1–5)",
                   range=[0.7, 5.3], showgrid=True, gridcolor="#F1F5F9"),
        yaxis=dict(title="Mức độ AI có thể đảm nhận (trung bình, thang 1–5)",
                   range=[0.7, 5.3], showgrid=True, gridcolor="#F1F5F9"),
        height=580, legend_title_text="Phân loại",
        plot_bgcolor="white", paper_bgcolor="white", margin=dict(t=20),
    )
    st.plotly_chart(fig, width="stretch")

    st.caption(
        f"📌 Kích thước điểm tỷ lệ với số người lao động tham gia khảo sát. "
        f"Ngưỡng phân loại hiện tại: Mong muốn ≥ {dp.vn_number(des_th,1)} "
        f"và Năng lực AI ≥ {dp.vn_number(cap_th,1)} (thang 1–5)."
    )

    st.subheader("📄 Bảng chi tiết tất cả công việc")
    st.caption("Dữ liệu đầy đủ, luôn hiển thị kèm cỡ mẫu (n) để đảm bảo tính minh bạch.")
    detail = task_level_live[[
        "Task ID", "Occupation", "Task", "n_workers", "desire_mean",
        "n_experts", "capacity_mean", "trust_gap", "zone",
    ]].sort_values(["zone", "Occupation"]).copy()
    detail = detail.rename(columns={
        "Task ID":       "Mã công việc",
        "Occupation":    "Nhóm nghề",
        "Task":          "Công việc",
        "n_workers":     "Số người lao động (n)",
        "desire_mean":   "Mức độ mong muốn TĐH",
        "n_experts":     "Số chuyên gia (n)",
        "capacity_mean": "Mức độ năng lực AI",
        "trust_gap":     "Chênh lệch kỳ vọng",
        "zone":          "Phân loại",
    })
    for c in ["Mức độ mong muốn TĐH", "Mức độ năng lực AI", "Chênh lệch kỳ vọng"]:
        detail[c] = detail[c].apply(lambda v: dp.vn_number(v, 2))
    detail["Phân loại"] = detail["Phân loại"].map(lambda z: ZONE_DISPLAY.get(z, z))
    st.dataframe(detail, width="stretch", hide_index=True)

    if st.button("🎯 Xem khuyến nghị chi tiết theo từng nhóm →", type="primary"):
        goto("4. Bộ khuyến nghị theo vùng")
        st.rerun()


# ---------------------------------------------------------------------------
# Trang 4 — Bộ khuyến nghị
# ---------------------------------------------------------------------------
def _humanize_action(zone: str) -> str:
    if zone == "Green Light":
        return "Triển khai thí điểm trong vòng 90 ngày tới"
    elif zone == "Red Light":
        return "Thực hiện đào tạo và minh bạch hóa về AI trước khi triển khai"
    elif zone == "R&D Opportunity":
        return "Theo dõi tiến bộ công nghệ, đánh giá lại sau 6–12 tháng"
    else:
        return "Chưa cần hành động — tập trung nguồn lực cho các nhóm ưu tiên hơn"


def _humanize_hint(hint_text: str) -> str:
    import re
    match = re.search(r"': (.+?) \(", hint_text)
    if match:
        reason = match.group(1)
        return f"Tập trung vào lý do chính khiến nhân sự muốn giữ lại yếu tố con người: **{reason}**"
    return hint_text


def page_4(scope, task_level):
    st.title("🎯 Khuyến nghị theo từng nhóm công việc")
    st.caption(
        "Dựa trên kết quả phân tích, mỗi công việc được xếp vào một trong bốn nhóm "
        "với định hướng hành động cụ thể. Tick chọn các công việc muốn đưa vào kế hoạch "
        "triển khai — danh sách này sẽ được sử dụng ở các bước tiếp theo."
    )

    with st.expander("🎛️ Điều chỉnh ngưỡng phân loại (nhấn để mở/đóng)", expanded=False):
        col_s1, col_s2 = st.columns([2, 1])
        with col_s1:
            st.slider(
                "🎚️ Ngưỡng đánh giá năng lực AI:",
                min_value=1.0, max_value=5.0, step=0.25,
                key="capacity_threshold",
                help="Công việc chỉ được xếp vào nhóm 'Sẵn sàng triển khai' khi AI "
                     "được đánh giá vượt ngưỡng này."
            )
        with col_s2:
            st.markdown("**📐 Công thức xếp hạng ưu tiên:**")
            st.latex(r"score = |khoảng\_cách| \times \ln(n + 1)")
            st.caption("Điểm ưu tiên giúp sắp xếp những công việc đáng chú ý nhất lên đầu.")

    cap_th = st.session_state.capacity_threshold
    des_th = st.session_state.desire_threshold

    task_level_live = dp.build_task_level_table(capacity_threshold=cap_th, desire_threshold=des_th)
    recs, scored = rec_engine.build_recommendations(
        task_level_live, scope["audited_desires"], capacity_threshold=cap_th
    )

    zone_meta = [
        ("Green Light",     "✅", "Sẵn sàng triển khai ngay",
         "AI đã đủ năng lực và người lao động ủng hộ — đây là cơ hội triển khai thực tế trong ngắn hạn."),
        ("Red Light",       "⚠️", "Cần minh bạch hóa và đào tạo trước",
         "AI có thể làm được, nhưng người lao động còn e ngại — cần xây dựng niềm tin trước khi triển khai."),
        ("R&D Opportunity", "🔬", "Cần đầu tư nghiên cứu thêm",
         "Người lao động muốn tự động hóa, nhưng công nghệ AI chưa đáp ứng đủ — cần theo dõi tiến bộ công nghệ."),
        ("Low Priority",    "📋", "Chưa ưu tiên trong giai đoạn này",
         "Chưa có đủ điều kiện cả về nhu cầu lẫn công nghệ — nên tập trung nguồn lực vào các nhóm khác trước."),
    ]

    col_left, col_right = st.columns([7, 4], gap="large")

    with col_left:
        st.subheader("📋 Phân loại công việc theo 4 nhóm")

        for zone_key, icon, label, desc in zone_meta:
            items = recs.get(zone_key, [])
            n_items = len(items)
            color = ZONE_COLORS.get(zone_key, "#64748B")

            expander_title = f"{icon} {label} — {n_items} công việc"
            is_default_open = (zone_key == "Green Light" and n_items > 0)

            with st.expander(expander_title, expanded=is_default_open):
                st.markdown(
                    f"<span style='color:{color}; font-weight:600;'>{desc}</span>",
                    unsafe_allow_html=True
                )
                st.markdown("---")

                if not items:
                    st.info("Không có công việc nào thuộc nhóm này ở ngưỡng hiện tại.")
                else:
                    for item in items:
                        key_tuple = (item["task_id"], item["occupation"], zone_key)
                        is_checked = key_tuple in st.session_state.selected_task_keys

                        with st.container(border=True):
                            c_info, c_action = st.columns([4, 1.5])

                            with c_info:
                                st.markdown(f"**🧑‍⚕️ {item['occupation']}**")
                                st.markdown(f"📌 *{item['task']}*")
                                st.caption(
                                    f"💡 **Định hướng:** {_humanize_action(zone_key)}"
                                )
                                if "training_hint" in item:
                                    st.caption(
                                        f"📚 *Gợi ý đào tạo:* {_humanize_hint(item['training_hint'])}"
                                    )
                                desire_val = dp.vn_number(item["desire_mean"], 2)
                                cap_val    = dp.vn_number(item["capacity_mean"], 2)
                                gap_val    = dp.vn_number(abs(item["trust_gap"]), 2)
                                gap_dir    = ("AI cao hơn kỳ vọng" if item["trust_gap"] > 0
                                              else "Kỳ vọng cao hơn AI")
                                st.markdown(
                                    f"<small style='color:#64748B;'>"
                                    f"👥 {item['n_workers']} người lao động &nbsp;|&nbsp; "
                                    f"🧑‍⚕️ {item['n_experts']} chuyên gia &nbsp;|&nbsp; "
                                    f"Mong muốn: {desire_val}/5 &nbsp;|&nbsp; "
                                    f"Năng lực AI: {cap_val}/5 &nbsp;|&nbsp; "
                                    f"Chênh lệch: {gap_val} ({gap_dir})"
                                    f"</small>",
                                    unsafe_allow_html=True
                                )

                            with c_action:
                                st.write("")
                                new_val = st.checkbox(
                                    "➕ Chọn vào kế hoạch",
                                    value=is_checked,
                                    key=f"chk_{zone_key}_{item['task_id']}_{item['occupation']}"
                                )
                                if new_val and not is_checked:
                                    st.session_state.selected_task_keys.add(key_tuple)
                                    st.rerun()
                                elif (not new_val) and is_checked:
                                    st.session_state.selected_task_keys.discard(key_tuple)
                                    st.rerun()

    with col_right:
        st.subheader("🛒 Danh sách đã chọn")

        with st.container(border=True):
            selected_list = list(st.session_state.selected_task_keys)
            n_selected    = len(selected_list)

            st.markdown(
                f"<div style='background:#EEF2FF; padding:12px; border-radius:10px; "
                f"border-left:4px solid #4F46E5; margin-bottom:12px;'>"
                f"<h4 style='margin:0; color:#1E1B4B !important;'>"
                f"Đã chọn: <b>{n_selected}</b> công việc</h4>"
                f"<span style='font-size:0.8rem; color:#4338CA;'>"
                f"Các công việc này sẽ được đưa vào kế hoạch triển khai ở Trang 5 & 6."
                f"</span></div>",
                unsafe_allow_html=True
            )

            if n_selected == 0:
                st.warning(
                    "⚠️ Chưa có công việc nào được chọn.\n\n"
                    "👉 *Mở các nhóm bên trái và tick chọn những công việc "
                    "bạn muốn đưa vào kế hoạch.*"
                )
            else:
                if st.button("🗑️ Bỏ chọn tất cả", type="secondary", width="stretch"):
                    st.session_state.selected_task_keys.clear()
                    st.rerun()

                st.write("")
                with st.container(height=380, border=False):
                    for idx, (t_id, occ, zone) in enumerate(selected_list, 1):
                        color      = ZONE_COLORS.get(zone, "#64748B")
                        zone_label = ZONE_DISPLAY.get(zone, zone)
                        st.markdown(
                            f"<div style='padding:8px 10px; margin-bottom:8px; "
                            f"border:1px solid #E2E8F0; border-radius:8px; background:white;'>"
                            f"<div style='display:flex; justify-content:space-between; "
                            f"align-items:center; margin-bottom:4px;'>"
                            f"<span style='font-size:0.72rem; font-weight:700; color:white; "
                            f"background:{color}; padding:2px 8px; border-radius:10px;'>"
                            f"{zone_label}</span>"
                            f"<span style='font-size:0.72rem; color:#94A3B8;'>#{t_id}</span>"
                            f"</div>"
                            f"<div style='font-weight:600; font-size:0.84rem; color:#1E1B4B;'>"
                            f"{occ}</div></div>",
                            unsafe_allow_html=True
                        )

            st.divider()

            if st.button(
                "🛣️ Xây dựng lộ trình triển khai →",
                type="primary", width="stretch", disabled=(n_selected == 0)
            ):
                goto("5. Lộ trình triển khai")
                st.rerun()

            if n_selected > 0:
                st.caption(
                    "💡 *Nhấn nút trên để chuyển sang trang lên kế hoạch "
                    "Gantt và phân công trách nhiệm.*"
                )


# ---------------------------------------------------------------------------
# Helper
# ---------------------------------------------------------------------------
def _selected_items_from_state(scope, task_level: pd.DataFrame):
    recs, scored = rec_engine.build_recommendations(
        task_level, scope["audited_desires"],
        capacity_threshold=st.session_state.capacity_threshold
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
# Trang 5 — Lộ trình triển khai
# ---------------------------------------------------------------------------
def page_5(scope, task_level):
    st.title("🛣️ Kế hoạch triển khai chi tiết")

    selected_items = _selected_items_from_state(scope, task_level)
    if not selected_items:
        st.warning(
            "⚠️ Bạn chưa chọn công việc nào. Quay lại Trang 4, "
            "chọn các công việc muốn đưa vào kế hoạch triển khai."
        )
        if st.button("← Quay lại trang khuyến nghị", type="secondary"):
            goto("4. Bộ khuyến nghị theo vùng")
            st.rerun()
        return

    st.caption(
        f"Kế hoạch triển khai cho **{len(selected_items)} công việc** đã chọn ở Trang 4. "
        f"Mỗi công việc có lộ trình phù hợp với phân loại của nó."
    )

    st.subheader("📅 Lộ trình triển khai theo thời gian (Gantt)")
    st.markdown(
        "Lộ trình chia thành 4 giai đoạn chính: **Khảo sát & Chuẩn bị** (Tuần 1–2) → "
        "**Thí điểm** (Tuần 3–10, áp dụng cho nhóm Sẵn sàng triển khai) → "
        "**Đánh giá & Quyết định mở rộng** (Tuần 11–14) → "
        "**Vận hành & Giám sát liên tục** (dài hạn)."
    )
    gantt_df = roadmap.build_gantt_rows(selected_items)
    fig = roadmap.render_gantt_figure(gantt_df)
    if fig is not None:
        fig.update_layout(
            plot_bgcolor="white", paper_bgcolor="white",
            xaxis=dict(gridcolor="#F1F5F9"),
        )
        st.plotly_chart(fig, width="stretch")

    with st.expander("🚦 Tiêu chí quyết định mở rộng hay dừng lại (Tuần 11–14)"):
        st.markdown(
            "- **✅ Tiếp tục mở rộng:** Kết quả thí điểm đạt chỉ tiêu đặt ra, "
            "không phát sinh sự cố về an toàn hoặc chất lượng chuyên môn.\n"
            "- **⛔ Dừng và xem xét lại:** Quay về giai đoạn khảo sát, hoặc chuyển sang "
            "chế độ đào tạo nếu nguyên nhân là nhân sự chưa sẵn sàng tiếp nhận AI."
        )

    st.subheader("👥 Phân công trách nhiệm (RACI)")
    st.caption(
        "Bảng phân công theo mô hình RACI: "
        "R = Người thực hiện trực tiếp, A = Người chịu trách nhiệm cuối cùng, "
        "C = Người được hỏi ý kiến, I = Người được thông báo kết quả. "
        "Có thể tùy chỉnh theo cơ cấu tổ chức thực tế."
    )
    with st.container(border=True):
        rc1, rc2, rc3, rc4 = st.columns(4)
        with rc1:
            r_resp = st.text_input(
                "Người thực hiện (R)",
                value=st.session_state.role_overrides.get("Responsible", "Trưởng khoa / Trưởng bộ phận")
            )
        with rc2:
            r_acc = st.text_input(
                "Người chịu trách nhiệm (A)",
                value=st.session_state.role_overrides.get("Accountable", "Giám đốc điều hành / CIO")
            )
        with rc3:
            r_cons = st.text_input(
                "Người được tham vấn (C)",
                value=st.session_state.role_overrides.get("Consulted", "Phòng CNTT, Hội đồng an toàn")
            )
        with rc4:
            r_inf = st.text_input(
                "Người được thông báo (I)",
                value=st.session_state.role_overrides.get("Informed", "Toàn thể nhân sự liên quan")
            )
    st.session_state.role_overrides = {
        "Responsible": r_resp, "Accountable": r_acc,
        "Consulted": r_cons, "Informed": r_inf,
    }
    raci_df = roadmap.build_raci_table(selected_items, st.session_state.role_overrides)
    raci_display = raci_df.rename(columns={
        "Task": "Công việc", "Vùng": "Nhóm",
        "Responsible (R)": "Người thực hiện",
        "Accountable (A)": "Người chịu trách nhiệm",
        "Consulted (C)":   "Người được tham vấn",
        "Informed (I)":    "Người được thông báo",
    })
    raci_display["Nhóm"] = raci_display["Nhóm"].map(lambda z: ZONE_DISPLAY.get(z, z))
    st.dataframe(raci_display, width="stretch", hide_index=True)

    st.subheader("📈 Chỉ tiêu đánh giá theo từng giai đoạn")
    st.caption("Gợi ý chỉ số đo lường — cần điều chỉnh theo điều kiện thực tế của từng đơn vị.")
    kpi_df = roadmap.build_kpi_table(selected_items)
    kpi_display = kpi_df.rename(columns={
        "Task": "Công việc", "Vùng": "Nhóm",
        "KPI đề xuất theo giai đoạn": "Chỉ tiêu đánh giá đề xuất",
    })
    kpi_display["Nhóm"] = kpi_display["Nhóm"].map(lambda z: ZONE_DISPLAY.get(z, z))
    st.dataframe(kpi_display, width="stretch", hide_index=True)

    st.subheader("⚠️ Rủi ro và biện pháp phòng ngừa")
    risk_df = roadmap.build_risk_table(selected_items, scope["audited_desires"])
    risk_display = risk_df.rename(columns={
        "Task": "Công việc", "Vùng": "Nhóm",
        "Rủi ro": "Rủi ro tiềm ẩn",
        "Biện pháp giảm thiểu": "Biện pháp phòng ngừa / xử lý",
    })
    risk_display["Nhóm"] = risk_display["Nhóm"].map(lambda z: ZONE_DISPLAY.get(z, z))
    st.dataframe(risk_display, width="stretch", hide_index=True)

    st.subheader("💰 Ước tính quy mô đầu tư")
    tier, reason = roadmap.estimate_budget_tier(selected_items)
    tier_color = {
        "Thấp": "#16A34A", "Trung bình": "#F59E0B", "Cao": "#DC2626"
    }.get(tier, "#64748B")
    st.markdown(
        f'<div class="kpi-card" style="background:linear-gradient(135deg,{tier_color},{tier_color}CC);'
        f'max-width:280px;"><div class="kpi-icon">💰</div>'
        f'<div class="kpi-value" style="font-size:1.6rem;">{tier}</div>'
        f'<div class="kpi-label">Quy mô đầu tư ước tính</div></div>',
        unsafe_allow_html=True,
    )
    st.caption(reason)

    st.write("")
    if st.button("📤 Xuất kế hoạch hành động →", type="primary"):
        goto("6. Xuất Action Plan")
        st.rerun()


# ---------------------------------------------------------------------------
# Trang 6 — Xuất Action Plan
# ---------------------------------------------------------------------------
def build_action_plan_markdown(selected_items, raci_df, kpi_df, risk_df, tier, tier_reason):
    lines = [
        "# Kế hoạch Hành động Đầu tư AI — Y tế / Dược / Khoa học Sự sống",
        f"*Tài liệu tạo ngày {date.today().strftime('%d/%m/%Y')} — "
        f"{len(selected_items)} công việc được chọn.*",
        "", "---", "",
        "## 1. Danh mục công việc và định hướng hành động",
    ]
    zone_group: dict = {}
    for item in selected_items:
        zone_group.setdefault(item["zone"], []).append(item)
    for zone, items in zone_group.items():
        zone_label = ZONE_DISPLAY.get(zone, zone)
        lines.append(f"\n### {zone_label}")
        for item in items:
            lines.append(
                f"- **{item['occupation']}** — {item['task']} "
                f"*(n người lao động = {item['n_workers']}, "
                f"n chuyên gia = {item['n_experts']}, "
                f"Mong muốn TĐH = {dp.vn_number(item['desire_mean'],2)}/5, "
                f"Năng lực AI = {dp.vn_number(item['capacity_mean'],2)}/5)*"
            )
            if "training_hint" in item:
                lines.append(f"  - 📚 {item['training_hint']}")
    lines += ["", "---", "", "## 2. Phân công trách nhiệm (RACI)", raci_df.to_markdown(index=False)]
    lines += ["", "## 3. Chỉ tiêu đánh giá", kpi_df.to_markdown(index=False)]
    lines += ["", "## 4. Rủi ro và biện pháp phòng ngừa", risk_df.to_markdown(index=False)]
    lines += ["", "## 5. Quy mô đầu tư ước tính", f"**Mức độ:** {tier}", "", tier_reason]
    return "\n".join(lines)


def build_recommendations_csv(selected_items, raci_df, kpi_df, risk_df):
    rows = []
    for item, (_, raci_row), (_, kpi_row), (_, risk_row) in zip(
        selected_items, raci_df.iterrows(), kpi_df.iterrows(), risk_df.iterrows()
    ):
        rows.append({
            "Mã công việc":              item["task_id"],
            "Nhóm nghề":                 item["occupation"],
            "Công việc":                 item["task"],
            "Phân loại":                 ZONE_DISPLAY.get(item["zone"], item["zone"]),
            "Mức độ mong muốn TĐH":      item["desire_mean"],
            "Mức độ năng lực AI":        item["capacity_mean"],
            "Chênh lệch":                item["trust_gap"],
            "Số người lao động (n)":     item["n_workers"],
            "Số chuyên gia (n)":         item["n_experts"],
            "Người thực hiện (R)":       raci_row["Responsible (R)"],
            "Người chịu trách nhiệm (A)": raci_row["Accountable (A)"],
            "Người được tham vấn (C)":   raci_row["Consulted (C)"],
            "Người được thông báo (I)":  raci_row["Informed (I)"],
            "Chỉ tiêu đánh giá":         kpi_row["KPI đề xuất theo giai đoạn"],
            "Rủi ro":                    risk_row["Rủi ro"],
            "Biện pháp phòng ngừa":      risk_row["Biện pháp giảm thiểu"],
        })
    return pd.DataFrame(rows)


def page_6(scope, task_level):
    st.title("📤 Xuất kế hoạch hành động")

    selected_items = _selected_items_from_state(scope, task_level)
    if not selected_items:
        st.warning("⚠️ Chưa có công việc nào được chọn ở Trang 4 và 5.")
        if st.button("← Quay lại trang khuyến nghị", type="secondary"):
            goto("4. Bộ khuyến nghị theo vùng")
            st.rerun()
        return

    raci_df      = roadmap.build_raci_table(selected_items, st.session_state.role_overrides)
    kpi_df       = roadmap.build_kpi_table(selected_items)
    risk_df      = roadmap.build_risk_table(selected_items, scope["audited_desires"])
    tier, tier_reason = roadmap.estimate_budget_tier(selected_items)

    st.subheader("👁️ Xem trước kế hoạch hành động")
    md_content = build_action_plan_markdown(selected_items, raci_df, kpi_df, risk_df, tier, tier_reason)
    with st.container(border=True):
        st.markdown(md_content)

    st.divider()
    col_a, col_b = st.columns(2)
    with col_a:
        st.download_button(
            "⬇️ Tải kế hoạch hành động (.md)",
            data=md_content.encode("utf-8"),
            file_name="ke_hoach_hanh_dong.md", mime="text/markdown", width="stretch",
        )
    with col_b:
        csv_df = build_recommendations_csv(selected_items, raci_df, kpi_df, risk_df)
        st.download_button(
            "⬇️ Tải bảng tổng hợp (.csv)",
            data=csv_df.to_csv(index=False).encode("utf-8-sig"),
            file_name="tong_hop_ke_hoach.csv", mime="text/csv", width="stretch",
        )


# ---------------------------------------------------------------------------
# Điều hướng chính
# ---------------------------------------------------------------------------
def main():
    st.sidebar.markdown("## 🩺 Đầu tư AI trong Y tế")
    st.sidebar.caption("Hệ thống hỗ trợ ra quyết định dựa trên dữ liệu WORKBank")
    st.sidebar.markdown("---")

    radio_labels = [f"{icon}  {name}" for name, icon in PAGE_META]
    current_index = PAGES.index(st.session_state.nav_page)
    chosen_label = st.sidebar.radio(
        "Điều hướng", radio_labels, index=current_index, label_visibility="collapsed"
    )
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
            "```\n"
            "app.py\n"
            "data_pipeline.py\n"
            "recommendation_engine.py\n"
            "roadmap_generator.py\n"
            "data/\n"
            "  domain_worker_desires.csv\n"
            "  domain_worker_metadata.csv\n"
            "  expert_rated_technological_capability.csv\n"
            "  task_statement_with_metadata.csv\n"
            "```\n\n"
            "Tải 4 file CSV gốc tại "
            "https://huggingface.co/datasets/SALT-NLP/WORKBank và đặt vào thư mục `data/`."
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
