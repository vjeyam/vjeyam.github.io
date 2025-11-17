import { useState } from "react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>(
    []
  );
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    const reply = await window.generateText(input);

    setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
    setLoading(false);
  }

  return (
    <>
      {/* Floating Chat Button (matching FloatingIcons style) */}
      <button
        onClick={() => setOpen(!open)}
        className="
          fixed bottom-6 left-6 z-50
          bg-neutral-900/70 backdrop-blur-xl
          p-4 rounded-full border border-neutral-700 shadow-xl
          hover:bg-neutral-800 transition
        "
        title="Chat"
      >
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div
          className="
            fixed bottom-24 left-6 z-50
            w-80
            bg-neutral-900/80 backdrop-blur-xl
            border border-neutral-700 shadow-2xl
            rounded-2xl p-4 flex flex-col
          "
        >
          {/* Messages */}
          <div className="flex-1 overflow-y-auto mb-3 max-h-96 pr-1">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`
                  my-2 p-2 rounded-xl max-w-[75%] text-sm
                  ${
                    msg.sender === "user"
                      ? "ml-auto bg-blue-600/60 text-white"
                      : "mr-auto bg-neutral-800/70 text-gray-200"
                  }
                `}
              >
                {msg.text}
              </div>
            ))}

            {loading && (
              <div className="my-2 mr-auto p-2 rounded-xl bg-neutral-800/70 text-gray-400 text-sm italic">
                AI is thinking...
              </div>
            )}
          </div>

          {/* Input */}
          <div className="flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="
                flex-1 p-2 rounded-xl
                bg-neutral-800/60 border border-neutral-700
                text-gray-200 placeholder-gray-500
                outline-none
              "
              placeholder="Type a message..."
            />

            <button
              onClick={sendMessage}
              className="
                px-4 py-2 rounded-xl
                bg-blue-600 text-white
                hover:bg-blue-500 transition
              "
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}