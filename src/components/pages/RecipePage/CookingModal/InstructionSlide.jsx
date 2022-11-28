import { useParams } from "react-router-dom";
import useGetRecipe from "~/libs/apis/useGetRecipe";
import IngredientBlock from "./IngredientBlock";

export default function InstructionSlide({ instruction }) {
    const { recipeId } = useParams();
    const { recipe } = useGetRecipe(recipeId);

    return (
        <div className="h-full w-full">
            <div className="flex items-center justify-center">
                <div className="grid h-full w-full grid-cols-2 justify-center">
                    <div className="containerCookingItem_left w-full border-r-[1px] border-black p-8">
                        <h2 className="text-2xl">{instruction.description}</h2>
                    </div>

                    <div className="containerCookingItem_right overflow-y-auto p-8">
                        <div className="cookingIngredients flex flex-col font-medium">
                            <div className="cookingIngredients_header flex flex-row">
                                <h1 className="text-3xl">Ingredients</h1>
                            </div>
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
        </div>
    );
}
