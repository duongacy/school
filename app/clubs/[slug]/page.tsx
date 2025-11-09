import studentLife from "../../../data/studentLife";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export default function ClubPage({ params }: Props) {
  const club = studentLife.clubs.find((c) => c.id === params.slug);
  if (!club) return notFound();

  return (
    <main className="py-8 md:py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-2">{club.name}</h1>
        {club.meetingTime && <div className="text-sm text-gray-500 mb-3">Lịch họp: {club.meetingTime}</div>}
        <p className="text-gray-700 mb-4">{club.description}</p>

        <section className="bg-white p-4 rounded border">
          <h2 className="font-semibold">Liên hệ</h2>
          <div className="text-sm text-gray-600 mt-2">
            {club.contact?.name && <div>Người phụ trách: {club.contact.name}</div>}
            {club.contact?.email && <div>Email: <a className="text-blue-600" href={`mailto:${club.contact.email}`}>{club.contact.email}</a></div>}
          </div>
        </section>
      </div>
    </main>
  );
}
