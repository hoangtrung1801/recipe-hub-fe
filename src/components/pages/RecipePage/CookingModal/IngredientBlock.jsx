import { useState } from "react";
import constants from "~/libs/constants";
import * as _ from "lodash";

const IngredientBlock = ({ ingredient }) => {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive((isActive) => !isActive);
    };
    let blurDiv = isActive ? " blur-sm" : null;
    let lineText = isActive ? "opacity-30 line-through" : null;
    return (
        <li onClick={handleClick} className="list-none">
            <div>
                <div className="formIngredients grid grid-cols-[1fr_3fr_2fr] items-center ">
                    <div className="formIngredients_img h-12 w-12 rounded-full bg-primary-300 ">
                        <div className="formIngredients_imgMain mt-2 flex justify-center">
                            <img
                                className={`h-[32px] w-[32px] ${blurDiv}`}
                                src={constants.ingredientDefault}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="formIngredients_content ml-1 mr-2 text-left">
                        <div>
                            <span className={`text-[22px] font-normal ${lineText}`}>
                                {_.capitalize(ingredient.name)}
                            </span>
                        </div>
                    </div>
                    <div className="formIngredients_amount">
                        <span className={`text-[22px] font-normal ${lineText}`}>
                            {ingredient.amount}
                            {ingredient.unit}
                        </span>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default IngredientBlock;
