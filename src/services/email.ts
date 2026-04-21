import { Resend } from 'resend';

let resend: Resend | null = null;

export function getResend() {
  if (!resend) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn('Resend API key missing. Email delivery disabled.');
      return null;
    }
    resend = new Resend(apiKey);
  }
  return resend;
}

export async function sendEmail(to: string, subject: string, html: string) {
  const client = getResend();
  if (!client) return { error: 'Resend not configured' };

  try {
    const data = await client.emails.send({
      from: 'Ubuntu Pools <notifications@ubuntupools.com>',
      to,
      subject,
      html,
    });
    return { data };
  } catch (error) {
    return { error };
  }
}
