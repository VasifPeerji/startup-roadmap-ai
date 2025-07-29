# github_dataset_engine/utils.py
import os
import json
import re

def save_json(data, filepath):
    os.makedirs(os.path.dirname(filepath), exist_ok=True)
    with open(filepath, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2)

def load_json(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        return json.load(f)

def clean_markdown(md_text):
    """Remove Markdown formatting (basic)."""
    text = re.sub(r"!\[.*?\]\(.*?\)", "", md_text)  # Remove images
    text = re.sub(r"\[.*?\]\(.*?\)", "", text)      # Remove links
    text = re.sub(r"[#*_>`]", "", text)             # Remove markdown symbols
    return text.strip()

def ensure_dir(path):
    os.makedirs(path, exist_ok=True)

def log(msg):
    print(f"[LOG] {msg}")
