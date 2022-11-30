import RecipeCard from "./RecipeCard";

export default function ListRecipeCards({ recipes }) {
    return (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {recipes.map((recipe) => (
                <div key={recipe.id}>
                    <RecipeCard recipe={recipe} />
                </div>
            ))}
        </div>
    );
}
