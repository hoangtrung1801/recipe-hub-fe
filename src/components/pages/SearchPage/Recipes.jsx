import RecipeCard from "~/components/RecipeCard";
import useGetRecipes from "~/libs/apis/useGetRecipes";

const Recipes = () => {
    const { recipes } = useGetRecipes();

    return (
        <>
            {recipes.map((recipe) => {
                return (
                    <div key={recipe.id}>
                        <RecipeCard recipe={recipe} />{" "}
                    </div>
                );
            })}
        </>
    );
};

export default Recipes;
