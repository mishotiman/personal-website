import Link from "next/link";
import { getAllPosts } from "@/lib/sanity-posts";

export const revalidate = 10; // re-fetch from Sanity at most every 60 seconds

export const metadata = {
  title: "Blog — Michail Timanov",
  description: "Health and wellbeing principles, summarized in short articles.",
};

export default async function BlogIndex() {
  const posts = await getAllPosts();

  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <p className="text-sm uppercase tracking-widest text-[#1a2b4a] mb-4">
        Blog
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight mb-12">
        Here I share my knowledge, thoughts, and experience on various topics.
      </h1>

      {posts.length === 0 ? (
        <p className="text-[#6b6b66]">No posts yet. Check back soon.</p>
      ) : (
        <ul className="space-y-2">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block -mx-5 px-5 py-5 rounded-lg hover:bg-[#1a2b4a]/5 transition-colors"
              >
                <p className="text-sm text-[#8a8a83] mb-1">
                  {formatDate(post.publishedAt)}
                </p>
                <h2 className="font-serif text-2xl font-semibold tracking-tight group-hover:text-[#1a2b4a] transition-colors">
                  {post.title}
                </h2>
                <p className="text-[#6b6b66] mt-2 leading-relaxed">
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
