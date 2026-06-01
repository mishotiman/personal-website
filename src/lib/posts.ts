import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/content/posts");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  summary: string;
};

// Get metadata for all posts, sorted newest-first
export function getAllPosts(): PostMeta[] {
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames
    .filter((name) => name.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title ?? "Untitled",
        date: data.date ?? "",
        summary: data.summary ?? "",
      };
    });

  // Sort newest-first by date
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// Get the raw MDX content + metadata for a single post
export function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title ?? "Untitled",
    date: data.date ?? "",
    summary: data.summary ?? "",
    content, // the MDX body (without frontmatter)
  };
}

// List all slugs (for static generation)
export function getAllSlugs(): string[] {
  return fs
    .readdirSync(postsDirectory)
    .filter((name) => name.endsWith(".mdx"))
    .map((name) => name.replace(/\.mdx$/, ""));
}
