"use client";

export default function Footer() {
  return (
    <footer className="border-t  py-6 bg-gray-100">
      <div className="container mx-auto space-y-6 px-2">
        <div className="grid lg:grid-cols-4 gap-4">
          <div>
            <div className="font-semibold">BỘ GIÁO DỤC VÀ ĐÀO TẠO</div>
            <div className="text-sm text-gray-700 mt-2">
              Số 35 Đại Cồ Việt, phường Bạch Mai, Hà Nội
            </div>
            <div className="text-sm text-gray-700">
              Email: bogddt@moet.gov.vn
            </div>
            <div className="text-sm text-gray-700">Hotline: (024) 38695144</div>
          </div>
          <div className=" bg-neutral-200 grid place-content-center self-end min-h-16">
            Block 1
          </div>
          <div className=" bg-neutral-200 grid place-content-center self-end min-h-16">
            Block 2
          </div>
          <div className=" bg-neutral-200 grid place-content-center self-end min-h-16">
            Block 3
          </div>
        </div>
        <div className="text-sm text-gray-700 text-center">
          <div>© {new Date().getFullYear()} Bộ Giáo Dục Và Đào Tạo.</div>
        </div>
      </div>
    </footer>
  );
}
