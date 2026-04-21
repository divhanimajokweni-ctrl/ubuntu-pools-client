import axios from 'axios';

export async function createBrowserbaseSession() {
  const apiKey = process.env.BROWSERBASE_API_KEY;
  const projectId = process.env.BROWSERBASE_PROJECT_ID;

  if (!apiKey) {
    throw new Error('BROWSERBASE_API_KEY is missing');
  }

  try {
    const response = await axios.post(
      'https://www.browserbase.com/v1/sessions',
      { projectId },
      {
        headers: {
          'x-bb-api-key': apiKey,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error: any) {
    console.error('Browserbase Error:', error.response?.data || error.message);
    throw error;
  }
}
