import { defineCollection, z } from 'astro:content';

export const collections = {
	work: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string().nullable(), // Rend img optionnel
            img_alt: z.string().optional(), // Rend img_alt optionnel (déjà facultatif)
		}),
	}),
};
