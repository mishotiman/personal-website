import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog",
  description: "Short articles on health, performance, and the mind.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <p className="text-sm uppercase tracking-widest text-red-400 mb-4">
        Blog
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight mb-12">
        Short articles where I share my thoughts on different topics.
      </h1>

      {posts.length === 0 ? (
        <p className="text-neutral-400">No posts yet. Check back soon.</p>
      ) : (
        <ul className="space-y-10">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <p className="text-sm text-neutral-500 mb-1">
                  {formatDate(post.date)}
                </p>
                <h2 className="font-serif text-2xl font-semibold tracking-tight group-hover:text-red-400 transition">
                  {post.title}
                </h2>
                <p className="text-neutral-400 mt-2 leading-relaxed">
                  {post.summary}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

function formatDate(date: string): string {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
