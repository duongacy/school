import { notFound } from "next/navigation";

export default async function TenantNewsArticle({ params }: { params: any }) {
	const resolved = await params;
	const tenant = resolved?.tenant;
	const slug = resolved?.slug;

	if (!tenant || !slug) return notFound();

	// Placeholder content — replace with real fetch
	return (
		<main className="container mx-auto my-8 px-4">
			<h1 className="text-2xl font-bold">Bài viết: {slug}</h1>
			<p className="mt-4 text-sm text-muted-foreground">Chi tiết bài viết cho {tenant} — {slug}.</p>
		</main>
	);
}
