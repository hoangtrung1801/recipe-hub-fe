import {
    ActionIcon,
    Badge,
    Modal,
    Popover,
    Select,
    TextInput,
    useMantineTheme,
} from "@mantine/core";
import * as _ from "lodash";
import { DotsThree, GitFork, Notepad, Pencil } from "phosphor-react";
import { useEffect } from "react";
import { useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "~/components/buttons/Button";
import ButtonStartCook from "~/components/buttons/ButtonStartCook";
import postForkRecipe from "~/libs/apis/postForkRecipe";
import useGetCurrentInstructions from "~/libs/apis/useGetCurrentInstructions";
import useGetRecipe from "~/libs/apis/useGetRecipe";
import clsxm from "~/libs/clsxm";
import constants from "~/libs/constants";
import useCurrentUserStore from "~/libs/stores/useCurrentUserStore";
import StarBlock from "../CreateRecipePage/StarBlock";
import StartCookingModal from "./CookingModal/StartCookingModal";
import IngredientsList from "./IngredientsList";
import deleteRecipe from "~/libs/apis/deleteRecipe";

export default function RecipeDetail() {
    const navigate = useNavigate();
    const { recipeId } = useParams();

    const { recipe } = useGetRecipe(recipeId);

    const { instructions } = useGetCurrentInstructions(recipe.id);
    const currentUser = useCurrentUserStore((state) => state.currentUser);
    const fetchUser = useCurrentUserStore((state) => state.fetchUser);

    const [isCookingOpened, setIsCookingOpened] = useState(false);
    const [stepNo, setStepNo] = useState(1);
    const [forkValidationOpen, setForkValidationOpen] = useState(false);

    function closeCookingModal() {
        setIsCookingOpened(false);
    }

    function openCookingModal() {
        setStepNo(1);
        setIsCookingOpened(true);
    }

    const isOwnedOfCurrentUser = useMemo(() => {
        if (!currentUser) return false;
        return currentUser.recipes.some((recipe) => recipe.id === recipeId);
    }, [currentUser]);

    const isForked = useMemo(() => {
        if (!currentUser) return false;
        return currentUser?.recipes.some(
            (recipe) => recipe.forkFrom?.id === recipeId || recipe.id === recipeId
        );
    }, [currentUser, recipeId]);

    const onFork = async (data) => {
        try {
            const response = await postForkRecipe(recipeId, data);

            if (response.status === constants.responseStatus.SUCCESS) {
                // alert("Fork successfull");
                const recipe = response.data;
                fetchUser();
                navigate(`/recipes/${recipe.id}`);
            } else {
                console.error(response.message);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const onDeleteRecipe = async () => {
        try {
            const response = await deleteRecipe(recipeId);

            if (response.status === constants.responseStatus.SUCCESS) {
                fetchUser();
                navigate("/");
            } else {
                console.error(response.message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    // useEffect(() => {
    //     setIsStarred(recipe.stars.some((userStarred) => userStarred.id === currentUser?.id));
    // }, [recipe, currentUser, setIsStarred]);

    return (
        <div className="space-y-8 pt-12">
            <div>
                <div className="space-y-2">
                    <h1 className="text-6xl font-medium">{recipe?.name}</h1>
                    {recipe.forkFrom && (
                        <p className="italic text-gray-600">
                            forked from{" "}
                            <Link
                                to={`/recipes/${recipe.forkFrom?.id}`}
                                className="underline decoration-gray-600 underline-offset-2 hover:text-gray-900"
                            >
                                {recipe.forkFrom?.name}
                            </Link>
                        </p>
                    )}
                </div>

                <div className="mt-8 flex items-center justify-between">
                    {/* categories */}
                    <div className="flex">
                        {recipe.catalogs.map((catalog) => (
                            <Link to={`/recipes?c=${catalog.name}`} key={catalog.id}>
                                <div className="select-none rounded-3xl border-[3px] border-primary-400 py-1 px-4 hover:bg-primary-400">
                                    <span>{_.capitalize(catalog.name)}</span>
                                </div>
                            </Link>
                        ))}

                        {/* {recipe?.catalogs &&
                            recipe.catalogs.map((catalog) => (
                                <li
                                    className="cursor-pointer items-center  rounded-2xl bg-transparent py-4"
                                    key={catalog.id}
                                >
                                    <div
                                        className={clsxm(
                                            "rounded-3xl border-y-2 border-x-2 border-primary-400 py-2 px-3 text-sm"
                                        )}
                                    >
                                        <span className="text-md font-medium">
                                            {catalog.name.charAt(0).toUpperCase() +
                                                catalog.name.slice(1)}
                                        </span>
                                    </div>
                                </li>
                            ))} */}
                    </div>
                    <div>
                        {isOwnedOfCurrentUser && (
                            <Popover position="bottom-end" withArrow>
                                <Popover.Target>
                                    <ActionIcon variant="transparent">
                                        <DotsThree className="text-2xl text-dark-0" weight="bold" />
                                    </ActionIcon>
                                </Popover.Target>
                                <Popover.Dropdown className="min-w-[7rem] p-0">
                                    <div className="h-full w-full py-1">
                                        <div className=" px-3 py-1 hover:bg-gray-100">
                                            <Link to="edit">
                                                <p>Edit</p>
                                            </Link>
                                        </div>
                                        <div
                                            className=" cursor-pointer px-3 py-1 hover:bg-gray-100"
                                            onClick={onDeleteRecipe}
                                        >
                                            <p>Delete</p>
                                        </div>
                                    </div>
                                </Popover.Dropdown>
                            </Popover>
                        )}
                    </div>
                </div>

                <div className="mt-16 space-y-2 md:hidden">
                    <h2 className="text-3xl font-bold">Description</h2>
                    <div className="text-gray-700">{recipe.description}</div>
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
                <div className="flex flex-wrap gap-2 py-6">
                    <StarBlock />

                    <Button
                        variant="light"
                        className="space-x-2"
                        disabled={isForked}
                        onClick={() => setForkValidationOpen(true)}
                    >
                        <GitFork className="text-lg" />
                        <span>Fork</span>
                        <Badge className="text-dark -mb-[2px] border-0 bg-primary-200 px-2 text-dark-0">
                            {recipe.numberOfFork}
                        </Badge>
                    </Button>
                    <Link to="changelog">
                        <Button variant="light" className="space-x-2">
                            <Notepad className="text-lg" />
                            <span>Changelog</span>
                        </Button>
                    </Link>
                    {isOwnedOfCurrentUser && (
                        <Link to="changelog/update">
                            <Button variant="light" className="space-x-2">
                                <Pencil className="text-lg" />
                                <span>Update</span>
                            </Button>
                        </Link>
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

            <div className="mt-16 md:hidden">
                <IngredientsList recipe={recipe} />
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
                <ButtonStartCook
                    onClick={openCookingModal}
                    className="w-full py-5 text-2xl font-medium"
                >
                    Start cooking
                </ButtonStartCook>

                <div>
                    {/* <Modal transition="slide-up" opened={isOpen} onClose={closeModal}></Modal> */}
                    <StartCookingModal
                        closeModal={closeCookingModal}
                        isOpen={isCookingOpened}
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
            <div>
                <ForkRecipeValidation
                    open={forkValidationOpen}
                    setOpen={setForkValidationOpen}
                    onFork={onFork}
                />
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

const ForkRecipeValidation = ({ open, setOpen, onFork }) => {
    const theme = useMantineTheme();
    const methods = useForm();
    const { register, handleSubmit, control } = methods;

    const onSubmit = (data) => {
        onFork(data);
    };

    const modeInput = {
        label: "Mode",
        placeholder: "Pick one",
        data: [
            { value: "PUBLIC", label: "PUBLIC" },
            { value: "PRIVATE", label: "PRIVATE" },
        ],
        field: "mode",
    };

    return (
        <Modal
            opened={open}
            onClose={() => setOpen(false)}
            title={<p className="text-2xl font-semibold">Create a new fork</p>}
            overlayColor={
                theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.colors.gray[2]
            }
            overlayOpacity={0.55}
            overlayBlur={3}
            size="400px"
            centered
        >
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-2">
                        <div>
                            <TextInput
                                title="Name"
                                placeholder="Your new recipe name"
                                label="Name"
                                {...register("name")}
                            />
                        </div>
                        <div>
                            <TextInput
                                title="Description"
                                placeholder="Your new recipe description"
                                label="Description"
                                {...register("description")}
                            />
                        </div>
                        <div>
                            <Controller
                                control={control}
                                name="mode"
                                render={({ field: { value, onChange } }) => (
                                    <Select
                                        label={modeInput.label}
                                        placeholder={modeInput.placeholder}
                                        data={modeInput.data}
                                        value={value}
                                        onChange={(e) => onChange(e)}
                                    />
                                )}
                            />
                        </div>
                        <div className="flex justify-end">
                            <Button type="submit" variant="dark" className="px-8">
                                Fork
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </Modal>
    );
};
