import { z, defineCollection } from "astro:content";

function removeDupsAndLowerCase(array: string[]) {
  if (!array.length) return array;
  const lowercaseItems = array.flatMap((str) => str.toLowerCase());
  const distinctItems = new Set(lowercaseItems);
  return Array.from(distinctItems);
}

const post = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().min(50).max(250),
    publishDate: z.string().transform((str: string) => new Date(str)),
    tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
    ogImage: z.string().optional(),
  }),
});

export const collections = { post };
