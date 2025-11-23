import Link from "next/link";

export default async function TenantNewsIndex({ params }: { params: any }) {
	const resolved = await params;
	const tenant = resolved?.tenant ?? "tenant";

	// Placeholder data — replace with real fetch when available
	const articles = [
		{ id: "khoa-hoc-he-2025", title: "Khóa học hè 2025" },
		{ id: "hoi-thi-van-nghe", title: "Hội thi văn nghệ" },
	];

	return (
		<main className="container mx-auto my-8 px-4">
			<h1 className="text-2xl font-bold">Tin tức — {tenant}</h1>
			<ul className="mt-4 list-disc ml-5">
				{articles.map((a) => (
					<li key={a.id} className="mt-2">
						<Link href={`/${tenant}/news/${a.id}`} className="text-blue-600 hover:underline">
							{a.title}
						</Link>
					</li>
				))}
			</ul>
		</main>
	);
}
