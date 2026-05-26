import type { CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;
export type BlogSummary = BlogPost['data'] & { slug: string };

export const getBlogSlug = (post: BlogPost) => post.id.replace(/\.md$/, '');

export const toBlogSummary = (post: BlogPost): BlogSummary => ({
  slug: getBlogSlug(post),
  ...post.data,
});

export const sortBlogPosts = (posts: BlogPost[]) =>
  [...posts].sort((a, b) => Date.parse(b.data.date) - Date.parse(a.data.date));

export const formatBlogDate = (date: string) =>
  new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));
