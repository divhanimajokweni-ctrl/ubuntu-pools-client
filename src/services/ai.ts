import axios from 'axios';
import { GoogleGenAI } from '@google/genai';

// Anthropic Inference
export async function anthropicInference(prompt: string, systemPrompt?: string) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY is missing');
  }

  try {
    const response = await axios.post(
      'https://api.anthropic.com/v1/messages',
      {
        model: 'claude-3-opus-20240229',
        max_tokens: 1024,
        messages: [{ role: 'user', content: prompt }],
        system: systemPrompt,
      },
      {
        headers: {
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
          'content-type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error: any) {
    console.error('Anthropic Inference Error:', error.response?.data || error.message);
    throw error;
  }
}

// Local Ollama Inference
export async function localInference(prompt: string) {
  const endpoint = process.env.LOCAL_INFERENCE_ENDPOINT || 'http://localhost:11434';
  const model = process.env.LOCAL_MODEL_NAME || 'gemma3:4b';

  try {
    const response = await axios.post(`${endpoint}/api/generate`, {
      model,
      prompt,
      stream: false,
    });
    return response.data;
  } catch (error: any) {
    console.error('Local Inference Error:', error.message);
    throw new Error(`Local inference failed: ${error.message}`);
  }
}

// Unified Tiered Inference
export async function tieredInference(prompt: string) {
  const tier = process.env.FORCE_INFERENCE_TIER || 'auto';

  if (tier === 'local') {
    return await localInference(prompt);
  }

  if (process.env.ANTHROPIC_API_KEY) {
    return await anthropicInference(prompt);
  }

  // Fallback to Gemini
  if (process.env.GEMINI_API_KEY) {
    const genAI = new GoogleGenAI(process.env.GEMINI_API_KEY as any);
    const genModel = (genAI as any).getGenerativeModel({ model: 'gemini-1.5-flash' });
    const result = await genModel.generateContent(prompt);
    const response = await result.response;
    return response.text();
  }

  throw new Error('No AI provider configured');
}
