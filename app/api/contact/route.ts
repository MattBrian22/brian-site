import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Lazily instantiated so build doesn't fail without RESEND_API_KEY in CI
function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY environment variable is not set.");
  return new Resend(key);
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const resend = getResend();

    const { data, error } = await resend.emails.send({
      from: "VFS Contact Form <onboarding@resend.dev>",
      to: "brian.tahir@gmail.com",
      replyTo: email,
      subject: `New Inquiry — ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <style>
              body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background: #f5f4f0; margin: 0; padding: 0; }
              .wrapper { max-width: 600px; margin: 0 auto; padding: 48px 24px; }
              .header { border-bottom: 2px solid #0a0a0a; padding-bottom: 24px; margin-bottom: 32px; }
              .label { font-family: 'Courier New', monospace; font-size: 10px; letter-spacing: 0.25em; text-transform: uppercase; color: #6b6b6b; margin-bottom: 4px; }
              .value { font-size: 15px; color: #0a0a0a; line-height: 1.6; margin-bottom: 24px; }
              .message-box { background: #ffffff; border: 1px solid #d4d0c8; padding: 24px; }
              .message-text { font-size: 15px; color: #2a2a2a; line-height: 1.8; white-space: pre-wrap; }
              .footer { margin-top: 40px; padding-top: 24px; border-top: 1px solid #d4d0c8; }
              .footer-text { font-family: 'Courier New', monospace; font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: #6b6b6b; }
            </style>
          </head>
          <body>
            <div class="wrapper">
              <div class="header">
                <div class="label">VFS — Incoming Inquiry</div>
              </div>
              <div class="label">Name</div>
              <div class="value">${name}</div>
              <div class="label">Email</div>
              <div class="value"><a href="mailto:${email}" style="color:#0a0a0a;">${email}</a></div>
              <div class="label">Message</div>
              <div class="message-box">
                <div class="message-text">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
              </div>
              <div class="footer">
                <div class="footer-text">Sent via VFS Contact Form · Hit reply to respond to ${name}</div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
