export default function DonatePage() {
	return (
		<main className="container mx-auto my-8 px-4">
			<section className="border p-6 bg-white rounded">
				<h1 className="text-3xl font-bold">Quyên góp</h1>
				<p className="mt-2 text-sm text-muted-foreground">
					Hỗ trợ trực tiếp cho các chương trình học bổng và cơ sở vật chất.
				</p>

				<div className="mt-4">
					<h2 className="text-xl font-semibold">Các gói ủng hộ</h2>
					<ul className="mt-2 list-disc ml-5 text-sm">
						<li>Gói Cá nhân — 200.000 VNĐ</li>
						<li>Gói Trường — 2.000.000 VNĐ</li>
						<li>Gói Doanh nghiệp — theo thỏa thuận</li>
					</ul>
				</div>
			</section>
		</main>
	);
}
