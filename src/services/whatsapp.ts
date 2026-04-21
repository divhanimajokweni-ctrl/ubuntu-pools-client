import axios from 'axios';

export async function sendWhatsAppMessage(to: string, message: string) {
  const apiKey = process.env.WHATSAPP_API_KEY;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const baseUrl = process.env.WHATSAPP_BASE_URL || 'https://api.whatsapp.com/v1';

  if (!apiKey || !phoneNumberId) {
    console.warn('WhatsApp API configuration missing.');
    return { error: 'WhatsApp not configured' };
  }

  try {
    const response = await axios.post(
      `${baseUrl}/${phoneNumberId}/messages`,
      {
        messaging_product: 'whatsapp',
        to,
        type: 'text',
        text: { body: message },
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return { data: response.data };
  } catch (error: any) {
    console.error('WhatsApp Error:', error.response?.data || error.message);
    return { error: error.response?.data || error.message };
  }
}
