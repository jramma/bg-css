import { GITHUB_USERNAME } from "@/consts";
export async function fetchGithubRepos() {
  const response = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos`
  );
  if (!response.ok) {
    throw new Error("Error fetching GitHub repositories");
  }
  const repos = await response.json();
  return repos.map((repo:any) => ({
    name: repo.name,
    description: repo.description,
    url: repo.html_url,
    language: repo.language,
    date: repo.created_at,
  }));
}
