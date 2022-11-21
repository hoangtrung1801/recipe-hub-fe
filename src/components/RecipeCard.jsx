import { Clock, Leaf } from "phosphor-react";
import UnderlineLink from "./links/UnderlineLink";

const RecipeCard = ({ recipe }) => {
    return (
        <div className="">
            <div className="article relative flex min-w-full cursor-pointer flex-col gap-3 overflow-hidden lg:mb-14">
                <div className="overflow-hidden">
                    <div className="aspect-[3/4] duration-300 hover:scale-105">
                        <img src={recipe.imageUrl} className="h-full w-full object-cover" alt="" />
                        {/* <AspectRatio ratio={3 / 4} sx={{ maxWidth: 300 }} mx="auto">
                            <Image
                                src={recipe.imageUrl}
                                placeholder
                                className="h-full"
                                height={"100%"}
                                // fit="fill"
                                // className="h-full w-full"
                            />
                        </AspectRatio> */}
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
                        <span>--m</span>
                        {/* <span>+</span> */}
                    </div>
                    <div className="flex items-center justify-center">
                        <Leaf className="mr-1 h-5 w-5" />
                        <span>6 plants</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;
