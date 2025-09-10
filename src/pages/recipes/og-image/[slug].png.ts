import type { APIRoute } from 'astro';
import { getRecipe } from '../../../lib/recipes.data';

export const GET: APIRoute = async ({ params }) => {
	const recipe = await getRecipe(params.slug!);
	if (!recipe) return new Response('Not found', { status: 404 });

	// Simple SVG response compatible with your existing OG infra
	const svg = `<?xml version="1.0" encoding="UTF-8"?><svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0" x2="1"><stop offset="0%" stop-color="#111"/><stop offset="100%" stop-color="#333"/></linearGradient></defs><rect width="1200" height="630" fill="url(#g)"/><g fill="#fff" font-family="Inter, system-ui, -apple-system, Segoe UI, Roboto" ><text x="72" y="160" font-size="64" font-weight="700">${escapeXml(
		recipe.title
	)}</text><text x="72" y="220" font-size="28" opacity="0.8">${escapeXml(
		recipe.tags.join(' • ')
	)}</text></g></svg>`;

	return new Response(svg, { headers: { 'Content-Type': 'image/svg+xml' } });
};

function escapeXml(s: string): string {
	return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}


