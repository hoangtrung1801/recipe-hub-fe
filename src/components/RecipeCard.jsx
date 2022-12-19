import { Overlay } from "@mantine/core";
import { Clock, Leaf } from "phosphor-react";
import { Link } from "react-router-dom";
import UnderlineLink from "./links/UnderlineLink";

const RecipeCard = ({ recipe }) => {
    return (
        <div className="">
            <div className="article group relative flex min-w-full cursor-pointer flex-col gap-3 overflow-hidden lg:mb-14">
                <div className="relative overflow-hidden">
                    <Overlay opacity={0} component={Link} to={`/recipes/${recipe.id}`} />
                    <div className="aspect-[3/4] duration-300 hover:scale-105 group-hover:scale-105">
                        <img src={recipe.imageUrl} className="h-full w-full object-cover" alt="" />
                    </div>
                </div>
                <div className="textWrapper text-left text-xl font-medium lg:text-3xl">
                    <UnderlineLink multiline={true} to={`/recipes/${recipe.id}`}>
                        {recipe.name[0].toUpperCase() + recipe.name.slice(1)}
                    </UnderlineLink>
                </div>
                <div className="contentWrapper flex gap-3 text-sm">
                    <div className="flex items-center justify-center">
                        <Clock className="mr-1 h-5 w-5" />
                        {/* <span>--m</span> */}
                        <span>{recipe?.cookTime?.total}m</span>
                        {/* <span>+</span> */}
                    </div>
                    <div className="flex items-center justify-center">
                        <Leaf className="mr-1 h-5 w-5" />
                        <span>-- plants</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;
