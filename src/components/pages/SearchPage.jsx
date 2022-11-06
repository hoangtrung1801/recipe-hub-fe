import React from "react";
import CardComponent from "./CardComponent";

const SearchPage = () => {
    return (
        <div className="pt-[30px]">
            <div className="flex flex-row gap-5">
                <div className="basis-1/4">
                    <SearchInput />
                    <FilterCard />
                </div>{" "}
                <div className="basis-3/4">
                    <div className="mx-auto flex flex-col gap-8">
                        <span className="text-3xl font-bold uppercase"> result: </span>{" "}
                        <LoadBoard />{" "}
                    </div>{" "}
                </div>{" "}
            </div>{" "}
        </div>
    );
};

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

const LoadBoard = () => {
    return (
        <div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {" "}
                {recipes.map((recipe) => (
                    <div key={recipe.text}>
                        <CardComponent card={recipe} />{" "}
                    </div>
                ))}{" "}
                {recipes.map((recipe) => (
                    <div key={recipe.text}>
                        <CardComponent card={recipe} />{" "}
                    </div>
                ))}{" "}
            </div>{" "}
        </div>
    );
};

const FilterCard = () => {
    return (
        <div className="h-[500px] w-auto overflow-y-auto">
            <div className="w-auto">
                <span className="text-lg font-semibold"> Ingredients </span>{" "}
                <ul>
                    <li className="active:text-blue text-sm font-normal visited:text-purple-500 hover:text-blue-500">
                        <a href="#"> Penne pasta </a>{" "}
                    </li>{" "}
                    <li className="active:text-blue text-sm font-normal visited:text-purple-500 hover:text-blue-500">
                        <a href="#"> Butter beans </a>{" "}
                    </li>{" "}
                    <li className="active:text-blue text-sm font-normal visited:text-purple-500 hover:text-blue-500">
                        {" "}
                        <a href="#"> Cherry tomatoes </a>{" "}
                    </li>{" "}
                    <li className="active:text-blue text-sm font-normal visited:text-purple-500 hover:text-blue-500">
                        {" "}
                        <a href="#"> Rocket </a>{" "}
                    </li>{" "}
                    <li className="active:text-blue text-sm font-normal visited:text-purple-500 hover:text-blue-500">
                        {" "}
                        <a href="#"> Walnuts </a>{" "}
                    </li>{" "}
                    <li className="active:text-blue text-sm font-normal visited:text-purple-500 hover:text-blue-500">
                        {" "}
                        <a href="#"> Spinach </a>{" "}
                    </li>{" "}
                    <li className="active:text-blue text-sm font-normal visited:text-purple-500 hover:text-blue-500">
                        {" "}
                        <a href="#"> Basil </a>{" "}
                    </li>{" "}
                    <li className="active:text-blue text-sm font-normal visited:text-purple-500 hover:text-blue-500">
                        {" "}
                        <a href="#"> Garlic cloves </a>{" "}
                    </li>{" "}
                    <li className="active:text-blue text-sm font-normal visited:text-purple-500 hover:text-blue-500">
                        {" "}
                        <a href="#"> Nutritional yeast </a>{" "}
                    </li>{" "}
                    <li className="active:text-blue text-sm font-normal visited:text-purple-500 hover:text-blue-500">
                        {" "}
                        <a href="#"> Lemon juice </a>{" "}
                    </li>{" "}
                    <li className="active:text-blue text-sm font-normal visited:text-purple-500 hover:text-blue-500">
                        {" "}
                        <a href="#"> Black pepper </a>{" "}
                    </li>{" "}
                    <li className="active:text-blue text-sm font-normal visited:text-purple-500 hover:text-blue-500">
                        {" "}
                        <a href="#"> Olive oil </a>{" "}
                    </li>{" "}
                </ul>{" "}
            </div>
            <div className=" ">
                <span className="text-lg font-semibold"> Nutrition </span>{" "}
                <ul>
                    <li className="active:text-blue text-sm font-normal visited:text-purple-500 hover:text-blue-500">
                        <a href="#"> Calories </a>{" "}
                    </li>{" "}
                    <li className="active:text-blue text-sm font-normal visited:text-purple-500 hover:text-blue-500">
                        <a href="#"> Fiber </a>{" "}
                    </li>{" "}
                    <li className="active:text-blue text-sm font-normal visited:text-purple-500 hover:text-blue-500">
                        {" "}
                        <a href="#"> Protein </a>{" "}
                    </li>{" "}
                    <li className="active:text-blue text-sm font-normal visited:text-purple-500 hover:text-blue-500">
                        {" "}
                        <a href="#"> Carbs </a>{" "}
                    </li>{" "}
                    <li className="active:text-blue text-sm font-normal visited:text-purple-500 hover:text-blue-500">
                        {" "}
                        <a href="#"> Fats </a>{" "}
                    </li>{" "}
                    <li className="active:text-blue text-sm font-normal visited:text-purple-500 hover:text-blue-500">
                        {" "}
                        <a href="#"> Sugar </a>{" "}
                    </li>{" "}
                </ul>{" "}
            </div>
            <div className="w-auto">
                <span className="text-lg font-semibold"> Total time </span>{" "}
                <ul>
                    <li className="active:text-blue text-sm font-normal visited:text-purple-500 hover:text-blue-500">
                        <a href="#"> 5 m </a>{" "}
                    </li>{" "}
                    <li className="active:text-blue text-sm font-normal visited:text-purple-500 hover:text-blue-500">
                        <a href="#"> 10 m </a>{" "}
                    </li>{" "}
                    <li className="active:text-blue text-sm font-normal visited:text-purple-500 hover:text-blue-500">
                        {" "}
                        <a href="#"> 20 m </a>{" "}
                    </li>{" "}
                    <li className="active:text-blue text-sm font-normal visited:text-purple-500 hover:text-blue-500">
                        {" "}
                        <a href="#"> 30 m </a>{" "}
                    </li>{" "}
                    <li className="active:text-blue text-sm font-normal visited:text-purple-500 hover:text-blue-500">
                        {" "}
                        <a href="#"> 40 m </a>{" "}
                    </li>{" "}
                    <li className="active:text-blue text-sm font-normal visited:text-purple-500 hover:text-blue-500">
                        {" "}
                        <a href="#"> 60 m </a>{" "}
                    </li>{" "}
                </ul>{" "}
            </div>{" "}
        </div>
    );
};

const SearchInput = () => {
    return (
        <div className="">
            {" "}
            <input
                type="text"
                placeholder="Search recipe by title"
                className="mb-7 w-[90%] rounded-xl border-[3px] border-solid border-primary-500 bg-white p-1 text-base text-black outline-none"
            />
        </div>
    );
};

export default SearchPage;
