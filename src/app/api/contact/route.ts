import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();
  const { email, url } = data;

  if (!email || !email.includes("@")) {
    return NextResponse.json(
      { error: "Valid email required" },
      { status: 400 }
    );
  }

  // In production, integrate with an email service (Resend, SendGrid, etc.)
  console.log("Contact form submission:", { email, url });

  return NextResponse.json({ success: true });
}
