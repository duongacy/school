import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body || {};

    if (!name || !email) {
      return NextResponse.json({ error: "Tên và email là bắt buộc" }, { status: 400 });
    }

    // For demo: log submission to console (in real app, save to DB or send email)
    // eslint-disable-next-line no-console
    console.log("[apply] submission:", { name, email, phone, message });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
