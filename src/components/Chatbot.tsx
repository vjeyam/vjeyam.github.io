import { useState } from "react";
import { generateText } from "../model";
import "../Chatbot.css"; // <- relative import to the stylesheet in src/

interface Message {
  sender: "user" | "bot";
  text: string;
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!input.trim() || loading) return;

    const userMessage: Message = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const reply = await generateText(input);

      const botMessage: Message = {
        sender: "bot",
        text: reply || "Sorry, I couldn’t find an answer.",
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ Error connecting to the AI server." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setOpen(!open)}
        className="chat-float-button fixed bottom-6 left-6 z-50"
        title="Chat"
      >
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div
          className="
            chatbot-window fixed bottom-24 left-6 z-50
            w-80 h-[32rem] rounded-2xl border border-neutral-700
            p-4 flex flex-col bg-neutral-900/90
          "
        >
          {/* Messages */}
          <div className="chat-scroll flex-1 mb-3 flex flex-col">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}

            {loading && (
              <div className="chat-message bot loading">
                AI is thinking...
              </div>
            )}
          </div>

          {/* Input */}
          <div className="flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="chat-input"
              placeholder="Type a message..."
            />

            <button
              onClick={sendMessage}
              disabled={loading}
              className="chat-send"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}