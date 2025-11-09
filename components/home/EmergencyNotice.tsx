type Props = {
  active: boolean;
  title?: string;
  message?: string;
};

export default function EmergencyNotice({ active, title, message }: Props) {
  if (!active) return null;

  return (
    <div className="w-full bg-red-600 text-white py-3 px-4 rounded-md mb-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        <div>
          <strong className="font-semibold">{title}</strong>
          <div className="text-sm mt-1">{message}</div>
        </div>
        <div className="text-sm opacity-90">Vui lòng kiểm tra chi tiết ở cổng thông tin.</div>
      </div>
    </div>
  );
}
