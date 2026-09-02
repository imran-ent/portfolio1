import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, callTime, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    // If RESEND_API_KEY or WEB3FORMS_KEY is configured, forward the email.
    // Otherwise just log and return success (so the UI works without config).
    const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY;
    const resendKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || "imran@example.com";

    if (web3formsKey) {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: web3formsKey,
          subject: `Portfolio inquiry from ${name}`,
          from_name: name,
          email,
          phone: phone || "Not provided",
          callTime: callTime || "Not specified",
          message,
          to: toEmail,
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error("Web3Forms failed");
    } else if (resendKey) {
      // Example with Resend - extend as needed
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "portfolio@imran.dev",
          to: toEmail,
          subject: `New inquiry from ${name}`,
          html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Phone:</b> ${phone}</p><p><b>Preferred Call:</b> ${callTime}</p><p><b>Message:</b><br/>${message}</p>`,
        }),
      });
    } else {
      console.log("[CONTACT] New inquiry (no email provider configured):", {
        name,
        email,
        phone,
        callTime,
        message,
        to: toEmail,
      });
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to send." }, { status: 500 });
  }
}
