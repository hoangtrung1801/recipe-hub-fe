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
                <div className="flex flex-1 items-center rounded-xl bg-primary-300 px-4 py-2 text-lg">
                    {/* <div className="formIngredients_img h-12 w-12 rounded-full bg-primary-300 ">
                        <div className="formIngredients_imgMain mt-2 flex justify-center">
                            <img
                                className={`h-[32px] w-[32px] ${blurDiv}`}
                                src={constants.ingredientDefault}
                                alt=""
                            />
                        </div>
                    </div> */}
                    <div className="flex-1">
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
