import Counter from "~/components/Counter";
import { Receipt } from "phosphor-react";
import * as _ from "lodash";

const ingredients = [
    {
        name: "Mushrooms",
        amount: 200,
        unit: "g",
        // detail: 'sliced'
    },
    {
        name: "Spinach",
        amount: 60,
        unit: "g",
        // detail: 'sliced'
    },
    {
        name: "Garlic cloves",
        amount: 2,
        unit: "",
        // detail: 'sliced'
    },
    {
        name: "Olive oil",
        amount: 1,
        unit: "tbsp",
        // detail: 'sliced'
    },
];

export default function IngredientsList({ recipe }) {
    return (
        <div>
            <div className="flex w-full items-center justify-between">
                <h3 className="text-3xl font-bold">Ingredients</h3>
                <Counter />
            </div>
            <div className="mt-8 space-y-3">
                {recipe.ingredients.map((ingredient) => (
                    <div key={ingredient.name} className="flex space-x-4">
                        {/* <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-300">
                            <div className="w-8">
                                <div className="relative w-full pb-[100%]">
                                </div>
                            </div>
                        </div> */}
                        <div className="flex flex-1 items-center text-lg">
                            <div className="flex-1">
                                <p className="capitalize">{ingredient.name}</p>
                            </div>
                            <div>
                                <p>{`${ingredient.amount}${ingredient.unit}`}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
