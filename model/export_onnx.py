from optimum.onnxruntime import ORTModelForCausalLM
from transformers import AutoTokenizer
from onnxruntime.transformers import optimizer

model_path = "trained-model"

print("Exporting ONNX model...")
ort_model = ORTModelForCausalLM.from_pretrained(model_path, export=True)
tokenizer = AutoTokenizer.from_pretrained(model_path)

# Save initial ONNX export
onnx_dir = "../public/onnx-model"
ort_model.save_pretrained(onnx_dir)
tokenizer.save_pretrained(onnx_dir)

print("Initial ONNX export complete. Now optimizing FP16 model...")

# Optimize and convert to FP16
optimized = optimizer.optimize_model(
    f"{onnx_dir}/model.onnx",
    model_type="gpt2",
)

optimized.convert_float_to_float16()
optimized.save_model_to_file(f"{onnx_dir}/model_fp16.onnx")

print("FP16 optimized ONNX exported as model_fp16.onnx")