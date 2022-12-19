import { AspectRatio } from "@mantine/core";
import { useParams } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import useGetRecipe from "~/libs/apis/useGetRecipe";
import CommentForm from "./CommentForm";
import IngredientsList from "./IngredientsList";
import RecipeDetail from "./RecipeDetail";

const RecipePage = () => {
    const { recipeId } = useParams();
    const { recipe } = useGetRecipe(recipeId);

    if (!recipe) return <div></div>;

    return (
        <div className="container mt-12">
            <div className="flex flex-col md:grid md:grid-cols-12 md:gap-x-12">
                <div className="col-span-5">
                    <div>
                        <AspectRatio ratio={7 / 9}>
                            <img src={recipe.imageUrl} alt={recipe.name} />
                        </AspectRatio>
                        <div className="mt-16 hidden space-y-2 md:block">
                            <h2 className="text-3xl font-bold">Description</h2>
                            <div className="text-gray-700">{recipe.description}</div>
                        </div>
                        <div className="mt-16 hidden md:block">
                            <IngredientsList recipe={recipe} />
                        </div>
                    </div>
                </div>
                <div className="col-span-7">
                    <RecipeDetail />
                </div>
            </div>
            <CommentForm />
        </div>
    );
};
export default RecipePage;
