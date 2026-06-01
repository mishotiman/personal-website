import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllSlugs } from "@/lib/posts";

// Pre-generate a page for each post at build time
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

// Dynamic <title> per post
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return { title: `${post.title} — Michail`, description: post.summary };
  } catch {
    return { title: "Post not found" };
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <main className="max-w-2xl mx-auto px-6 py-24">
      <Link
        href="/blog"
        className="text-sm text-neutral-500 hover:text-neutral-300 transition"
      >
        ← Back to writing
      </Link>

      <article className="mt-10">
        <p className="text-sm text-neutral-500 mb-3">{formatDate(post.date)}</p>
        <h1 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-10">
          {post.title}
        </h1>

        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-serif prose-headings:tracking-tight prose-a:text-red-400 prose-a:no-underline hover:prose-a:underline">
          <MDXRemote source={post.content} />
        </div>
      </article>
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
