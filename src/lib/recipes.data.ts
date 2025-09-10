import { parseCook, type ParsedRecipe } from './cooklang';

export async function getAllRecipes(): Promise<ParsedRecipe[]> {
	const glob = import.meta.glob('../recipes/*.cook', { as: 'raw' });
	const entries = await Promise.all(
		Object.entries(glob).map(async ([path, loader]) => {
			const raw = await (loader as () => Promise<string>)();
			const slug = path.split('/').pop()!.replace('.cook', '');
			return parseCook(slug, raw);
		})
	);
	return entries.sort((a, b) => a.title.localeCompare(b.title));
}

export async function getRecipe(slug: string): Promise<ParsedRecipe | null> {
	const all = await getAllRecipes();
	return all.find((r) => r.slug === slug) ?? null;
}


