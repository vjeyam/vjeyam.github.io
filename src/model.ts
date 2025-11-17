import { pipeline } from "@xenova/transformers";

declare global {
  interface Window {
    generateText: (prompt: string) => Promise<string>;
  }
}

let generator: any = null;

async function loadModel() {
  if (!generator) {
    console.log("Loading ONNX model...");
    generator = await pipeline("text-generation", "/onnx-model/model_fp16.onnx", {
      dtype: "fp16",
      device: "webgpu"
    });
    console.log("Model loaded!");
  }
}

window.generateText = async (prompt: string) => {
  await loadModel();

  const output = await generator(prompt, {
    max_new_tokens: 60,
    temperature: 0.7,
  });

  return output[0].generated_text;
};
