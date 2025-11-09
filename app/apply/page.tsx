"use client";
import { useState } from "react";

export default function ApplyPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });
      if (res.ok) {
        setStatus("ok");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        const data = await res.json();
        setStatus(data?.error || "error");
      }
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-2xl font-bold mb-4">Nộp hồ sơ trực tuyến</h1>
      <p className="text-sm text-gray-600 mb-4">Vui lòng điền thông tin bên dưới. Đây là form mẫu (demo).</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Họ và tên</label>
          <input value={name} onChange={(e) => setName(e.target.value)} className="mt-1 block w-full border rounded p-2" />
        </div>

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="mt-1 block w-full border rounded p-2" />
        </div>

        <div>
          <label className="block text-sm font-medium">Số điện thoại</label>
          <input value={phone} onChange={(e) => setPhone(e.target.value)} className="mt-1 block w-full border rounded p-2" />
        </div>

        <div>
          <label className="block text-sm font-medium">Ghi chú / Thông tin thêm</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="mt-1 block w-full border rounded p-2" rows={4} />
        </div>

        <div>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Gửi hồ sơ</button>
        </div>
      </form>

      <div className="mt-4">
        {status === "sending" && <div className="text-sm text-gray-600">Đang gửi...</div>}
        {status === "ok" && <div className="text-sm text-green-600">Gửi thành công. Chúng tôi sẽ liên hệ sớm.</div>}
        {status === "error" && <div className="text-sm text-red-600">Có lỗi xảy ra. Vui lòng thử lại sau.</div>}
      </div>
    </div>
  );
}
