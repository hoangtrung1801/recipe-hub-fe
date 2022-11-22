import { Badge } from "@mantine/core";
import * as _ from "lodash";
import { GitFork, Pencil, Star } from "phosphor-react";
import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "~/components/buttons/Button";
import ButtonStartCook from "~/components/buttons/ButtonStartCook";
import postStar from "~/libs/apis/postStar";
import postUnstar from "~/libs/apis/postUnstar";
import useGetCurrentInstructions from "~/libs/apis/useGetCurrentInstructions";
import constants from "~/libs/constants";
import useCurrentUserStore from "~/libs/stores/useCurrentUserStore";
import StartCookingModal from "./StartCookingModal";

export default function RecipeDetail({ recipe }) {
    const { recipeId } = useParams();

    const { instructions } = useGetCurrentInstructions(recipe.id);
    const currentUser = useCurrentUserStore((state) => state.currentUser);

    const [isOpen, setIsOpen] = useState(false);
    const [stepNo, setStepNo] = useState(1);
    const [isStarred, setIsStarred] = useState();

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    const isOwnedOfCurrentUser = useMemo(() => {
        if (!currentUser) return false;
        return currentUser.recipes.some((recipe) => recipe.id === recipeId);
    }, [currentUser]);

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
        setIsStarred(recipe.stars.some((userStarred) => userStarred.id === currentUser?.id));
    }, [recipe, currentUser, setIsStarred]);

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
                <div className="flex justify-between space-x-4 py-6">
                    <div className="space-x-2">
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
                    {isOwnedOfCurrentUser && (
                        <div className="space-x-2">
                            <Link to="changelog">
                                <Button variant="light" className="space-x-2">
                                    <Pencil className="text-lg" />
                                    <span>Changelog</span>
                                </Button>
                            </Link>

                            <Link to="update">
                                <Button variant="light" className="space-x-2">
                                    <Pencil className="text-lg" />
                                    <span>Update</span>
                                </Button>
                            </Link>
                        </div>
                    )}
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
                        src={user.avatarUrl || "/avatar-default.jpg"}
                        alt="avatar"
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
            <div className="mt-2 flex-1">
                <div>
                    <Link
                        to={`/${user.username}`}
                        className="underline-offset-2 transition hover:underline"
                    >
                        <p className="inline font-semibold">{user.name}</p>
                    </Link>
                </div>
                <p className="mt-2">
                    {user.description ||
                        "If you enjoyed this recipe share it with your friends and family who might also enjoy it"}
                </p>
            </div>
        </div>
    );
};
