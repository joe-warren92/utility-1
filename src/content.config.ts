import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    date: z.string(),
    modifiedDate: z.string(),
    readTime: z.string(),
    author: z.string(),
    image: image(),
    imageAlt: z.string(),
    featured: z.boolean().optional(),
    tags: z.array(z.string()),
    excerpt: z.string(),
  }),
});

export const collections = { blog };
