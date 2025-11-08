import { notFound } from 'next/navigation';
import { getProgramBySlug } from '../../../../lib/programs';

type Props = { params: { slug: string } };

export default function ProgramDetailPage({ params }: Props) {
  const { slug } = params;

  if (!slug) return notFound();

  const program = getProgramBySlug(slug);
  if (!program) return notFound();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-3">{program.title}</h1>
      <p className="text-gray-700 mb-4">{program.overview}</p>

      <div className="mt-4 space-y-3">
        <p>
          <strong>Thời lượng:</strong> {program.duration}
        </p>
        <p>
          <strong>Học phí (tham khảo):</strong> {program.fees}
        </p>
      </div>
    </div>
  );
}
