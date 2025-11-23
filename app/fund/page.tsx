import Image from "next/image";

export default function FundPage() {
	return (
		<main className="container mx-auto my-8 px-4">
			<section className="border p-6 bg-gray-50 rounded">
				<div className="flex gap-6 items-center">
					<div className="w-36 h-36 bg-gray-200 relative rounded overflow-hidden">
						<Image src="/fund/logo.png" alt="Quỹ" fill className="object-cover" unoptimized />
					</div>
					<div>
						<h1 className="text-3xl font-bold">Quỹ Từ Thiện Giáo Dục</h1>
						<p className="mt-2 text-sm text-muted-foreground">
							Hỗ trợ học sinh, cải thiện điều kiện học tập và trao học bổng cho học
							sinh có hoàn cảnh khó khăn.
						</p>
					</div>
				</div>
			</section>

			<section className="grid lg:grid-cols-3 gap-6 mt-6">
				<div className="border p-4 bg-white">
					<h2 className="text-xl font-semibold">Mục tiêu</h2>
					<p className="mt-2 text-sm">Tăng tỷ lệ học sinh đến trường và giảm bỏ học.</p>
				</div>
				<div className="border p-4 bg-white">
					<h2 className="text-xl font-semibold">Chương trình</h2>
					<ul className="mt-2 list-disc ml-5 text-sm">
						<li>Học bổng hàng năm</li>
						<li>Cải tạo thư viện trường</li>
						<li>Cấp phát tài liệu học tập</li>
					</ul>
				</div>
				<div className="border p-4 bg-white">
					<h2 className="text-xl font-semibold">Liên hệ</h2>
					<p className="mt-2 text-sm">Email: info@quy.edu.vn</p>
				</div>
			</section>
		</main>
	);
}
