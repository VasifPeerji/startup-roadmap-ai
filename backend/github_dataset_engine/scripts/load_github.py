# github_dataset_engine/scripts/load_github.py

from pathlib import Path
import requests
import time
import json
import os
from datetime import datetime
from tqdm import tqdm
from github_dataset_engine.config import HEADERS, BASE_URL

# ========== CONFIGURATION ==========
TOPICS = [
    "saas", "crm", "invoice", "authentication", "dashboard",
    "budget-tracker", "project-management", "task-manager", "kanban", "notetaking",
    "booking-system", "ecommerce", "marketplace", "job-board", "form-builder",
    "chatbot", "cms", "api", "openai", "recommendation-system"
]

REPOS_PER_TOPIC = 30

# Dynamically locate project root: backend/github_dataset_engine/scripts → backend/
BASE_DIR = Path(__file__).resolve().parents[2]
DATA_DIR = BASE_DIR / "data"
OUTPUT_FILE = DATA_DIR / "raw_repos.json"

# ========== HELPER FUNCTIONS ==========
def fetch_repos_by_topic(topic, per_page=30):
    repos = []
    for page in range(1, (REPOS_PER_TOPIC // per_page) + 2):
        url = f"{BASE_URL}/search/repositories"
        params = {
            "q": f"topic:{topic}",
            "sort": "stars",
            "order": "desc",
            "per_page": per_page,
            "page": page
        }
        response = requests.get(url, headers=HEADERS, params=params)
        if response.status_code == 200:
            data = response.json().get("items", [])
            repos.extend(data)
            time.sleep(1)
        else:
            print(f"[ERROR] Topic '{topic}' - {response.status_code}: {response.text}")
            break
    return repos

def fetch_readme(repo_full_name):
    url = f"{BASE_URL}/repos/{repo_full_name}/readme"
    response = requests.get(url, headers=HEADERS)
    if response.status_code == 200:
        data = response.json()
        if data.get("encoding") == "base64":
            import base64
            return base64.b64decode(data["content"]).decode("utf-8", errors="ignore")
    return ""

def calculate_repo_age(created_at):
    created = datetime.strptime(created_at, "%Y-%m-%dT%H:%M:%SZ")
    now = datetime.utcnow()
    age_years = round((now - created).days / 365.25, 2)
    return age_years

def fetch_extra_repo_info(repo_full_name):
    url = f"{BASE_URL}/repos/{repo_full_name}"
    response = requests.get(url, headers=HEADERS)
    if response.status_code == 200:
        repo = response.json()
        return {
            "open_issues": repo.get("open_issues_count", 0),
            "license": repo["license"]["spdx_id"] if repo.get("license") else None,
            "contributors_url": repo.get("contributors_url", "")
        }
    return {"open_issues": 0, "license": None, "contributors_url": ""}

def fetch_contributor_count(contributors_url):
    if not contributors_url:
        return 0
    response = requests.get(contributors_url, headers=HEADERS, params={"per_page": 1})
    if "Link" in response.headers:
        import re
        links = response.headers["Link"]
        match = re.search(r'&page=(\d+)>; rel="last"', links)
        if match:
            return int(match.group(1))
    return len(response.json())

# ========== MAIN SCRAPER ==========
def main():
    all_repos = []
    seen = set()

    os.makedirs(os.path.dirname(OUTPUT_FILE), exist_ok=True)

    for topic in TOPICS:
        print(f"\n🔍 Fetching repos for topic: {topic}")
        repos = fetch_repos_by_topic(topic)
        for repo in tqdm(repos, desc=f"Processing {topic}"):
            repo_id = repo["full_name"]
            if repo_id in seen:
                continue
            seen.add(repo_id)

            readme = fetch_readme(repo_id)
            age = calculate_repo_age(repo["created_at"])
            extra = fetch_extra_repo_info(repo_id)
            contributors = fetch_contributor_count(extra["contributors_url"])

            cleaned = {
                "name": repo["name"],
                "full_name": repo["full_name"],
                "description": repo["description"],
                "topics": repo.get("topics", []),
                "stars": repo["stargazers_count"],
                "forks": repo["forks_count"],
                "language": repo["language"],
                "html_url": repo["html_url"],
                "created_at": repo["created_at"],
                "updated_at": repo["updated_at"],
                "repo_age_in_years": age,
                "owner_type": repo["owner"]["type"],
                "owner_name": repo["owner"]["login"],
                "open_issues": extra["open_issues"],
                "license": extra["license"],
                "contributors": contributors,
                "readme": readme
            }

            all_repos.append(cleaned)
            time.sleep(0.5)

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(all_repos, f, indent=2)

    print(f"\n✅ Finished! Saved {len(all_repos)} enriched repos to {OUTPUT_FILE}")


if __name__ == "__main__":
    main()
