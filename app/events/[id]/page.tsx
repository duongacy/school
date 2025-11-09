import studentLife from "../../../data/studentLife";
import { notFound } from "next/navigation";

type Props = {
  params: { id: string };
};

export default function EventPage({ params }: Props) {
  const event = studentLife.upcomingEvents.find((e) => e.id === params.id);
  if (!event) return notFound();

  return (
    <main className="py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-2">{event.title}</h1>
        <div className="text-sm text-gray-500 mb-4">{new Date(event.date).toLocaleString('vi-VN')} — {event.location}</div>
        {event.description && <p className="text-gray-700 mb-4">{event.description}</p>}

        <section className="bg-white p-4 rounded border">
          <h2 className="font-semibold">Thông tin chi tiết</h2>
          <ul className="list-disc pl-5 text-sm mt-2 text-gray-600">
            <li>Địa điểm: {event.location || 'Chưa cập nhật'}</li>
            <li>Thời gian: {new Date(event.date).toLocaleString('vi-VN')}</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
