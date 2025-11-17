from transformers import AutoTokenizer, AutoModelForCausalLM, Trainer, TrainingArguments, DataCollatorForLanguageModeling
from datasets import Dataset

# LOAD / PREPARE TRAINING TEXT
with open("training_data.txt", "r") as f:
    text = f.read()

dataset = Dataset.from_dict({"text": [text]})

# TOKENIZER
model_name = "sshleifer/tiny-gpt2"
tokenizer = AutoTokenizer.from_pretrained(model_name)
tokenizer.pad_token = tokenizer.eos_token

def tokenize(batch):
    return tokenizer(batch["text"], truncation=True, padding=True)

tokenized = dataset.map(tokenize, batched=True)

# MODEL
model = AutoModelForCausalLM.from_pretrained(model_name)

# TRAINING SETUP
args = TrainingArguments(
    output_dir="output",
    overwrite_output_dir=True,
    per_device_train_batch_size=2,
    num_train_epochs=4,
    learning_rate=5e-5,
    weight_decay=0.01,
    logging_steps=10,
)

data_collator = DataCollatorForLanguageModeling(tokenizer, mlm=False)

trainer = Trainer(
    model=model,
    args=args,
    train_dataset=tokenized,
    data_collator=data_collator
)

trainer.train()

# SAVE
trainer.save_model("trained-model")
tokenizer.save_pretrained("trained-model")
