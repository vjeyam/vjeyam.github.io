import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";
import rateLimit from "express-rate-limit";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const HF_TOKEN = process.env.HF_TOKEN;
if (!HF_TOKEN) {
  console.error("Missing HF_TOKEN environment variable");
  process.exit(1);
}

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Environment Validation
if (!process.env.HF_TOKEN) {
  console.error("Missing HF_TOKEN in .env file");
  process.exit(1);
}
console.log("[ENV CHECK] Token configured ✓");

// Rate Limiting (5 requests per IP per day)
const limiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000,
  max: 5,
  message: { error: "Daily limit reached. Try again tomorrow." },
});
app.use("/api/chat", limiter);

// Chat Endpoint - Using OpenAI-compatible API
app.post("/api/chat", async (req, res) => {
  const { question } = req.body;

  // Basic input validation
  if (!question || typeof question !== "string") {
    return res.status(400).json({ error: "Invalid input" });
  }

  try {
    const response = await fetch("https://router.huggingface.co/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.HF_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "meta-llama/Llama-3.2-3B-Instruct",
        messages: [
          {
            role: "system",
            content: "You are a helpful AI assistant for Vishal Jeyam's portfolio website. Answer questions about AI, machine learning, and technology concisely and professionally."
          },
          {
            role: "user",
            content: question
          }
        ],
        max_tokens: 500,
        temperature: 0.7, 
      }),
    });

    // Log the full response for debugging
    const responseText = await response.text();
    console.log("HF API Status:", response.status);
    console.log("HF API Response:", responseText.substring(0, 200));

    if (!response.ok) {
      console.error(`Hugging Face API error: ${response.status}`);
      return res
        .status(response.status)
        .json({ error: "Failed to connect to Hugging Face API.", details: responseText });
    }

    const data = JSON.parse(responseText);

    // Extract the assistant's message from the OpenAI-style response
    if (data.choices && data.choices[0]?.message?.content) {
      // Return in the old format for compatibility with your frontend
      return res.json([{ generated_text: data.choices[0].message.content }]);
    } else {
      return res.json([{ generated_text: "Sorry, I couldn't find an answer." }]);
    }
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Serve frontend
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const frontendPath = path.join(__dirname, "dist");
app.use(express.static(frontendPath));

// Updated Express 5-compatible fallback
app.get(/.*/, (_, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// Start Server
const PORT = process.env.PORT || 5001;
const server = app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`📍 Access at http://localhost:${PORT}`);
  console.log('Press Ctrl+C to stop');
});

server.on('error', (err) => {
  console.error('❌ Server failed to start:', err);
  process.exit(1);
});

// Keep the process alive
process.on('SIGINT', () => {
  console.log('\n👋 Server shutting down...');
  process.exit(0);
});