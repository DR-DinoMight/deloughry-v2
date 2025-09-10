import { Recipe as CookRecipe } from 'cooklang';

export type ParsedIngredient = {
	name: string;
	quantity?: number;
	unit?: string | null;
	optional?: boolean;
};

export type ParsedTimer = { label?: string | null; seconds: number };

export type ParsedStep = {
	text: string;
	timers: ParsedTimer[];
};

export type ParsedRecipe = {
	slug: string;
	title: string;
	description: string | undefined;
	tags: string[];
	servings: number | undefined;
	ingredients: ParsedIngredient[];
	utensils: string[];
	steps: ParsedStep[];
	source: string | null | undefined;
	image: string | null | undefined;
};

export function parseCook(slug: string, raw: string): ParsedRecipe {
	const r = new CookRecipe(raw);

	const metaObj: Record<string, string> = {};
	for (const m of r.metadata ?? []) {
		if (m?.key) metaObj[m.key] = String(m.value ?? '').trim();
	}
	const title = metaObj.title || slug;
	const servings = metaObj.servings ? Number(metaObj.servings) : undefined;
	const tags = (metaObj.tags || '')
		.split(',')
		.map((t) => t.trim())
		.filter(Boolean);

	const ingredients: ParsedIngredient[] = (r.ingredients || []).map((i: any) => {
		const result: ParsedIngredient = {
			name: i.name || '',
			optional: false
		};

		// Use the library's parsed quantity and units
		if (typeof i.quantity === 'number') {
			(result as any).quantity = i.quantity;
		}
		if (i.units && i.units.trim()) {
			(result as any).unit = i.units.trim();
		}

		return result;
	});

	const utensils: string[] = (r.cookware || []).map((c: any) => c.name);

	const steps: ParsedStep[] = (r.steps || []).map((s: any) => {
		// Build text from parsed tokens, handling ingredients, cookware, and timers
		const text = Array.isArray(s.line)
			? s.line
					.map((token: any) => {
						if (typeof token === 'string') {
							return token;
						} else if (token && typeof token === 'object') {
							// Handle ingredients, cookware, and timers
							if (token.name !== undefined) {
								// Ingredient or cookware
								return token.name;
							} else if (token.raw && token.raw.startsWith('~')) {
								// Timer - show duration and unit
								const duration = token.quantity || token.amount;
								const unit = token.units || 'minutes';
								return `${duration}${unit}`;
							}
						}
						return '';
					})
					.join('')
					.trim()
			: String(s.raw || '').trim();

		// Extract timers from the parsed line
		const timers: ParsedTimer[] = [];
		if (Array.isArray(s.line)) {
			for (const token of s.line) {
				if (token && typeof token === 'object' && token.raw && token.raw.startsWith('~')) {
					// This is a timer
					const name = token.name || null;
					const seconds = token.seconds || 0;
					timers.push({ label: name, seconds });
				}
			}
		}

		return { text, timers };
	});

	return {
		slug,
		title,
		description: metaObj.description ? String(metaObj.description) : undefined,
		tags,
		servings,
		ingredients,
		utensils,
		steps,
		source: metaObj.source ? String(metaObj.source) : null,
		image: metaObj.image ? String(metaObj.image) : null,
	};
}


