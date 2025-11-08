import Link from 'next/link';
import { getPrograms } from '../../../lib/programs';

export default function ProgramsPage() {
  const programs = getPrograms();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-3">Chương trình đào tạo</h1>
      <p className="text-gray-700 mb-4">Danh sách các chương trình chính của trường:</p>
      <ul className="list-disc ml-6 space-y-2 text-gray-700">
        {programs.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/admissions/programs/${p.slug}`}
              className="text-blue-600 hover:underline dark:text-blue-300"
            >
              {p.title}
            </Link>
            <div className="text-sm text-gray-600 dark:text-gray-400">{p.short}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
