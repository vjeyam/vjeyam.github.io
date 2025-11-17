import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";
import rateLimit from "express-rate-limit";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Environment Validation
if (!process.env.HF_TOKEN) {
  console.error("Missing HF_TOKEN in .env file");
  process.exit(1);
}
if (!process.env.HF_API_URL) {
  console.error("Missing HF_API_URL in .env file");
  process.exit(1);
}
console.log("[ENV CHECK] Using model:", process.env.HF_API_URL);

// Rate Limiting (5 requests per IP per day)
const limiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 24 hours
  max: 5,
  message: { error: "Daily limit reached. Try again tomorrow." },
});
app.use("/api/chat", limiter);

// Chat Endpoint
app.post("/api/chat", async (req, res) => {
  const { question } = req.body;

  // Basic input validation
  if (!question || typeof question !== "string") {
    return res.status(400).json({ error: "Invalid input" });
  }

  // Add contextual info for better responses
  const now = new Date();
  const dateContext = `Today is ${now.toDateString()} at ${now.toLocaleTimeString()}.`;
  const fullPrompt = `${dateContext}\nUser: ${question}`;

  try {
    const response = await fetch(process.env.HF_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.HF_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: fullPrompt,
      }),
    });

    if (!response.ok) {
      console.error(`Hugging Face API error: ${response.status}`);
      return res
        .status(response.status)
        .json({ error: "Failed to connect to Hugging Face API." });
    }

    const data = await response.json();

    // Handle unexpected or empty responses
    if (!data || !Array.isArray(data) || !data[0]?.generated_text) {
      return res.json([{ generated_text: "Sorry, I couldn't find an answer." }]);
    }

    res.json(data);
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
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));