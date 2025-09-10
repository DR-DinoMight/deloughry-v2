import type { CollectionEntry } from "astro:content";
import type { ParsedRecipe } from "@/lib/cooklang";

// Generic tag utilities that work for both blogs and recipes
export function getUniqueTags<T extends { tags: string[] }>(items: T[] = []): string[] {
	const uniqueTags = new Set<string>();
	items.forEach((item) => {
		item.tags.forEach((tag) => uniqueTags.add(tag.toLowerCase().trim()));
	});
	return Array.from(uniqueTags).sort();
}

export function getUniqueTagsWithCount<T extends { tags: string[] }>(items: T[] = []): {
	[key: string]: number;
} {
	return items.reduce((prev, item) => {
		const runningTags: { [key: string]: number } = { ...prev };
		item.tags.forEach((tag) => {
			const normalizedTag = tag.toLowerCase().trim();
			runningTags[normalizedTag] = (runningTags[normalizedTag] || 0) + 1;
		});
		return runningTags;
	}, {});
}

export function getItemsByTag<T extends { tags: string[] }>(items: T[], tag: string): T[] {
	const normalizedTag = tag.toLowerCase().trim();
	return items.filter((item) =>
		item.tags.some(itemTag => itemTag.toLowerCase().trim() === normalizedTag)
	);
}

// Blog-specific utilities (keeping backward compatibility)
export function sortMDByDate(posts: CollectionEntry<"post">[] = []) {
	return posts.sort(
		(a, b) => new Date(b.data.publishDate).valueOf() - new Date(a.data.publishDate).valueOf()
	);
}

export function getUniqueBlogTags(posts: CollectionEntry<"post">[] = []) {
	return getUniqueTags(posts.map(post => ({ tags: post.data.tags })));
}

export function getUniqueBlogTagsWithCount(posts: CollectionEntry<"post">[] = []) {
	return getUniqueTagsWithCount(posts.map(post => ({ tags: post.data.tags })));
}

export function getBlogPostsByTag(posts: CollectionEntry<"post">[], tag: string) {
	return getItemsByTag(posts.map(post => ({ tags: post.data.tags, ...post })), tag);
}

// Recipe-specific utilities
export function getUniqueRecipeTags(recipes: ParsedRecipe[] = []) {
	return getUniqueTags(recipes);
}

export function getUniqueRecipeTagsWithCount(recipes: ParsedRecipe[] = []) {
	return getUniqueTagsWithCount(recipes);
}

export function getRecipesByTag(recipes: ParsedRecipe[], tag: string) {
	return getItemsByTag(recipes, tag);
}

// Tag display utilities
export function formatTagForDisplay(tag: string): string {
	return tag
		.split('-')
		.map(word => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
}

export function getTagSlug(tag: string): string {
	return encodeURIComponent(tag.toLowerCase().trim());
}

// Tag categories for better organisation
export const TAG_CATEGORIES = {
	cuisine: ['british', 'italian', 'mexican', 'indian', 'chinese', 'french', 'japanese'],
	diet: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free', 'keto', 'paleo'],
	meal: ['breakfast', 'lunch', 'dinner', 'snack', 'dessert', 'appetizer'],
	cooking: ['baking', 'grilling', 'roasting', 'frying', 'steaming', 'slow-cooker'],
	difficulty: ['easy', 'medium', 'hard', 'beginner', 'intermediate', 'advanced'],
	time: ['quick', '30-minutes', '1-hour', 'overnight', 'weekend'],
	equipment: ['one-pot', 'no-bake', 'air-fryer', 'instant-pot', 'slow-cooker'],
	occasion: ['comfort-food', 'party', 'holiday', 'weeknight', 'special-occasion'],
	ingredient: ['pasta', 'chicken', 'beef', 'fish', 'vegetables', 'cheese'],
	technique: ['spicy', 'creamy', 'crispy', 'tender', 'fluffy', 'rich']
} as const;

export function getTagCategory(tag: string): string | null {
	const normalizedTag = tag.toLowerCase().trim();

	for (const [category, tags] of Object.entries(TAG_CATEGORIES)) {
		if (tags.includes(normalizedTag)) {
			return category;
		}
	}

	return null;
}

export function getTagsByCategory(tags: string[]): Record<string, string[]> {
	const categorized: Record<string, string[]> = {};

	tags.forEach(tag => {
		const category = getTagCategory(tag);
		if (category) {
			if (!categorized[category]) {
				categorized[category] = [];
			}
			categorized[category].push(tag);
		}
	});

	return categorized;
}
