import React, { useState } from "react";
import Button from "~/components/buttons/Button";
import IngredientItem from "./IngredientItem";
import ListModal from "./ListModal";

// const ingredients = [];

const RecipeIngredients = () => {
    const [ingredients, setIngredients] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    return ingredients.length > 0 ? (
        <div>
            <div className="">
                <div className="flex w-full items-center justify-between">
                    <h3 className="text-xl font-bold">Ingredients</h3>
                </div>
                <div className="mt-2 max-h-[220px] space-y-3 overflow-y-auto px-3">
                    {ingredients.map((ingredient, index) => (
                        <IngredientItem key={index} {...ingredient} />
                    ))}
                </div>
                <Button
                    variant="dark"
                    className="mt-3"
                    onClick={() => setIsOpen(true)}
                >
                    ADD
                </Button>
            </div>
            <ListModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                setIngredients={setIngredients}
            />
        </div>
    ) : (
        <React.Fragment>
            <div className="flex h-full flex-col items-center justify-center gap-3">
                <h1 className="text-20 font-semibold">
                    There no Ingredients, Please add your ingredients
                </h1>
                <Button variant="dark" onClick={() => setIsOpen(true)}>
                    ADD
                </Button>
            </div>
            <ListModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                setIngredients={setIngredients}
            />
        </React.Fragment>
    );
};

export default RecipeIngredients;
