import json
import re
from bs4 import BeautifulSoup

def clean_readme(md_text):
    # Remove markdown/code blocks and strip HTML
    md_text = re.sub(r'`{3}.*?`{3}', '', md_text, flags=re.DOTALL)
    soup = BeautifulSoup(md_text, 'html.parser')
    return soup.get_text().strip()

def clean_repo_entry(repo):
    return {
        "repo_name": repo.get("name", ""),
        "description": repo.get("description", ""),
        "topics": repo.get("topics", []),
        "language": repo.get("language", ""),
        "stars": repo.get("stargazers_count", 0),
        "created_at": repo.get("created_at", ""),
        "updated_at": repo.get("updated_at", ""),
        "readme_text": clean_readme(repo.get("readme", "")),
    }

def process_all(raw_path, output_path):
    with open(raw_path, 'r', encoding='utf-8') as f:
        raw = json.load(f)

    cleaned = [clean_repo_entry(repo) for repo in raw]

    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(cleaned, f, indent=2)

if __name__ == "__main__":
    process_all("backend/github_dataset_engine/data/raw_repos.json", 
                "backend/github_dataset_engine/data/cleaned_repos.json")

