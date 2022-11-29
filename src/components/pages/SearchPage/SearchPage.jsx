/* eslint-disable react/no-unescaped-entities */
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Button from "~/components/buttons/Button";
import RecipeCard from "~/components/RecipeCard";
import useGetRecipes from "~/libs/apis/useGetRecipes";

const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const q = useMemo(() => searchParams.get("q"), [searchParams]);

    const { recipes } = useGetRecipes(q);

    return (
        <div className="pt-[30px]">
            <div className="mb-12 flex items-center justify-center">
                <h1 className="text-7xl font-bold tracking-wide">Recipes with {!!q && `"${q}"`}</h1>
            </div>
            <div className="flex flex-row gap-5">
                <div className="basis-1/4">
                    {/* <SearchInput /> */}
                    <FilterCard />
                </div>
                <div className="basis-3/4">
                    <div className="mx-auto flex flex-col gap-8">
                        <div className="-mr-16 pr-5">
                            <div className="-mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                                {recipes.map((recipe) => {
                                    return (
                                        <div key={recipe.id}>
                                            <RecipeCard recipe={recipe} />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const FilterCard = () => {
    return (
        <div className="w-auto overflow-y-auto">
            <div className="w-auto">
                <span className="text-lg font-semibold"> Ingredients </span>
                <ul>
                    <li className="active:text-blue text-sm font-normal visited:text-purple-500 hover:text-blue-500">
                        <a href="#"> Penne pasta </a>
                    </li>
                    <li className="active:text-blue text-sm font-normal visited:text-purple-500 hover:text-blue-500">
                        <a href="#"> Butter beans </a>
                    </li>
                    <li className="active:text-blue text-sm font-normal visited:text-purple-500 hover:text-blue-500">
                        <a href="#"> Cherry tomatoes </a>
                    </li>
                    <li className="active:text-blue text-sm font-normal visited:text-purple-500 hover:text-blue-500">
                        <a href="#"> Rocket </a>
                    </li>
                    <li className="active:text-blue text-sm font-normal visited:text-purple-500 hover:text-blue-500">
                        <a href="#"> Walnuts </a>
                    </li>
                    <li className="active:text-blue text-sm font-normal visited:text-purple-500 hover:text-blue-500">
                        <a href="#"> Spinach </a>
                    </li>
                    <li className="active:text-blue text-sm font-normal visited:text-purple-500 hover:text-blue-500">
                        <a href="#"> Basil </a>
                    </li>
                    <li className="active:text-blue text-sm font-normal visited:text-purple-500 hover:text-blue-500">
                        <a href="#"> Garlic cloves </a>
                    </li>
                    <li className="active:text-blue text-sm font-normal visited:text-purple-500 hover:text-blue-500">
                        <a href="#"> Nutritional yeast </a>
                    </li>
                    <li className="active:text-blue text-sm font-normal visited:text-purple-500 hover:text-blue-500">
                        <a href="#"> Lemon juice </a>
                    </li>
                    <li className="active:text-blue text-sm font-normal visited:text-purple-500 hover:text-blue-500">
                        <a href="#"> Black pepper </a>
                    </li>
                    <li className="active:text-blue text-sm font-normal visited:text-purple-500 hover:text-blue-500">
                        <a href="#"> Olive oil </a>
                    </li>
                </ul>
            </div>
            <div className=" ">
                <span className="text-lg font-semibold"> Nutrition </span>
                <ul>
                    <li className="active:text-blue text-sm font-normal visited:text-purple-500 hover:text-blue-500">
                        <a href="#"> Calories </a>
                    </li>
                    <li className="active:text-blue text-sm font-normal visited:text-purple-500 hover:text-blue-500">
                        <a href="#"> Fiber </a>
                    </li>
                    <li className="active:text-blue text-sm font-normal visited:text-purple-500 hover:text-blue-500">
                        <a href="#"> Protein </a>
                    </li>
                    <li className="active:text-blue text-sm font-normal visited:text-purple-500 hover:text-blue-500">
                        <a href="#"> Carbs </a>
                    </li>
                    <li className="active:text-blue text-sm font-normal visited:text-purple-500 hover:text-blue-500">
                        <a href="#"> Fats </a>
                    </li>
                    <li className="active:text-blue text-sm font-normal visited:text-purple-500 hover:text-blue-500">
                        <a href="#"> Sugar </a>
                    </li>
                </ul>
            </div>
            <div className="w-auto">
                <span className="text-lg font-semibold"> Total time </span>
                <ul>
                    <li className="active:text-blue text-sm font-normal visited:text-purple-500 hover:text-blue-500">
                        <a href="#"> 5 m </a>
                    </li>
                    <li className="active:text-blue text-sm font-normal visited:text-purple-500 hover:text-blue-500">
                        <a href="#"> 10 m </a>
                    </li>
                    <li className="active:text-blue text-sm font-normal visited:text-purple-500 hover:text-blue-500">
                        <a href="#"> 20 m </a>
                    </li>
                    <li className="active:text-blue text-sm font-normal visited:text-purple-500 hover:text-blue-500">
                        <a href="#"> 30 m </a>
                    </li>
                    <li className="active:text-blue text-sm font-normal visited:text-purple-500 hover:text-blue-500">
                        <a href="#"> 40 m </a>
                    </li>
                    <li className="active:text-blue text-sm font-normal visited:text-purple-500 hover:text-blue-500">
                        <a href="#"> 60 m </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
const SearchInput = () => {
    return (
        <div className="flex flex-row gap-1">
            <input
                type="text"
                placeholder="Type to search"
                className="mb-7 w-[90%] rounded-md border-[3px] border-solid border-primary-500 bg-white p-1 text-base text-black outline-none"
            />
            <Button variant={"dark"} className="">
                Search
            </Button>
        </div>
    );
};

// fetch date from API backend server

export default SearchPage;
