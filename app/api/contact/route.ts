import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields (Name, Email, Message)." },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn("RESEND_API_KEY is not configured in environment variables.");
      return NextResponse.json(
        {
          error:
            "Email service is not currently configured with an API key. Please set RESEND_API_KEY in your .env.local file.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const emailSubject = subject?.trim()
      ? `Contact Form: ${subject.trim()} - ${name.trim()}`
      : `New Contact Inquiry from ${name.trim()} - Calra Perfumes`;

    const { data, error } = await resend.emails.send({
      from: "notifications@indevasa.com",
      to: ["ar@perfumestoreatlanta.com"],
      replyTo: email,
      subject: emailSubject,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; margin: 0; padding: 20px; background-color: #f9f9f9; color: #1a1a1a; }
              .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.06); border: 1px solid #e5e5e5; }
              .header { background-color: #5a0d29; padding: 24px; text-align: center; color: #ffffff; }
              .header h1 { margin: 0; font-size: 20px; letter-spacing: 2px; text-transform: uppercase; }
              .header p { margin: 6px 0 0 0; font-size: 13px; color: #fbcfe8; }
              .content { padding: 30px; }
              .field { margin-bottom: 20px; }
              .label { font-size: 11px; font-weight: 700; text-transform: uppercase; color: #737373; letter-spacing: 0.5px; margin-bottom: 4px; }
              .value { font-size: 15px; color: #171717; line-height: 1.5; }
              .message-box { background-color: #fafafa; border-left: 3px solid #5a0d29; padding: 16px; border-radius: 4px; font-size: 15px; line-height: 1.6; white-space: pre-wrap; color: #262626; }
              .footer { background-color: #f5f5f5; padding: 16px; text-align: center; font-size: 12px; color: #737373; border-top: 1px solid #e5e5e5; }
            </style>
          </head>
          <body>
            <div class="card">
              <div class="header">
                <h1>Calra Perfumes</h1>
                <p>Website Contact Form Submission</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">From</div>
                  <div class="value"><strong>${escapeHtml(name)}</strong> &lt;<a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>&gt;</div>
                </div>
                ${
                  phone
                    ? `
                <div class="field">
                  <div class="label">Phone</div>
                  <div class="value"><a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a></div>
                </div>`
                    : ""
                }
                ${
                  subject
                    ? `
                <div class="field">
                  <div class="label">Subject</div>
                  <div class="value">${escapeHtml(subject)}</div>
                </div>`
                    : ""
                }
                <div class="field">
                  <div class="label">Message</div>
                  <div class="message-box">${escapeHtml(message)}</div>
                </div>
              </div>
              <div class="footer">
                Sent from Calra Perfumes website contact page to ar@perfumestoreatlanta.com
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend API returned error:", error);
      return NextResponse.json(
        { error: error.message || "Failed to send email via Resend." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for reaching out! We have received your message and will respond shortly.",
      data,
    });
  } catch (err: unknown) {
    console.error("Error processing contact form:", err);
    const message = err instanceof Error ? err.message : "Internal server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
