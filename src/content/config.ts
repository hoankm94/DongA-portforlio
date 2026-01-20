import { defineCollection, z } from 'astro:content';

const projectCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string(),
    gallery: z.array(z.string()).optional(), 
    tags: z.array(z.string()).optional(),
  }),
});

const productCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    price: z.string().optional(),
    image: z.string(),
    gallery: z.array(z.string()).optional(), 
  }),
});

export const collections = {
  'projects': projectCollection,
  'products': productCollection,
};