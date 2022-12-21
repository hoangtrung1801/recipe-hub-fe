import * as _ from "lodash";
import React from "react";
import { useParams } from "react-router-dom";
import useGetCurrentInstructions from "~/libs/apis/useGetCurrentInstructions";
import useGetRecipe from "~/libs/apis/useGetRecipe";

const RecipeComponentToPrint = React.forwardRef((props, ref) => {
    const { recipeId } = useParams();

    const { recipe } = useGetRecipe(recipeId);
    const { instructions } = useGetCurrentInstructions(recipe.id);

    return (
        <div ref={ref}>
            <div className="m-12  space-y-4">
                <div className="flex justify-center space-x-4">
                    {/* <AspectRatio ratio={7 / 9}>
                        <img src={recipe.imageUrl} alt={recipe.name} />
                    </AspectRatio> */}

                    <div className="space-y-2">
                        <h1>{recipe.name}</h1>
                        <div className="flex space-x-4">
                            {recipe.catalogs.map((catalog) => (
                                <p key={catalog.id} className="underline underline-offset-2">
                                    {_.capitalize(catalog.name)}
                                </p>
                            ))}
                        </div>

                        <div className="flex space-x-4">
                            <p className="space-x-1">
                                <span className="font-medium">Total</span>
                                <span>{recipe.cookTime.total}m</span>
                            </p>
                            <p className="space-x-1">
                                <span className="font-medium">Prep</span>
                                <span>{recipe.cookTime.prep}m</span>
                            </p>
                            <p className="space-x-1">
                                <span className="font-medium">Chill</span>
                                <span>{recipe.cookTime.chill}m</span>
                            </p>
                            <p className="space-x-1">
                                <span className="font-medium">Cook</span>
                                <span>{recipe.cookTime.cook}m</span>
                            </p>
                        </div>
                    </div>

                    <img src={recipe.imageUrl} width={240} height={240} />
                </div>

                <div>
                    <h3>Nutrition</h3>
                    <div className="flex space-x-4">
                        {Object.keys(recipe.nutrition).map(
                            (nutrition) =>
                                nutrition !== "id" && (
                                    <p key={nutrition} className="space-x-1">
                                        <span className="font-medium">
                                            {_.capitalize(nutrition)}
                                        </span>
                                        <span>{recipe.nutrition[nutrition]}g</span>
                                    </p>
                                )
                        )}
                    </div>
                </div>

                <div>
                    <h3>Ingredients</h3>
                    <ul className="list-disc pl-8">
                        {recipe.ingredients.map((ingredient) => (
                            <li key={ingredient.name} className="space-x-4">
                                <span className="capitalize">{ingredient.name}</span>
                                <span>{`${ingredient.amount}${ingredient.unit}`}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3>Instructions</h3>
                    <ul className="list-decimal pl-8">
                        {instructions &&
                            instructions.map((instruction) => (
                                <li key={instruction.id}>{instruction.description}</li>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    );
});

export default RecipeComponentToPrint;
