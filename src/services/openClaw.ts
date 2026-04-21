import { WebSocket } from 'ws';

export async function notifyOpenClaw(payload: any) {
  const enabled = process.env.OPENCLAW_ENABLED === 'true';
  const gatewayUrl = process.env.OPENCLAW_GATEWAY_URL || 'wss://claw.kilosessions.ai';
  const apiKey = process.env.OPENCLAW_API_KEY;

  if (!enabled || !apiKey) {
    return;
  }

  return new Promise((resolve, reject) => {
    const ws = new WebSocket(gatewayUrl, {
      headers: {
        'x-api-key': apiKey,
      }
    });

    ws.on('open', () => {
      ws.send(JSON.stringify({
        type: 'notification',
        timestamp: new Date().toISOString(),
        ...payload
      }));
      ws.close();
      resolve(true);
    });

    ws.on('error', (err) => {
      console.error('OpenClaw WebSocket Error:', err);
      reject(err);
    });

    // Timeout safety
    setTimeout(() => {
      if (ws.readyState !== ws.CLOSED) {
        ws.close();
        reject(new Error('OpenClaw notification timed out'));
      }
    }, 5000);
  });
}
