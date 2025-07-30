# github_dataset_engine/scripts/preprocess_github.py

from pathlib import Path
import json
import os
import re
from tqdm import tqdm

# ======== File Paths ========
BASE_DIR = Path(__file__).resolve().parents[2]
DATA_DIR = BASE_DIR / "data"
INPUT_FILE = DATA_DIR / "raw_repos.json"
OUTPUT_FILE = DATA_DIR / "cleaned_repos.json"

# ======== Utilities ========

def clean_text(text):
    """Remove markdown, HTML tags, code blocks, and extra whitespace from README"""
    if not text:
        return ""
    
    # Remove code blocks and inline code
    text = re.sub(r"```.*?```", "", text, flags=re.DOTALL)
    text = re.sub(r"`.*?`", "", text)

    # Remove markdown headers, images, links
    text = re.sub(r"!\[.*?\]\(.*?\)", "", text)
    text = re.sub(r"\[.*?\]\(.*?\)", "", text)
    text = re.sub(r"#+", "", text)

    # Remove HTML tags
    text = re.sub(r"<[^>]+>", "", text)

    # Normalize whitespace
    text = re.sub(r"\s+", " ", text).strip()
    return text

def is_valid_repo(repo):
    """Filter out repos with too few stars or missing critical info"""
    if not repo.get("readme"):
        return False
    if repo.get("stars", 0) < 50:
        return False
    if repo.get("language") is None:
        return False
    return True

def extract_tech_tags(readme):
    """Simple keyword-based tagging from readme (can be improved later)"""
    tech_keywords = [
        "react", "nextjs", "vue", "angular", "tailwind", "node", "express", "django", "flask", 
        "spring", "dotnet", "graphql", "firebase", "mongodb", "postgres", "mysql", "docker", "redis", "openai", "langchain"
    ]
    tags = set()
    for kw in tech_keywords:
        if re.search(rf"\b{kw}\b", readme, flags=re.IGNORECASE):
            tags.add(kw.lower())
    return sorted(tags)

# ======== Main Preprocessor ========

def main():
    print(f"🔍 Loading: {INPUT_FILE}")
    with open(INPUT_FILE, "r", encoding="utf-8") as f:
        raw_data = json.load(f)

    cleaned_data = []
    for repo in tqdm(raw_data, desc="🧹 Preprocessing repos"):
        if not is_valid_repo(repo):
            continue

        readme_clean = clean_text(repo["readme"])
        tech_tags = extract_tech_tags(readme_clean)

        cleaned = {
            "name": repo["name"],
            "full_name": repo["full_name"],
            "description": repo["description"],
            "topics": repo["topics"],
            "tech_tags": tech_tags,
            "stars": repo["stars"],
            "forks": repo["forks"],
            "language": repo["language"],
            "html_url": repo["html_url"],
            "created_at": repo["created_at"],
            "updated_at": repo["updated_at"],
            "repo_age_in_years": repo["repo_age_in_years"],
            "owner_type": repo["owner_type"],
            "owner_name": repo["owner_name"],
            "open_issues": repo["open_issues"],
            "license": repo["license"],
            "contributors": repo["contributors"],
            "readme_cleaned": readme_clean
        }

        cleaned_data.append(cleaned)

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(cleaned_data, f, indent=2)

    print(f"\n✅ Saved {len(cleaned_data)} cleaned repos to {OUTPUT_FILE}")


if __name__ == "__main__":
    main()
