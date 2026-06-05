import { client } from "@/sanity/lib/client";

export type PostMeta = {
  slug: string;
  title: string;
  publishedAt: string;
  summary: string;
};

export type Post = PostMeta & {
  body: any; // Portable Text — typed loosely for now
  coverImage?: any;
};

// All posts, newest first (metadata only — for the list page)
export async function getAllPosts(): Promise<PostMeta[]> {
  return client.fetch(
    `*[_type == "post" && defined(slug.current)] | order(publishedAt desc){
      "slug": slug.current,
      title,
      publishedAt,
      summary
    }`
  );
}

// One post by slug (full content — for the post page)
export async function getPostBySlug(slug: string): Promise<Post | null> {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      "slug": slug.current,
      title,
      publishedAt,
      summary,
      body,
      coverImage
    }`,
    { slug }
  );
}

// All slugs (for static generation)
export async function getAllSlugs(): Promise<string[]> {
  const slugs: { slug: string }[] = await client.fetch(
    `*[_type == "post" && defined(slug.current)]{ "slug": slug.current }`
  );
  return slugs.map((s) => s.slug);
}
