import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { getPostBySlug, getAllSlugs } from "@/lib/sanity-posts";

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post not found" };
  return { title: `${post.title} — Michail`, description: post.summary };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="max-w-2xl mx-auto px-6 py-24">
      <Link
        href="/blog"
        className="text-sm text-[#8a8a83] hover:text-[#1a2b4a] transition"
      >
        ← Back to blog
      </Link>

      <article className="mt-10">
        <p className="text-sm text-[#8a8a83] mb-3">
          {formatDate(post.publishedAt)}
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-10">
          {post.title}
        </h1>

        <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:tracking-tight prose-a:text-[#1a2b4a] prose-a:no-underline hover:prose-a:underline">
          <PortableText value={post.body} />
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
