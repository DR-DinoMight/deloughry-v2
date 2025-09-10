import type { ParsedRecipe } from '../../lib/cooklang';

export default function RecipeSchema({ recipe }: { recipe: ParsedRecipe }) {
    const data: any = {
        '@context': 'https://schema.org',
        '@type': 'Recipe',
        name: recipe.title,
        description: recipe.description ?? undefined,
        recipeCategory: recipe.tags?.[0],
        keywords: recipe.tags.join(', '),
        recipeIngredient: recipe.ingredients.map((i) =>
            [i.quantity ?? '', i.unit ?? '', i.name].filter(Boolean).join(' ').trim()
        ),
        recipeInstructions: recipe.steps.map((s) => ({ '@type': 'HowToStep', text: s.text })),
        recipeYield: recipe.servings ? `${recipe.servings} serving(s)` : undefined,
        image: recipe.image ?? undefined,
        url: `/recipes/${recipe.slug}/`,
    };
    return (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
    );
}


