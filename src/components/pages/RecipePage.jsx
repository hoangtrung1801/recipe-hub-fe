import { GitFork, Star } from "phosphor-react";
import Button from "../buttons/Button";
import Counter from "../Counter";
import ButtonStartCook from "../buttons/ButtonStartCook";
import { useState } from "react";
import Footer from "../layout/Footer";
import TestSlider from "./TestSlider";

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

const categories = ["Vegan"];

const nutrions = [
    {
        name: "Calories",
        amount: 462,
        unit: "",
    },
    {
        name: "Fiber",
        amount: 12.4,
        unit: "g",
    },
    {
        name: "Protein",
        amount: 21.2,
        unit: "g",
    },
    {
        name: "Carbs",
        amount: 40.4,
        unit: "g",
    },
    {
        name: "Fats",
        amount: 22.6,
        unit: "g",
    },
    {
        name: "Sugar",
        amount: 6.6,
        unit: "g",
    },
];

const instructions = [
    {
        id: 1,
        instruction:
            "Heat a frying pan on high heat, once hot add the olive oil along with mushroom and garlic – cook for ~4 mins",
    },
    {
        id: 2,
        instruction: "Add the spinach to the frying pan and cook until wilted",
    },
    {
        id: 3,
        instruction:
            " Add the walnuts, spinach, basil, garlic, nutritional yeast, lemon juice, salt, pepper and olive oil to a pestle and mortar – mash up the ingredients until it forms a smooth paste",
    },
    {
        id: 4,
        instruction:
            "Transfer the mushroom mixture to a bowl, spread pesto on one side of the bread and place in the frying pan, pesto side up – toast for ~3 mins",
    },
    {
        id: 5,
        instruction:
            "Take the bread out of the frying pan, place the mushroom mixture on each slice of bread and layer sliced tomato on top",
    },
    {
        id: 6,
        instruction:
            "Place back into the frying pan on the un-toasted side and toast for ~3 mins – remove and cut in half",
    },
];

const RecipePage = () => {
    return (
        <div>
            <div className="container mt-12 ">
                <div className="grid grid-cols-12 gap-x-12">
                    <div className="col-span-5">
                        <RecipeIngredients />
                    </div>
                    <div className="col-span-7">
                        <RecipeDetail />
                    </div>
                </div>
            </div>
        </div>
    );
};

const RecipeIngredients = () => {
    return (
        <div>
            <div className="relative w-full pb-[140%]">
                <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://images.prismic.io/stryve/fad9e994-32e9-4511-b620-5b3a6287009f_mushroom-spinach-pesto-toasted-sandwich.png?auto=compress,format&fm=webp&lossless=false&q=75&w=768"
                    alt="image"
                />
            </div>

            <div className="mt-16">
                <div className="flex w-full items-center justify-between">
                    <h3 className="text-3xl font-bold">Ingredients</h3>
                    <Counter />
                </div>
                <div className="mt-8 space-y-3">
                    {ingredients.map((ingredient) => (
                        <div key={ingredient.name} className="flex space-x-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-300">
                                <div className="w-8">
                                    <div className="relative w-full pb-[100%]">
                                        <img
                                            className="absolute"
                                            // className="absolute inset-0 h-full w-full rounded-full bg-primary-300 object-cover"
                                            src="https://images.prismic.io/stryve/524c02ef-dac8-4f80-9525-db802bd59463_mushrooms-removebg-preview.png?auto=compress,format&fm=webp&lossless=false&q=75&w=64"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-1 items-center text-lg">
                                <div className="flex-1">
                                    <p className="">{ingredient.name}</p>
                                </div>
                                <div>
                                    <p>{`${ingredient.amount}${ingredient.unit}`}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const RecipeDetail = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="space-y-8 pt-12">
            {show ? <TestSlider /> : null};
            <div>
                <h1 className="text-6xl font-medium">
                    Mushroom, spinach & pesto toasted sandwich
                </h1>

                {/* categories */}
                <div className="mt-8 flex">
                    {categories.map((category) => (
                        <div
                            key={category}
                            className="rounded-3xl border-[3px] border-primary-400 py-1 px-4"
                        >
                            <span>{category}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex space-x-4">
                <p className="">
                    Total <span className="font-medium">25m</span>
                </p>
                <p className="">
                    Prep <span className="font-medium">25m</span>
                </p>
                <p className="">
                    Chill <span className="font-medium">25m</span>
                </p>
                <p className="">
                    Cook <span className="font-medium">25m</span>
                </p>
            </div>
            <div className="border-y border-dark-0">
                <div className="flex space-x-4 py-6">
                    <Button variant="light" className="space-x-2">
                        <Star className="text-lg" />
                        <span>Star</span>
                    </Button>
                    <Button variant="light" className="space-x-2">
                        <GitFork className="text-lg" />
                        <span>Fork</span>
                    </Button>
                </div>
            </div>
            <div>
                <p>Nutrion per serving</p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {nutrions.map((nutrion) => (
                        <div
                            key={nutrion.name}
                            className="flex flex-col items-center rounded-full bg-primary-300 px-2 pt-2 pb-6 text-dark-1"
                        >
                            <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-primary-100">
                                <span>
                                    {nutrion.amount}
                                    {nutrion.unit}
                                </span>
                            </div>
                            <div className="mt-4 text-sm">
                                <span>{nutrion.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h3 className="text-3xl font-bold">Instructions</h3>
                <div className="mt-8 space-y-6">
                    {instructions.map((instruction) => (
                        <div key={instructions.id} className="flex space-x-6">
                            <div className="">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-300">
                                    <span className="text-xl font-medium">
                                        {instruction.id}
                                    </span>
                                </div>
                            </div>
                            <div className="text-lg">
                                <p>{instruction.instruction}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <ButtonStartCook
                    onClick={() => setShow(true)}
                    className="w-full py-5 text-2xl font-medium"
                >
                    Start cooking
                </ButtonStartCook>
                <Footer />
                {/* {visible && alert()} */}
            </div>
            <div>
                <hr />
            </div>
            <div>
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
                        <p className="font-semibold">hoangtrung1801</p>
                        <p className="mt-2">
                            If you enjoyed this recipe share it with your
                            friends and family who might also enjoy it
                        </p>
                        {/* <div className="mt-4 flex space-x-3">
                            <button className="circle-outline text-xl">
                                <Star />
                            </button>
                            <button className="circle-outline text-xl">
                                <GitFork />
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipePage;
