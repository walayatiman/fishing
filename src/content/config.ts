import { defineCollection, z } from 'astro:content'

const blogCollection = defineCollection({
type:'content'	,
	schema: ({ image }) =>
		z.object({
			title: z.string().max(80),
			description: z.string(),
			heroImage: image(),
			author:z.string()
		})
})

export const collections = { 'blog' : blogCollection}