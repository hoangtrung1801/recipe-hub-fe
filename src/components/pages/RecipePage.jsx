import Counter from "../Counter";

const ingredients = [
    {
        name: "Mushrooms",
        amount: 200,
        unit: "g",
        // detail: 'sliced'
    },
    {
        name: "Mushrooms",
        amount: 200,
        unit: "g",
        // detail: 'sliced'
    },
    {
        name: "Mushrooms",
        amount: 200,
        unit: "g",
        // detail: 'sliced'
    },
    {
        name: "Mushrooms",
        amount: 200,
        unit: "g",
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

const RecipePage = () => {
    return (
        <div className="container mt-12">
            <div className="grid grid-cols-12 gap-x-12">
                <div className="col-span-5">
                    <RecipeIngredients />
                </div>
                <div className="col-span-7">
                    <RecipeDetail />
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
    return (
        <div className="space-y-8 pt-12">
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
            <div>
                <p>Nutrion per serving</p>
                <div className="mt-4 grid grid-cols-6 gap-x-2">
                    {nutrions.map((nutrion) => (
                        <div
                            key={nutrion.name}
                            className="flex flex-col items-center rounded-full bg-primary-300 px-2 pt-2 pb-5"
                        >
                            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-100">
                                <span>
                                    {nutrion.amount}
                                    {nutrion.unit}
                                </span>
                            </div>
                            <div className="mt-2 text-sm">
                                <span>{nutrion.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default RecipePage;
