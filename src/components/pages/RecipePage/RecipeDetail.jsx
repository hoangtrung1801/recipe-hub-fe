import { Badge } from "@mantine/core";
import * as _ from "lodash";
import { GitFork, Star } from "phosphor-react";
import { useEffect, useState } from "react";
import Button from "~/components/buttons/Button";
import ButtonStartCook from "~/components/buttons/ButtonStartCook";
import postStar from "~/libs/apis/postStar";
import postUnstar from "~/libs/apis/postUnstar";
import useCurrentUser from "~/libs/apis/useCurrentUser";
import useGetCurrentInstructions from "~/libs/apis/useGetCurrentInstructions";
import constants from "~/libs/constants";
import StartCookingModal from "./StartCookingModal";

export default function RecipeDetail({ recipe }) {
    const { instructions } = useGetCurrentInstructions(recipe.id);
    const { user } = useCurrentUser();

    const [isOpen, setIsOpen] = useState(false);
    const [stepNo, setStepNo] = useState(1);
    const [isStarred, setIsStarred] = useState();

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    // const isStarred = useMemo(
    //     () => recipe.stars.some((userStarred) => userStarred.id === user?.id),
    //     [user, recipe]
    // );

    const onClickStar = () => {
        if (isStarred) {
            // unstar
            setIsStarred(false);
            postUnstar(recipe.id).then((response) => {
                if (response.status !== constants.responseStatus.SUCCESS) {
                    setIsStarred(true);
                }
            });
        } else {
            // star
            setIsStarred(true);
            postStar(recipe.id).then((response) => {
                if (response.status !== constants.responseStatus.SUCCESS) {
                    setIsStarred(false);
                }
            });
        }
    };

    useEffect(() => {
        setIsStarred(recipe.stars.some((userStarred) => userStarred.id === user?.id));
    }, [recipe, user, setIsStarred]);

    return (
        <div className="space-y-8 pt-12">
            <div>
                <h1 className="text-6xl font-medium">Mushroom, spinach & pesto toasted sandwich</h1>

                {/* categories */}
                <div className="mt-8 flex">
                    {recipe.catalogs.map((catalog) => (
                        <div
                            key={catalog.id}
                            className="select-none rounded-3xl border-[3px] border-primary-400 py-1 px-4"
                        >
                            <span>{_.capitalize(catalog.name)}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex space-x-4">
                <p className="">
                    Total <span className="font-medium">{recipe.cookTime.total}m</span>
                </p>
                <p className="">
                    Prep <span className="font-medium">{recipe.cookTime.prep}m</span>
                </p>
                <p className="">
                    Chill <span className="font-medium">{recipe.cookTime.chill}m</span>
                </p>
                <p className="">
                    Cook <span className="font-medium">{recipe.cookTime.cook}m</span>
                </p>
            </div>
            <div className="border-y border-dark-0">
                <div className="flex space-x-4 py-6">
                    <Button variant="light" className="space-x-2" onClick={onClickStar}>
                        <Star className="text-lg" weight={isStarred ? "fill" : "regular"} />
                        <span>Star</span>
                        <Badge className="text-dark -mb-[2px] border-0 bg-primary-200 px-2 text-dark-0">
                            {recipe.stars.length}
                        </Badge>
                        {/* <div>
                            <span>0</span>
                        </div> */}
                    </Button>

                    <Button variant="light" className="space-x-2">
                        <GitFork className="text-lg" />
                        <span>Fork</span>
                        <Badge className="text-dark -mb-[2px] border-0 bg-primary-200 px-2 text-dark-0">
                            {/* {recipe.numberOfFork} */}0
                        </Badge>
                    </Button>
                </div>
            </div>
            <div>
                <h3 className="text-3xl font-bold">Nutrition</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                    {Object.keys(recipe.nutrition).map(
                        (nutrition) =>
                            nutrition !== "id" && (
                                <div
                                    key={nutrition}
                                    className="flex flex-col items-center rounded-full bg-primary-300 px-2 pt-2 pb-6 font-medium text-dark-1"
                                >
                                    <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-primary-100">
                                        <span>{recipe.nutrition[nutrition]}g</span>
                                    </div>
                                    <div className="mt-4 text-sm">
                                        <span>{_.capitalize(nutrition)}</span>
                                    </div>
                                </div>
                            )
                    )}
                </div>
            </div>
            <div>
                <h3 className="text-3xl font-bold">Instructions</h3>
                <div className="mt-8 space-y-6">
                    {instructions &&
                        instructions.map((instruction) => (
                            <div key={instruction.id} className="flex space-x-6">
                                <div className="">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-300">
                                        <span className="text-xl font-medium">
                                            {instruction.stepNo}
                                        </span>
                                    </div>
                                </div>
                                <div className="text-lg">
                                    <p>{instruction.description}</p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            <div>
                <ButtonStartCook onClick={openModal} className="w-full py-5 text-2xl font-medium">
                    Start cooking
                </ButtonStartCook>

                {/* slider */}
                <div>
                    <StartCookingModal
                        closeModal={closeModal}
                        isOpen={isOpen}
                        setStepNo={setStepNo}
                        stepNo={stepNo}
                    />
                </div>
            </div>
            <div>
                <hr />
            </div>
            <div>
                <RecipeAuthor user={recipe.user} />
            </div>
        </div>
    );
}

const RecipeAuthor = ({ user }) => {
    return (
        <div className="flex space-x-6">
            <div className="basis-24">
                <div className="aspect-square overflow-hidden rounded-full">
                    <img
                        src="https://randompicturegenerator.com/img/people-generator/gab5efb99b1f5b1ac18f8f302c793aaa28f5e881eb21d8ae4f7f64f55d3d800a5c77426e67b2e74c5e8d7c1787c13369f_640.jpg"
                        alt="avatar"
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
            <div className="mt-2 flex-1">
                <p className="font-semibold">{user.name}</p>
                <p className="mt-2">
                    If you enjoyed this recipe share it with your friends and family who might also
                    enjoy it
                </p>
            </div>
        </div>
    );
};
