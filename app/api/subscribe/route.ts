import { NextResponse } from "next/server";
import emailjs from "emailjs-com";

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ message: "Email is required" }, { status: 400 });
  }

  try {
    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID!,
      process.env.EMAILJS_TEMPLATE_ID!,
      {
        to_email: email, // destinataire dynamique
      },
      process.env.EMAILJS_PUBLIC_KEY!
    );

    return NextResponse.json({ message: "Email sent to user!" });
  } catch (err) {
    console.error("Error sending email:", err);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
