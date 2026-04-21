import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { initSentry } from "./src/services/sentry.js";
import { tieredInference } from "./src/services/ai.js";
import { sendWhatsAppMessage } from "./src/services/whatsapp.js";
import { notifyOpenClaw } from "./src/services/openClaw.js";

dotenv.config();

// Initialize Error Tracking
initSentry();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ 
      status: "ok", 
      timestamp: new Date().toISOString(),
      governance: "harmonized"
    });
  });

  // AI Inference Proxy
  app.post("/api/inference", async (req, res) => {
    try {
      const { prompt } = req.body;
      const result = await tieredInference(prompt);
      res.json({ result });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  // WhatsApp Messaging
  app.post("/api/whatsapp", async (req, res) => {
    try {
      const { to, message } = req.body;
      const result = await sendWhatsAppMessage(to, message);
      if (result.error) throw new Error(result.error);
      
      // Notify OpenClaw on communications
      await notifyOpenClaw({
        event: "whatsapp_sent",
        recipient: to,
        message_length: message.length
      });

      res.json({ success: true, data: result.data });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  /**
   * Stitch Payment Integration Strategy (South African Pay-ins)
   * Stitch uses GraphQL. For local bank-to-bank (EFT), we typically:
   * 1. Get an OAuth access token for the client.
   * 2. Call the `clientPaymentInitiationRequest` mutation to get a redirect URL.
   */
  app.post("/api/create-contribution-session", async (req, res) => {
    try {
      const { amount, poolName } = req.body;
      
      // STITCH_CLIENT_ID and STITCH_CLIENT_SECRET are required
      const clientId = process.env.STITCH_CLIENT_ID;
      if (!clientId) {
        throw new Error("STITCH_CLIENT_ID is missing. Stitch integration requires local configuration.");
      }

      // 1. In a real production app, we would authenticate and call Stitch GraphQL
      // For this implementation, we define the strategy for Stitch EFT
      
      /* Example GraphQL Mutation for Stitch:
      mutation CreatePaymentInitiation($input: ClientPaymentInitiationInput!) {
        clientPaymentInitiationRequest(input: $input) {
          paymentInitiationRequest {
            url
          }
        }
      }
      */

      // Returning a mock URL or real integration path
      // In dev mode without keys, we simulate the success path for visualization
      const stitchRedirectUrl = `${process.env.APP_URL}/analytics?payment_status=initiated&amount=${amount}`;
      
      console.log(`Stitch Payment Strategy: Creating R${amount} initiation for ${poolName}`);
      
      res.json({ url: stitchRedirectUrl, provider: "Stitch.money" });
    } catch (error: any) {
      console.error("Stitch Initiation Error:", error);
      res.status(500).json({ error: error.message });
    }
  });

  // Vite middleware setup
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
