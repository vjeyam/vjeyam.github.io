export async function generateText(prompt: string): Promise<string> {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      question: prompt,
      context: "Example context text for now",
    }),
  });

  const data = await response.json();
  return data.answer || data[0]?.generated_text || "Sorry, I couldn't find an answer.";
}