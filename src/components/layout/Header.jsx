import { Modal, Popover, TextInput } from "@mantine/core";
import { ForkKnife, MagnifyingGlass, User } from "phosphor-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useCurrentUserStore from "~/libs/stores/useCurrentUserStore";
import Button from "../buttons/Button";
import UnderlineLink from "../links/UnderlineLink";

const router = [
    {
        path: "/recipes",
        label: "Recipes",
        icon: <ForkKnife weight="light" />,
    },
    // {
    //     path: "/profile",
    //     label: "About",
    //     icon: <User weight="light" />,
    // },
];

const Header = () => {
    return (
        <div className="sticky top-0 z-50 h-[80px] border-b border-black bg-primary-200">
            <div className="flex h-full items-center justify-between">
                <div className="flex-1">
                    {/* <h1 className="text-4xl font-bold ">Stryve</h1> */}
                    <Link className="text-4xl font-extrabold" to="/">
                        RecipeHub
                    </Link>
                </div>
                <div className="flex space-x-8">
                    <HeaderMenu />
                </div>
                <div className="flex flex-1">
                    <HeeaderRight />
                </div>
            </div>
        </div>
    );
};

const HeaderMenu = () => {
    const [searchModal, setSearchModal] = useState(false);
    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();

    const onSearch = (data) => {
        const { value } = data;
        navigate(`/recipes?q=${value}`);
        setSearchModal(false);
    };

    return (
        <>
            {router.map((route) => (
                <UnderlineLink to={route.path} icon={route.icon} key={route.label}>
                    {route.label}
                </UnderlineLink>
            ))}
            <UnderlineLink
                icon={<MagnifyingGlass className="text-xl" weight="light" />}
                onClick={() => setSearchModal(true)}
            >
                Search
            </UnderlineLink>
            <Modal opened={searchModal} onClose={() => setSearchModal(false)} title="Search">
                <div>
                    <form onSubmit={handleSubmit(onSearch)}>
                        <TextInput rightSection={<MagnifyingGlass />} {...register("value")} />
                        <input type="submit" className="sr-only" />
                    </form>
                </div>
            </Modal>
        </>
    );
};

const HeeaderRight = () => {
    const currentUser = useCurrentUserStore((state) => state.currentUser);

    const logOut = useCurrentUserStore((state) => state.logOut);

    const onLogOut = () => {
        logOut();
    };

    return (
        <div className="ml-auto flex space-x-4">
            {!currentUser && (
                <div className="space-x-4">
                    <Link to={"login"} className="italic">
                        <span>Log in</span>
                    </Link>

                    <Link to={"signup"}>
                        <Button variant="light">Sign up</Button>
                    </Link>
                    {/* <Link
                        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-500 transition hover:bg-primary-500/30"
                        to="/login"
                    >
                        <User className="text-xl" weight="light" />
                    </Link> */}
                </div>
            )}
            {currentUser && (
                <div>
                    <Popover>
                        <Popover.Target>
                            <div className="flex cursor-pointer select-none items-center space-x-2">
                                {/* <span>{currentUser.name}</span> */}
                                <div className="aspect-square h-10 w-10 overflow-hidden rounded-full border-2 shadow-sm">
                                    <img
                                        src={currentUser.avatarUrl || "/avatar-default.jpg"}
                                        alt="Randy Robertson"
                                    />
                                </div>
                            </div>
                        </Popover.Target>

                        <Popover.Dropdown className="z-[101] rounded-lg px-0 shadow-xl">
                            <div className="w-40 text-sm">
                                <Link to={`/${currentUser.username}`}>
                                    <div className="cursor-pointer py-1 px-3 text-dark-1 hover:bg-primary-300">
                                        <p>Logged in as</p>
                                        <p className="font-medium">{currentUser.username}</p>
                                    </div>
                                </Link>
                                <hr className="m-0 my-2 border-dark-1" />
                                <Link to={`/${currentUser.username}`}>
                                    <div className="cursor-pointer py-1 px-3 text-dark-1 hover:bg-primary-300">
                                        <span>Your profile</span>
                                    </div>
                                </Link>
                                <Link to={`/${currentUser.username}`}>
                                    <div className="cursor-pointer py-1 px-3 text-dark-1 hover:bg-primary-300">
                                        <p>Your recipes</p>
                                    </div>
                                </Link>
                                <hr className="m-0 my-2 border-dark-1" />
                                <Link onClick={onLogOut}>
                                    <div className="cursor-pointer py-1 px-3 text-dark-1 hover:bg-primary-300">
                                        <p>Log out</p>
                                    </div>
                                </Link>
                            </div>
                        </Popover.Dropdown>
                    </Popover>
                </div>
            )}
        </div>
    );
};

export default Header;
