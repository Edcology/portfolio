import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { fullName, email, subject, message } = await req.json();
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ['edawofal@gmail.com'],
      subject: subject,
      react: EmailTemplate({ fullName, message, email }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.error("Email send error:", error);
    return Response.json({ error }, { status: 500 });
  }
}