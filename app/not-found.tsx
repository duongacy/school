import Link from "next/link";

export default function NotFound() {
	return (
		<main className="min-h-screen flex items-center justify-center p-8">
			<div className="text-center">
				<h1 className="text-6xl font-bold">404</h1>
				<p className="mt-4 text-lg text-muted-foreground">Không tìm thấy trang bạn yêu cầu.</p>
				<div className="mt-6">
					<Link href="/" className="inline-block px-4 py-2 bg-blue-600 text-white rounded">
						Quay về trang chủ
					</Link>
				</div>
			</div>
		</main>
	);
}
