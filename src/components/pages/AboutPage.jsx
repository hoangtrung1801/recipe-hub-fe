import Button from "../buttons/Button";
import { Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { useState } from "react";
import { Listbox } from "@headlessui/react";
import CardComponent from "./CardComponent";
import { Link } from "react-router-dom";

const recipeList = [
    {
        text: "vegetable",
    },
    {
        text: "nutrition",
    },
    {
        text: "meat",
    },
];

const myRecipe = [
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

const AboutPage = () => {
    const [searchRecipe, setSearchRecipe] = useState("");

    return (
        <div className="container mt-3 flex flex-col gap-3 md:flex-row">
            <div className="py-2 md:max-h-[564px] md:w-1/4">
                <div className="mt-5 overflow-hidden">
                    <img
                        className="lg:h-45 lg:w-45 mx-auto rounded-full"
                        src="https://avatars.githubusercontent.com/u/94124019?v=4"
                        alt="Randy Robertson"
                    />
                </div>
                <div className="mt-3 flex flex-col gap-3 px-2">
                    <p className="font-semibold text-dark-0">Username</p>
                    <Link to={"/profile/update"}>
                        <Button className="w-full">Edit profile</Button>
                    </Link>
                    <span className="font-semibold text-dark-0">
                        Yours recipes: {myRecipe.reduce((a) => (a += 1), 0)}
                    </span>
                </div>
            </div>
            <div className="p-2 py-2 md:w-3/4">
                <div className="mt-2 flex flex-col gap-2 md:flex-row md:items-center md:justify-evenly ">
                    <input
                        type="text"
                        className="block w-full rounded border border-gray-300 bg-primary-100 p-1.5 pl-3 text-sm text-gray-900 focus:outline-none md:w-3/5"
                        placeholder="Your recipe"
                        onChange={(e) => setSearchRecipe(e.target.value)}
                    />
                    <RecipleFilter />
                    <Button variant={"dark"} className="max-h-[34px] w-full md:w-[63px]">
                        New
                    </Button>
                </div>
                <div className="gird-cols-2 mt-6 grid gap-6 px-3 md:grid-cols-3">
                    {myRecipe
                        .filter((val) => {
                            if (searchRecipe === "") return val;
                            else if (val.text.toLowerCase().includes(searchRecipe.toLowerCase())) {
                                return val;
                            }
                        })
                        .map((item, index) => (
                            <CardComponent key={index} card={item} />
                        ))}
                </div>
            </div>
        </div>
    );
};

function RecipleFilter() {
    const [selected, setSelected] = useState(recipeList[0]);
    return (
        <div className="z-10">
            <Listbox value={selected} onChange={setSelected}>
                <div className="relative md:w-[145px]">
                    <Listbox.Button className="relative w-full cursor-default rounded bg-white p-1.5 text-left shadow focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                        <span className="block truncate text-center font-semibold uppercase">
                            {selected.text}
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"></span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full rounded bg-white py-1 text-base uppercase shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {recipeList.map((item, index) => (
                                <Listbox.Option
                                    key={index}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-2 font-semibold ${
                                            active ? "bg-primary-300 text-dark-0" : "text-gray-900"
                                        }`
                                    }
                                    value={item}
                                >
                                    {({ selected }) => (
                                        <React.Fragment>
                                            <span
                                                className={`block truncate ${
                                                    selected ? "font-medium" : "font-normal"
                                                }`}
                                            >
                                                {item.text}
                                            </span>
                                        </React.Fragment>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    );
}

export default AboutPage;
