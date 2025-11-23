# Sơ Đồ Tổng Quan Cho Hệ Thống Quỹ Từ Thiện Giáo Dục
/app
├── fund
│   ├── page.tsx                  → Trang chủ cho quỹ
│   ├── about                     → Giới thiệu về quỹ
│   │    └── page.tsx             
│   ├── donate
│   │    └── [slug]               → Trang quyên góp theo dự án
│   │        └── page.tsx
|   └── contact                   → Trang Liên hệ cho quỹ
│       └── page.tsx             
├── news
│   ├── page.tsx                  → Danh sách bài viết
│   └── [slug]
│       └── page.tsx              → Chi tiết bài viết
├── (schools)
│   ├── page.tsx                  → Danh sách trường
│   └── [tenant]
│       └── page.tsx              → Trang của từng trường (multi-tenant)
├── not-found.tsx                 → Trang lỗi 404
└── layout.tsx                    → Layout tổng cho public web
```
