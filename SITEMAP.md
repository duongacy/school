# Sitemap cơ bản — Website Trường học

Tài liệu này chuyển phần "Cấu trúc Trang (Sitemap cơ bản)" trong `PROJECT_DESCRIPTION.md` thành sitemap có cấu trúc, kèm metadata (role, mô tả, notes triển khai).

Ghi chú chung
- Route paths dùng dạng chuẩn (kể cả cho App Router / Pages Router).
- `public`: không cần đăng nhập; `auth`: yêu cầu đăng nhập; `admin`: yêu cầu role admin.
- `component`: gợi ý component/layer chịu trách nhiệm (page, list, detail, form).

---

## 1. Trang chính (Public)

- /
  - title: Trang Chủ
  - access: public
  - description: Dashboard/tổng hợp tin tức và các hoạt động nổi bật.
  - component: HomePage (Hero, NewsFeed, Highlights, QuickLinks)

- /about
  - title: Giới thiệu
  - access: public
  - description: Lịch sử, sứ mệnh & tầm nhìn, cơ cấu tổ chức, đội ngũ, cơ sở vật chất.
  - children:
    - /about/history
    - /about/mission
    - /about/team
    - /about/facilities

- /admissions
  - title: Tuyển sinh
  - access: public
  - description: Thông tin tuyển sinh, hồ sơ & thủ tục, học phí, đăng ký trực tuyến.
  - children:
    - /admissions/info
    - /admissions/apply (form đăng ký)  <-- có thể yêu cầu auth cho hồ sơ đã nộp

- /news
  - title: Tin tức & Sự kiện
  - access: public
  - description: Danh sách bài viết; support categories, tags, pagination.
  - children:
    - /news/[slug] (chi tiết bài viết)
    - /news/category/[slug]

- /activities
  - title: Hoạt động
  - access: public
  - description: Ngoại khóa, câu lạc bộ, hoạt động đoàn/đội.
  - children:
    - /activities/[id]

- /library
  - title: Thư viện
  - access: public (tài liệu download có thể yêu cầu auth)
  - description: Tài liệu số, hình ảnh, video, e-book; hỗ trợ tìm kiếm & lọc.
  - children:
    - /library/documents
    - /library/media
    - /library/document/[id]

- /learning
  - title: Góc Học tập
  - access: public
  - description: Kế hoạch học tập, đề cương, góc văn học, top học sinh giỏi.
  - children:
    - /learning/resources
    - /learning/notes

- /contact
  - title: Liên hệ
  - access: public
  - description: Thông tin liên hệ, bản đồ, form góp ý.

---

## 2. Xác thực & Người dùng

- /auth/login
  - title: Đăng nhập
  - access: public (guest)
  - description: Form email/password, hỗ trợ social login (tùy chọn).

- /auth/register
  - title: Đăng ký
  - access: public (guest)
  - description: Form đăng ký, xác thực email bắt buộc.

- /auth/forgot-password
  - title: Quên mật khẩu
  - access: public

- /auth/reset-password?token=...
  - title: Đặt lại mật khẩu
  - access: public

- /profile
  - title: Trang cá nhân
  - access: auth
  - description: Xem/sửa thông tin cá nhân, đổi mật khẩu, hồ sơ học sinh (nếu applicable).

---

## 3. Quản trị (Admin)

- /admin
  - title: Dashboard Quản trị
  - access: admin
  - description: Tổng quan quản trị, chỉ số, luồng phê duyệt.
  - children:
    - /admin/news (Quản lý tin tức)
    - /admin/library (Quản lý tài liệu)
    - /admin/admissions (Quản lý đăng ký tuyển sinh)
    - /admin/users (Quản lý người dùng & phân quyền)

Notes: implement RBAC; chỉ hiển thị menu admin với role admin.

---

## 4. API endpoints (gợi ý)

- POST /api/auth/register
- POST /api/auth/login
- POST /api/auth/logout
- POST /api/auth/forgot-password
- POST /api/auth/reset-password
- GET /api/auth/me

- GET /api/news
- GET /api/news/:slug
- POST/PUT/DELETE /api/news (admin)

- GET /api/library
- POST /api/library (admin)

- POST /api/contact

---

## 5. Notes triển khai & SEO

- Friendly URLs: /news/slug, /library/document/[id] hoặc /library/[slug]
- Sitemap (XML) generator: tạo `/sitemap.xml` động từ API để gửi cho search engines.
- Robots.txt: cấu hình crawl rules.
- Page metadata: mỗi route cần title/description/og:image (server-side or via meta component).

---

## 6. Tệp gợi ý để implement routing
- App Router (Next.js): tạo cấu trúc folder `app/` tương ứng: `app/(public)/`, `app/auth/`, `app/admin/`.
- Pages Router: nếu dùng `pages/`, tạo `pages/about`, `pages/admissions`, `pages/news/[slug]`, `pages/admin/...`.

---

Nếu bạn muốn, tôi có thể:
- Sinh `sitemap.json` (máy đọc) từ cấu trúc trên. (mình sẽ tạo file đó nếu bạn đồng ý),
- Tạo folder + file page templates trong `app/` hoặc `pages/` theo sitemap,
- Sinh `sitemap.xml` động/tiền sinh để SEO.

Chọn hành động tiếp theo (ví dụ: "Tạo sitemap.json" hoặc "Scaffold pages in app/").
