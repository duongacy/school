type Props = {
  title: string;
  mission: string;
  values: string;
  videoUrl?: string;
};

export default function IntroSection({ title, mission, values, videoUrl }: Props) {
  return (
    <section className="bg-white rounded-md p-6 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <div className="md:col-span-2">
          <h3 className="text-2xl font-semibold mb-3">{title}</h3>
          <p className="text-base text-gray-700 mb-2">{mission}</p>
          <p className="text-sm text-gray-600">{values}</p>
        </div>

        {videoUrl ? (
          <div className="w-full h-48 md:h-40 rounded overflow-hidden bg-black">
            <iframe
              title="Video giới thiệu"
              src={videoUrl}
              className="w-full h-full"
              frameBorder={0}
              allowFullScreen
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
