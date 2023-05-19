import {z, defineCollection} from "astro:content"


const blog = defineCollection({
    schema: z.object({
        title : z.string(),
        date: z.date(),
        description : z.string(),
        draft: z.boolean(),
        image: z.object({
            src: z.string(),
            alt: z.string(),
        }),
        Categories: z.array(z.string()),
        tags : z.array(z.string()),
    }),
});

export const collections = { blog }