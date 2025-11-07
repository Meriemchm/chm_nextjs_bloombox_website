import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ message: "Email is required" }, { status: 400 });
    }

    //  Resend send
    await resend.emails.send({
      from: "contact@BloomBox.com",
      to: email,
      subject: "Welcome to our newsletter!",
      html: `<p>Hi there 🌸,<br/>Thanks for subscribing to our newsletter!</p>`,
    });

    return NextResponse.json({ message: "Subscription successful! Check your inbox 💌" });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
