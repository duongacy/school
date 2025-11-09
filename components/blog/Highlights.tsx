type Highlight = {
  id: string;
  title: string;
  summary: string;
};

type Props = {
  items: Highlight[];
};

export default function Highlights({ items }: Props) {
  return (
    <section>
      <h3 className="text-2xl font-semibold mb-4">Điểm nổi bật</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((h) => (
          <article key={h.id} className="border rounded-md p-4 bg-white">
            <h4 className="font-semibold text-lg mb-2">{h.title}</h4>
            <p className="text-sm text-gray-600">{h.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
