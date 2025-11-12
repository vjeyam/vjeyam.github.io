import type { Project } from "../types"

export const projects: Project[] = [
  {
    kind: "research",
    title: "LLM Fine-Tuning Framework",
    summary: "Built a modular pipeline for fine-tuning transformer-based LLMs on custom datasets.",
    highlights: [
      "Supports LoRA and QLoRA for efficient adaptation",
      "Integrated with Hugging Face Transformers",
      "Achieved 30% reduction in training time"
    ],
    tech: ["Python", "PyTorch", "Transformers", "Weights & Biases"],
    links: [
      { label: "GitHub", href: "https://github.com/yourusername/llm-finetune" }
    ],
  },
  {
    kind: "applied",
    title: "AI-Powered Resume Parser",
    summary: "Developed an NLP-powered web app that extracts structured data from resumes.",
    highlights: [
      "Deployed with FastAPI and React",
      "Achieved 94% accuracy on entity extraction"
    ],
    tech: ["React", "FastAPI", "spaCy", "TailwindCSS"],
    links: [
      { label: "Demo", href: "https://yourusername.github.io/ai-ml-portfolio/" }
    ],
  },
]