import NextLink from "next/link";

type Module = {
  id: string;
  title: string;
  description: string;
  href: string;
};

type Props = {
  items: Module[];
};

export default function ModulesSection({ items }: Props) {
  return (
    <section>
      <h3 className="text-2xl font-semibold mb-4">Các chức năng</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((m) => (
          <NextLink key={m.id} href={m.href} className="block">
            <article className="p-4 border rounded-md hover:shadow-sm bg-white h-full">
              <h4 className="font-semibold text-lg mb-2">{m.title}</h4>
              <p className="text-sm text-gray-600">{m.description}</p>
            </article>
          </NextLink>
        ))}
      </div>
    </section>
  );
}
