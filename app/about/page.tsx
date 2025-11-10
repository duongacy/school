import Image from "next/image";

export default function AboutPage() {
  return (
    <div className=" text-gray-700">
      <section className="bg-gray-100 border p-4">
        <div className="container mx-auto">
          <div className="h-80 bg-gray-800"></div>
          <div className="mt-4 flex justify-center gap-2">
            <div className="size-3 bg-gray-600 rounded-full"></div>
            <div className="size-3 bg-gray-400 rounded-full"></div>
            <div className="size-3 bg-gray-400 rounded-full"></div>
            <div className="size-3 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </section>
      <section className="my-8 container mx-auto space-y-8">
        <div className="border p-4">
          <h2 className="text-3xl font-semibold">Tầm nhìn và sứ mệnh</h2>
          <div className="grid grid-cols-2 gap-8">
            <p className=" mt-4 bg-blue-100/50 p-4">
              Xây dựng nền giáo dục hiện đại, chất lượng cao, đạt trình độ tiên
              tiến khu vực vào 2030, tiến tới thế giới 2045. Giáo dục là động
              lực phát triển, xây dựng xã hội học tập và công bằng.
            </p>
            <p className=" mt-4 bg-blue-100/50 p-4">
              Quản lý nhà nước về giáo dục, đổi mới căn bản và toàn diện hệ
              thống. Đảm bảo chất lượng, công bằng và hiệu quả giáo dục, bồi
              dưỡng nhân tài và phát triển nguồn nhân lực chất lượng cao phục vụ
              đất nước.
            </p>
          </div>
        </div>

        <div className="border p-4">
          <h2 className="text-3xl font-semibold ">Giá trị cốt lõi</h2>
          <div className="mt-1">
            Các giá trị cốt lõi của giáo dục Việt Nam tập trung vào việc phát
            triển toàn diện con người (phẩm chất và năng lực) để phục vụ sự
            nghiệp phát triển bền vững của đất nước và hội nhập quốc tế
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 text-center">
            <p className=" bg-blue-100/50 p-4">
              <b>Nhân văn/Tình yêu thương</b> <br />
              Đặt con người làm trung tâm, giáo dục phẩm chất, lòng thiện lương,
              tình yêu thương và sự tử tế.
            </p>
            <p className=" bg-blue-100/50 p-4">
              <b>Trách nhiệm</b> <br />
              Trách nhiệm với bản thân, gia đình, cộng đồng và đất nước (trách
              nhiệm công dân và xã hội).
            </p>
            <p className=" bg-blue-100/50 p-4">
              <b>Sáng tạo/Đổi mới</b> <br />
              Khuyến khích tư duy đổi mới, khám phá, và phát triển năng lực sáng
              tạo trong mọi hoạt động học tập và nghiên cứu.
            </p>
            <p className=" bg-blue-100/50 p-4">
              <b>Trung thực/Liêm chính</b> <br />
              Đề cao sự trung thực, liêm chính trong học tập, thi cử và hành
              nghề.
            </p>
            <p className=" bg-blue-100/50 p-4">
              <b>Chất lượng/Hiệu quả</b> <br />
              Hướng tới chất lượng cao và hiệu quả trong mọi cấp học, đảm bảo
              người học có tri thức và kỹ năng đáp ứng yêu cầu phát triển.
            </p>
          </div>
        </div>
        <div className="border p-4">
          <h2 className="text-3xl font-semibold">Tổng quan & Lịch sử</h2>
          <div>
            <p className=" bg-gray-100/50 p-4 mt-4">
              <b>Bộ Giáo dục và Đào tạo (Bộ Giáo dục)</b> là cơ quan của Chính
              phủ Việt Nam. <br />
              Chức năng: Quản lí nhà nước đối với giáo dục mầm non, phổ thông,
              nghề nghiệp, đại học; phát triển kỹ năng nghề; quản lí tiếng Việt
              và tiếng các dân tộc.
            </p>
            <br />
            <p>
              <b>Giai đoạn trước Cách mạng tháng 8 năm 1945</b> <br />
              Thế kỷ XI - 1919: Nền giáo dục Nho học truyền thống. <br />
              Cuối thế kỷ XIX - Đầu thế kỷ XX: Sự xuất hiện của yếu tố phương
              Tây và sự ra đời, sử dụng rộng rãi chữ Quốc ngữ (từ cuối 1919)
              thay thế nền cựu học. <br />
              Trào lưu giáo dục Duy Tân khởi xướng thực học, dùng chữ Quốc ngữ,
              tiếp cận khoa học tự nhiên.
            </p>
            <br />
            <p>
              <b>Giai đoạn 1945–1954</b> <br />
              Sau Cách mạng tháng Tám: Thành lập Bộ Quốc gia Giáo dục (Bộ trưởng
              đầu tiên: Vũ Đình Hòe). <br />
              2/3/1946: Đổi tên thành Bộ Giáo dục (Bộ trưởng: Đặng Thai Mai).
              <br />
              Chính phủ thành lập Nha bình dân học vụ (chống nạn mù chữ) và cải
              tổ hệ thống giáo dục. <br />
              11/1946: Ông Nguyễn Văn Huyên được cử làm Bộ trưởng Bộ Quốc gia
              Giáo dục. <br />
              Năm 1950: Tiến hành cải cách giáo dục (thực hiện hệ thống phổ
              thông 9 năm). <br />
              7/1951: Thành lập Công đoàn Giáo dục Việt Nam. <br />
              Thành tựu: Thay đổi cơ bản nền giáo dục cũ, xây dựng nền tảng giáo
              dục mới: dân tộc, khoa học, đại chúng.
            </p>
            <br />
            <p>
              <b>Giai đoạn 1954–1975</b> <br />
              Giữa 1954: Cơ quan Bộ Giáo dục chuyển về Hà Nội; Bộ chỉ đạo phục
              hồi trường lớp. <br />
              Bộ triển khai: Mở các trường học sinh miền Nam; tiến hành cải cách
              giáo dục năm 1956 (hình thành Hệ thống phổ thông 10 năm). <br />
              10/1965: Thành lập Bộ Đại học và Trung học Chuyên nghiệp (tách
              khỏi Bộ Giáo dục, Bộ trưởng: Tạ Quang Bửu). <br />
              Miền Bắc: Thanh toán nạn mù chữ; phát triển các phong trào thi
              đua; mở rộng hệ thống trường đại học, trung học chuyên nghiệp.
              <br />
              10/1962 (Miền Nam): Thành lập Tiểu ban Giáo dục thuộc Trung ương
              cục miền Nam.
            </p>
            <br />
            <p>
              <b>Giai đoạn 1975–1986</b> <br />
              7/1976: Bà Nguyễn Thị Bình được cử làm Bộ trưởng Bộ Giáo dục.
              <br />
              Năm 1976: GS, PGS Nguyễn Đình Tứ được cử làm Bộ trưởng Bộ Đại học
              và Trung học chuyên nghiệp. <br />
              1/1979: Bộ Chính trị ban hành Nghị quyết về cải cách giáo dục (bắt
              đầu từ giáo dục phổ thông). <br />
              Thực hiện nhiệm vụ quốc tế với Lào, Campuchia và mở rộng hợp tác
              quốc tế.
            </p>
            <br />
            <p>
              <b>Giai đoạn 1986–1995</b> <br />
              12/1986: Bắt đầu công cuộc đổi mới; chủ trương đa dạng hóa các
              loại hình trường, lớp. <br />
              Năm 1987: Sáp nhập Ủy ban Bảo vệ và Chăm sóc trẻ em Trung ương vào
              Bộ Giáo dục; hình thành ngành học Mầm non (Bộ trưởng: Phạm Minh
              Hạc). <br />
              Năm 1988: Sáp nhập Tổng cục Dạy nghề thành Bộ Đại học, Trung học
              Chuyên nghiệp và Dạy nghề. <br />
              Năm 1990: Thành lập Bộ Giáo dục và Đào tạo (sáp nhập các Bộ/Tổng
              cục liên quan). Bộ quản lý thống nhất hệ thống giáo dục quốc dân.
              Bộ trưởng: GS.TS Trần Hồng Quân.
            </p>
            <br />
            <p>
              <b>Giai đoạn 1996 đến nay</b> <br />
              Các Bộ trưởng: Nguyễn Minh Hiển, Nguyễn Thiện Nhân, Phạm Vũ Luận,
              Phùng Xuân Nhạ. <br />
              Từ 8/4/2021 đến nay: Bộ trưởng Nguyễn Kim Sơn. <br />
              Giáo dục đã đáp ứng cơ bản nhu cầu học tập, thực hiện các mục tiêu
              lớn trong Chiến lược phát triển giáo dục. <br />
              Đạt thành tựu lớn sau khi triển khai Nghị quyết số 29-NQ/TW về đổi
              mới căn bản, toàn diện giáo dục. <br />
              Phát triển: Hệ thống trường lớp, quy mô giáo dục phát triển nhanh;
              tăng cường công bằng xã hội trong tiếp cận giáo dục; chất lượng
              giáo dục nâng lên; đẩy mạnh xã hội hóa và hợp tác quốc tế.
            </p>
          </div>
        </div>
        <div className="border p-4">
          <h2 className="text-3xl font-semibold">Chức năng và nhiệm vụ</h2>
          <div>
            <p className=" bg-gray-100/50 p-4 mt-4">
              <b>Bộ Giáo dục và Đào tạo</b> thực hiện nhiệm vụ theo Nghị định
              37/2025/NĐ-CP.
            </p>
            <br />
            <p>
              <b>1. Quản lý Mục tiêu và Chương trình Đào tạo</b> <br />
              <ul className=" list-disc pl-8">
                <li>
                  Quy định mục tiêu giáo dục và chương trình cho giáo dục mầm
                  non, phổ thông, thường xuyên.
                </li>
                <li>
                  Ban hành và hướng dẫn danh mục giáo dục, đào tạo cấp IV các
                  trình độ: Trung cấp Sư phạm, Cao đẳng Sư phạm, Đại học, Thạc
                  sĩ, Tiến sĩ.
                </li>
                <li>
                  Quy định khối lượng kiến thức tối thiểu và năng lực đạt được
                  sau tốt nghiệp các trình độ từ trung cấp sư phạm đến tiến sĩ.
                </li>
              </ul>
            </p>
            <br />
            <p>
              <b>2. Quản lý Sách giáo khoa, Giáo trình & Tài liệu</b> <br />
              <ul className="list-disc pl-8">
                <li>
                  Quy định việc biên soạn, thẩm định, phê duyệt sách giáo khoa
                  và tài liệu được phép sử dụng.
                </li>
                <li>
                  Quy định tiêu chuẩn, quy trình biên soạn, chỉnh sửa sách giáo
                  khoa.
                </li>
                <li>
                  Ban hành tiêu chí đánh giá sách giáo khoa và phê duyệt sách
                  giáo khoa trên cơ sở thẩm định của Hội đồng quốc gia.
                </li>
                <li>
                  Tổ chức biên soạn giáo trình các môn lý luận chính trị, quốc
                  phòng và an ninh sử dụng thống nhất.
                </li>
              </ul>
            </p>
            <br />
            <p>
              <b>3. Quản lý Chất lượng và Chuẩn Quốc gia</b> <br />
              <ul className="list-disc pl-8">
                <li>
                  Ban hành chuẩn quốc gia đối với cơ sở giáo dục, đào tạo.
                </li>
                <li>
                  Hướng dẫn chi tiết thực hiện phân tầng, xếp hạng các cơ sở
                  giáo dục đại học.
                </li>
                <li>
                  Quy định điều kiện đảm bảo chất lượng tối thiểu cho chương
                  trình đào tạo.
                </li>
              </ul>
            </p>
          </div>
        </div>

        <div className="border p-4">
          <h2 className="text-3xl font-semibold">Lãnh đạo hiện nay</h2>
          <div className="border mx-auto w-fit p-4 bg-blue-50 flex flex-col items-center gap-2 mt-4">
            <div className="w-26 h-32 shrink-0 relative">
              <Image
                alt=""
                fill
                objectFit="cover"
                src="/images/about/nguyen_kim_son.png"
              />
            </div>
            <p className="mt-1 text-center">
              <b>Bộ trưởng Nguyễn Kim Sơn</b>
              <br />
              Ủy viên Trung ương Đảng, <br />
              Bí thư Đảng ủy Bộ
            </p>
          </div>
          <div className="grid grid-cols-[repeat(5,1fr)] w-fit mx-auto mt-4 gap-4">
            <div className="text-xs p-4  flex flex-col items-center gap-2 mt-4">
              <div className="w-20 h-24 shrink-0 relative">
                <Image
                  alt=""
                  fill
                  objectFit="cover"
                  src="/images/about/pham_ngoc_thuong.png"
                />
              </div>
              <p className="mt-1 text-center">
                <b>Thứ trưởng Phạm Ngọc Thưởng</b>
                <br />
                Phó Bí thư thường trực Đảng ủy Bộ <br />
                Thứ trưởng Thường trực
              </p>
            </div>
            <div className="text-xs p-4  flex flex-col items-center gap-2 mt-4">
              <div className="w-20 h-24 shrink-0 relative">
                <Image
                  alt=""
                  fill
                  objectFit="cover"
                  src="/images/about/nguyen_van_phuc.png"
                />
              </div>
              <p className="mt-1 text-center">
                <b>Thứ trưởng Nguyễn Văn Phúc</b>
                <br />
                Chủ nhiệm UBKT Đảng ủy Bộ
              </p>
            </div>
            <div className="text-xs p-4  flex flex-col items-center gap-2 mt-4">
              <div className="w-20 h-24 shrink-0 relative">
                <Image
                  alt=""
                  fill
                  objectFit="cover"
                  src="/images/about/le_quan.png"
                />
              </div>
              <p className="mt-1 text-center">
                <b>Thứ trưởng Lê Quân</b>
              </p>
            </div>
            <div className="text-xs p-4  flex flex-col items-center gap-2 mt-4">
              <div className="w-20 h-24 shrink-0 relative">
                <Image
                  alt=""
                  fill
                  objectFit="cover"
                  src="/images/about/nguyen_thi_kim_chi.png"
                />
              </div>
              <p className="mt-1 text-center">
                <b> Thứ trưởng Nguyễn Thị Kim Chi</b>
              </p>
            </div>
            <div className="text-xs p-4  flex flex-col items-center gap-2 mt-4">
              <div className="w-20 h-24 shrink-0 relative">
                <Image
                  alt=""
                  fill
                  objectFit="cover"
                  src="/images/about/le_tan_dung.png"
                />
              </div>
              <p className="mt-1 text-center">
                <b> Thứ trưởng Lê Tấn Dũng</b>
              </p>
            </div>
          </div>
        </div>

        <div className="border p-4">
          <h2 className="text-3xl font-semibold">Cơ cấu tổ chức</h2>
          <div className="mt-4">
            <b>Các đơn vị thực hiện chức năng quản lý nhà nước</b>
            <ul className="list-disc pl-8">
              <li>Văn phòng Bộ</li>
              <li>Vụ Tổ chức cán bộ</li>
              <li>Vụ Kế hoạch - Tài chính</li>
              <li>Vụ Giáo dục Mầm non</li>
              <li>Vụ Giáo dục Phổ thông</li>
              <li>Vụ Giáo dục Đại học</li>
              <li>Vụ Giáo dục Quốc phòng và An ninh</li>
              <li>Vụ Học sinh, sinh viên</li>
              <li>Vụ Pháp chế</li>
              <li>Cục Quản lý chất lượng</li>
              <li>Cục Hợp tác quốc tế</li>
              <li>Cục Nhà giáo và Cán bộ quản lý giáo dục</li>
              <li>Cục Khoa học, Công nghệ và Thông tin</li>
              <li>Cục Giáo dục nghề nghiệp và Giáo dục thường xuyên</li>
            </ul>
          </div>
          <div className="mt-4">
            <b>Các đơn vị sự nghiệp công lập</b>
            <ul className="list-disc pl-8">
              <li>Viện Khoa học Giáo dục Việt Nam</li>
              <li>Báo Giáo dục và Thời đại</li>
              <li>Tạp chí Giáo dục</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
