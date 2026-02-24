import { useEffect, useRef, useState } from "react";
import { generateText } from "../model";
import "../styles/Chatbot.css";
import chatbotIcon from "/chatbot.png";

interface Message {
  sender: "user" | "bot";
  text: string;
}

const QUICK_PROMPTS = [
  "Summarize your top projects",
  "What tech do you use most?",
  "Explain the Restaurant Health Inspection project",
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    // Auto-scroll to bottom when new messages arrive / loading changes
    if (!open) return;
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages, loading, open]);

  function closeOnEscape(e: KeyboardEvent) {
    if (e.key === "Escape") setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    window.addEventListener("keydown", closeOnEscape);
    // Focus input when opened
    setTimeout(() => textareaRef.current?.focus(), 0);

    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  async function sendMessage(text?: string) {
    const messageText = (text ?? input).trim();
    if (!messageText || loading) return;

    const userMessage: Message = { sender: "user", text: messageText };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    // reset textarea height after sending
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }

    try {
      const reply = await generateText(messageText);

      const botMessage: Message = {
        sender: "bot",
        text: reply || "Sorry, I couldn't find an answer.",
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

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  function handleInput(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setInput(e.target.value);

    // autosize textarea
    e.target.style.height = "auto";
    e.target.style.height = `${Math.min(e.target.scrollHeight, 180)}px`;
  }

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="chat-float-button fixed bottom-6 left-6 z-50"
        title={open ? "Close chat" : "Open chat"}
        aria-label={open ? "Close chat" : "Open chat"}
      >
        <img
          src={chatbotIcon}
          alt="Chatbot Icon"
          className="w-12 h-12 object-contain"
        />
      </button>

      {/* Chat Window */}
      {open && (
        <div
          className="
            chatbot-window fixed bottom-24 left-6 z-50
            w-80 h-[32rem] rounded-2xl border border-neutral-700
            p-4 flex flex-col bg-neutral-900/90
          "
          role="dialog"
          aria-label="AI Chat"
        >
          {/* Header */}
          <div className="chatbot-header">
            <div>
              <div className="chatbot-title">AI Assistant</div>
              <div className="chatbot-subtitle">
                Ask about my projects, skills, or experience
              </div>
            </div>

            <button
              className="chatbot-close"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              title="Close"
            >
              ✕
            </button>
          </div>

          {/* Empty state + quick prompts */}
          {messages.length === 0 && !loading && (
            <div className="chatbot-empty">
              <div className="chatbot-empty-title">Try a prompt</div>
              <div className="chatbot-empty-pills">
                {QUICK_PROMPTS.map((p) => (
                  <button
                    key={p}
                    type="button"
                    className="chatbot-pill"
                    onClick={() => sendMessage(p)}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Messages */}
          <div ref={scrollRef} className="chat-scroll flex-1 mb-3 flex flex-col">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}

            {loading && (
              <div className="chat-message bot loading">AI is thinking...</div>
            )}
          </div>

          {/* Input */}
          <div className="flex items-end gap-2">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              className="chat-input"
              placeholder="Type a message..."
              rows={1}
            />

            <button
              onClick={() => sendMessage()}
              disabled={loading}
              className="chat-send"
              aria-label="Send message"
              title="Send"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}
