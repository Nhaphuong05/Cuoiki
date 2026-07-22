# Hệ Thống Hỗ Trợ Quyết Định Đầu Tư AI Trong Y Tế 🩺

Ứng dụng web tương tác hỗ trợ ra quyết định đầu tư và ứng dụng Trí tuệ Nhân tạo (AI) cho lĩnh vực Y tế, Dược phẩm và Khoa học Sự sống. Hệ thống phân tích dựa trên dữ liệu thực tế từ WORKBank (SALT-NLP) để cung cấp góc nhìn từ cả người lao động và chuyên gia.
# Link Web Streamlit: https://yte-workbank123.streamlit.app/
## 🌟 Tính Năng Nổi Bật

Ứng dụng được thiết kế với giao diện thân thiện, hiện đại gồm 6 trang chính để điều hướng và phân tích:

1. **🏠 Tổng quan minh bạch (Data Overview):** Thống kê tổng quan dữ liệu khảo sát, phạm vi nghiên cứu (gồm các nhóm nghề thuộc lĩnh vực Y tế lâm sàng, Hỗ trợ chăm sóc sức khỏe và Khoa học sự sống).
2. **🔎 Bằng chứng nền (Baseline Evidence):** So sánh mức độ mong muốn tự động hóa và phân tích lý do giữ lại yếu tố con người giữa ngành Y tế và các ngành nghề khác thông qua kiểm định thống kê.
3. **🗺️ Bản đồ hành động (Action Map):** Trực quan hóa ma trận phân loại công việc theo mức độ mong muốn tự động hóa và năng lực hiện tại của AI. Hỗ trợ thay đổi ngưỡng đánh giá động.
4. **🎯 Bộ khuyến nghị theo vùng (Zone Recommendations):** Đưa ra các khuyến nghị hành động cụ thể cho 4 nhóm (Sẵn sàng triển khai, Cần chuẩn bị thêm, Cần nghiên cứu thêm, Chưa ưu tiên).
5. **🛣️ Lộ trình triển khai (Deployment Roadmap):** Xây dựng lộ trình triển khai chi tiết qua biểu đồ Gantt cho các công việc đã được lựa chọn ở bước trước.
6. **📤 Xuất Action Plan (Export Action Plan):** Kết xuất toàn bộ kế hoạch triển khai ra file, hỗ trợ quá trình lập kế hoạch hành động.

## 🛠️ Công Nghệ Sử Dụng

- **[Streamlit](https://streamlit.io/):** Xây dựng giao diện web ứng dụng tương tác.
- **[Pandas](https://pandas.pydata.org/) & [NumPy](https://numpy.org/):** Xử lý, làm sạch và phân tích dữ liệu.
- **[SciPy](https://scipy.org/):** Hỗ trợ tính toán và kiểm định thống kê (Mann-Whitney U).
- **[Plotly](https://plotly.com/python/):** Trực quan hóa dữ liệu bằng các biểu đồ sinh động, biểu đồ phân tán (scatter plots), biểu đồ hộp (box plots) và Gantt chart.

## 📂 Cấu Trúc Thư Mục

```text
BTN-main/
│
├── app.py                     # File chạy chính của ứng dụng Streamlit
├── data_pipeline.py           # Logic xử lý, chuẩn bị dữ liệu và tính toán thống kê
├── recommendation_engine.py   # Xây dựng khuyến nghị hành động theo nhóm phân loại
├── roadmap_generator.py       # Module tạo biểu đồ Gantt và kế hoạch triển khai
├── data/                      # Chứa dữ liệu đầu vào (file CSV từ khảo sát WORKBank)
├── requirements.txt           # Danh sách thư viện Python cần thiết
├── README.md                  # File giới thiệu dự án (file này)

```

## 📊 Mô Tả Dữ Liệu (Data)

Dự án sử dụng các tập dữ liệu khảo sát được lưu trữ trong thư mục `data/` bao gồm:
- **`domain_worker_desires.csv`**: Dữ liệu khảo sát từ người lao động về mức độ mong muốn tự động hóa công việc của họ (đánh giá theo thang đo).
- **`domain_worker_metadata.csv`**: Thông tin metadata (đặc điểm nhân khẩu học, kinh nghiệm...) của những người lao động tham gia khảo sát.
- **`expert_rated_technological_capability.csv`**: Dữ liệu từ các chuyên gia đánh giá về năng lực hiện tại của AI trong việc thực hiện các tác vụ chuyên môn.
- **`task_statement_with_metadata.csv`**: Danh sách chi tiết các công việc (tasks) kèm theo thông tin mô tả và phân loại nhóm nghề tương ứng.

## 🚀 Hướng Dẫn Cài Đặt Và Chạy Ứng Dụng

**Bước 1: Clone hoặc tải mã nguồn về máy**

**Bước 2: (Khuyến nghị) Tạo môi trường ảo (Virtual Environment)**
```bash
python -m venv .venv
# Kích hoạt trên Windows:
.venv\Scripts\activate
# Kích hoạt trên MacOS/Linux:
source .venv/bin/activate
```

**Bước 3: Cài đặt các thư viện phụ thuộc**
```bash
pip install -r requirements.txt
```

**Bước 4: Khởi chạy ứng dụng**
```bash
streamlit run app.py
```
Ứng dụng sẽ tự động mở trên trình duyệt tại địa chỉ mặc định `http://localhost:8501`.

## 📌 Lưu Ý Phương Pháp
- Kiểm định thống kê được áp dụng trên tổng thể mẫu phân tích, không áp dụng cho từng mẫu đơn lẻ có `n < 30` nhằm đảm bảo độ tin cậy.
- Điểm đánh giá năng lực có thể được người dùng tinh chỉnh thông qua thanh trượt ở giao diện trực quan của trang **Bản đồ hành động**.
