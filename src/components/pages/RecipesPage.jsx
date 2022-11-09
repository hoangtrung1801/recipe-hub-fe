import { useState } from "react";
import useGetRecipes from "~/libs/apis/useGetRecipes";
import clsxm from "~/libs/clsxm";
import RecipeCard from "../RecipeCard";

const categories = ["All", "Vegan", "Vegetarian"];

const RecipesPage = () => {
    const { recipes } = useGetRecipes();

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
                                                            category === selectedCategory &&
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
                                <div key={recipe.id}>
                                    <RecipeCard recipe={recipe} />
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
