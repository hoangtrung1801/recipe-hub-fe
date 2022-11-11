import React from "react";
import RecipeIngredients from "./IngredientsPanel";
import IngredientsOfInstruction from "./IngredientsOfInstrucPanel";

const RecipePanel = ({ isInstruction }) => {
    return isInstruction ? (
        <div>
            <div className="flex flex-col gap-5">
                <div className="h-[296px]">
                    <IngredientsOfInstruction />
                </div>
            </div>
        </div>
    ) : (
        <div>
            <div className="flex flex-col gap-5">
                <div className="h-[296px]">
                    <RecipeIngredients />
                </div>
            </div>
        </div>
    );
};

export default RecipePanel;
