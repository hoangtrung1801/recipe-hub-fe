import { Listbox, Transition } from "@headlessui/react";
import { Image } from "@mantine/core";
import React, { Fragment, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useGetUser from "~/libs/apis/useGetUser";
import Button from "../../buttons/Button";
import RecipeCard from "../../RecipeCard";

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

const ProfilePage = () => {
    const { username } = useParams();
    const [searchRecipe, setSearchRecipe] = useState("");

    const { user, isLoading: isLoadingUser } = useGetUser(username);

    if (isLoadingUser) return <div></div>;

    return (
        <div className="container mt-3 flex flex-col gap-3 md:flex-row">
            <div className="py-2 md:w-1/4">
                <div className="mt-5">
                    <div className="flex aspect-square w-full max-w-sm items-center justify-center overflow-hidden">
                        <img
                            src={user.avatarUrl || "/avatar-default.jpg"}
                            className="h-full w-full rounded-full object-cover"
                        />
                        {/* <Image
                            src={user.avatarUrl || "/avatar-default.jpg"}
                            withPlaceholder
                            width={240}
                            height={240}
                            fit="cover"
                            className="overflow-hidden rounded-full"
                        /> */}
                    </div>
                </div>
                <div className="mt-3 flex flex-col gap-3 px-2">
                    <p className="font-semibold text-dark-0">{user.username}</p>
                    <Link to={"/profile/update"}>
                        <Button className="w-full">Edit profile</Button>
                    </Link>
                    <span className="font-semibold text-dark-0">
                        Yours recipes: {user.recipes.length}
                    </span>
                </div>
            </div>
            <div className="p-2 py-2 md:w-3/4">
                <div className="mt-2 flex items-center gap-2">
                    <input
                        type="text"
                        className="block w-full rounded border border-gray-300 bg-primary-100 p-1.5 pl-3 text-sm text-gray-900 focus:outline-none md:w-3/5"
                        placeholder="Your recipe"
                        onChange={(e) => setSearchRecipe(e.target.value)}
                    />
                    {/* <RecipleFilter /> */}
                    <Link to="/recipes/create">
                        <Button variant={"dark"} className="max-h-[34px] w-full md:w-[63px]">
                            New
                        </Button>
                    </Link>
                </div>
                <div className="gird-cols-2 mt-6 grid gap-6 px-3 md:grid-cols-3">
                    {user.recipes.map((recipe) => (
                        <RecipeCard recipe={recipe} key={recipe.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export function RecipleCategory() {
    const [selected, setSelected] = useState(recipeList[0]);
    return (
        <div className="z-10">
            <Listbox value={selected} onChange={setSelected}>
                <div className="relative md:w-[145px]">
                    <Listbox.Button className="relative h-[38px] w-full cursor-default rounded bg-primary-300 p-1.5 text-left shadow focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
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

export default ProfilePage;
