import { useState } from "react";
import clsxm from "~/libs/clsxm";
import CardComponent from "./CardComponent";

const categories = ["All", "Vegan", "Vegetarian"];

const recipes = [
    {
        text: "Tomato & pesto pasta",
        linkBg: "imgWrapper lg:h-[360px] md:h-[270px] h-[240px] bg-[url(https://images.prismic.io/stryve/3d40b6ec-7d41-4d48-bd3a-5bf78ca5b303_tomato-pesto-pasta.png?auto=compress%2Cformat&fm=webp&lossless=false&q=75&w=450%20450w)] bg-cover bg-no-repeat bg-center",
    },
    {
        text: "Nutty, apple & date porridge",
        linkBg: "imgWrapper lg:h-[360px] md:h-[270px] h-[240px] bg-[url(https://images.prismic.io/stryve/2be94b3a-3084-4aa0-817d-7af87596bd74_pulled-jackfruit-loaded-fries.png?auto=compress%2Cformat&fm=webp&lossless=false&q=75&w=450%20450w)] bg-cover bg-no-repeat bg-center",
    },
    {
        text: "Mushroom & kale macaroni",
        linkBg: "imgWrapper lg:h-[360px] md:h-[270px] h-[240px] bg-[url(https://images.prismic.io/stryve/fad9e994-32e9-4511-b620-5b3a6287009f_mushroom-spinach-pesto-toasted-sandwich.png?auto=compress%2Cformat&fm=webp&lossless=false&q=75&w=450%20450w)] bg-cover bg-no-repeat bg-center",
    },
    {
        text: "Griddled courgette & asparagus pasta",
        linkBg: "imgWrapper lg:h-[360px] md:h-[270px] h-[240px] bg-[url(https://images.prismic.io/stryve/7ac06668-07b3-4dbb-ac42-850aa27a7ec3_mushroom-stroganoff.png?auto=compress%2Cformat&fm=webp&lossless=false&q=75&w=450%20450w)] bg-cover bg-no-repeat bg-center",
    },
];

const RecipesPage = () => {
    const [selectedCategory] = useState(categories[0]);

    return (
        <div className="container auto-rows-auto">
            <div className="sticky top-[80px] z-50">
                <div>
                    <div className="nav">
                        <nav>
                            <div className="flex flex-col justify-center align-middle">
                                <div className="w-full border-b-[1px] border-black">
                                    <div className="bg-primary-200 py-2 ">
                                        <ul className="left-auto m-0 flex justify-center space-x-4 p-0 font-normal">
                                            {categories.map((category) => (
                                                <li
                                                    className="items-center rounded-2xl  bg-transparent py-4 "
                                                    key={category}
                                                >
                                                    <a
                                                        href="#"
                                                        className={clsxm(
                                                            "rounded-3xl border-y-2 border-x-2 border-primary-400 py-2 px-3 text-sm",
                                                            category ===
                                                                selectedCategory &&
                                                                "bg-primary-500"
                                                        )}
                                                    >
                                                        <span className="text-md font-medium">
                                                            {category}
                                                        </span>
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

            {/* recipes list */}
            <div className="relative">
                <section className="">
                    <div className="flex flex-col">
                        <div className="relative my-24 " id="textRecipes">
                            <h1 className="text-center text-7xl font-semibold lg:text-9xl ">
                                Recipes
                            </h1>
                        </div>
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8  ">
                            {recipes.map((recipe) => (
                                <div key={recipe.text}>
                                    <CardComponent card={recipe} />
                                </div>
                            ))}
                            {recipes.map((recipe) => (
                                <div key={recipe.text}>
                                    <CardComponent card={recipe} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default RecipesPage;
