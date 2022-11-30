import { useParams } from "react-router-dom";
import useGetRecipe from "~/libs/apis/useGetRecipe";
import IngredientBlock from "./IngredientBlock";

export default function InstructionSlide({ instruction }) {
    const { recipeId } = useParams();
    const { recipe } = useGetRecipe(recipeId);

    return (
        <div className="w-full">
            <div className="slide flex min-h-[calc(100vh-80px)] w-full flex-col space-y-8 px-8 pb-8 md:flex-row md:px-0">
                <div className="containerCookingItem_left space-y-4 border-black py-8 md:flex-1 md:border-r-[1px] md:pr-4">
                    <h1 className="text-7xl font-medium">Step {instruction.stepNo}</h1>
                    <p className="text-xl">{instruction.description}</p>
                </div>

                <div className="containerCookingItem_right overflow-y-auto md:flex-1 md:pl-4">
                    <div className="cookingIngredients flex flex-col font-medium">
                        <h1 className="text-7xl font-medium">Ingrdients</h1>

                        <div className="cookingIngredients_ul flex-1 py-8">
                            <ul>
                                {recipe?.ingredients.map((ingredient) => (
                                    <div key={ingredient.id}>
                                        <IngredientBlock ingredient={ingredient} />
                                    </div>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
