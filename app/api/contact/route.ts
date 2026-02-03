import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, mail, phone, Help } = body;

    if (!name || !mail) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // In production: send email (e.g. via Resend, SendGrid) or store in DB
    // For now we just validate and return success
    console.log("Contact form submission:", { name, company, mail, phone, Help });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}
