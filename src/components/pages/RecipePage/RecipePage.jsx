import { AspectRatio } from "@mantine/core";
import { useParams } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import useGetRecipe from "~/libs/apis/useGetRecipe";
import IngredientsList from "./IngredientsList";
import RecipeDetail from "./RecipeDetail";

const RecipePage = () => {
    const { recipeId } = useParams();

    const { recipe } = useGetRecipe(recipeId);

    if (!recipe) return <div></div>;

    return (
        <div>
            <div className="container mt-12 ">
                <div className="grid grid-cols-12 gap-x-12">
                    <div className="col-span-5">
                        <div>
                            <AspectRatio ratio={7 / 9}>
                                <img src={recipe.imageUrl} alt={recipe.name} />
                            </AspectRatio>
                            <div className="mt-16">
                                <IngredientsList recipe={recipe} />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-7">
                        <RecipeDetail recipe={recipe} />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default RecipePage;
