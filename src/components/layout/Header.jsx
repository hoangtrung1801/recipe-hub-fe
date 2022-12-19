import { ActionIcon, Menu, Modal, Popover, TextInput } from "@mantine/core";
import { ForkKnife, List, MagnifyingGlass, User } from "phosphor-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useCurrentUserStore from "~/libs/stores/useCurrentUserStore";
import Button from "../buttons/Button";
import UnderlineLink from "../links/UnderlineLink";
import SearchModal from "./SearchModal";

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

                <div className="hidden space-x-8 md:flex">
                    <HeaderMenu />
                </div>
                <div className="hidden flex-1 md:flex">
                    <HeaderRight />
                </div>

                {/* Mobile */}
                <div className="md:hidden">
                    <HeaderMobile />
                </div>
            </div>
        </div>
    );
};

const HeaderMenu = () => {
    const [searchModal, setSearchModal] = useState(false);

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
            <SearchModal searchModal={searchModal} setSearchModal={setSearchModal} />
        </>
    );
};

const HeaderRight = () => {
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

const HeaderMobile = () => {
    const [searchModal, setSearchModal] = useState(false);

    const currentUser = useCurrentUserStore((state) => state.currentUser);
    const logOut = useCurrentUserStore((state) => state.logOut);

    const onLogOut = () => {
        logOut();
    };

    return (
        <Menu width={240}>
            <Menu.Target>
                <ActionIcon className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-[3px] border-primary-400 transition-colors hover:bg-primary-400/30">
                    <List className="text-black" weight="bold" />
                </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Label>Pages</Menu.Label>
                {router.map((route) => (
                    // <UnderlineLink to={route.path} icon={route.icon} key={route.label}>
                    //     {route.label}
                    // </UnderlineLink>
                    <Link to={route.path} key={route.label}>
                        <Menu.Item icon={route.icon}>{route.label}</Menu.Item>
                    </Link>
                ))}
                <Menu.Item icon={<MagnifyingGlass />} onClick={() => setSearchModal(true)}>
                    Search
                </Menu.Item>

                <Menu.Divider />
                {currentUser && (
                    <>
                        <Menu.Label>Profile</Menu.Label>
                        <Link to={`/${currentUser?.username}`}>
                            <Menu.Item
                                icon={
                                    <div className="h-8 w-8 overflow-hidden rounded-full">
                                        <img
                                            src={currentUser?.avatarUrl || "/avatar-default.jpg"}
                                            alt="Randy Robertson"
                                        />
                                    </div>
                                }
                            >
                                <p className="font-medium">Logged in as</p>
                                <p>{currentUser?.username}</p>
                            </Menu.Item>
                        </Link>
                        <Link to={`/${currentUser?.username}`}>
                            <Menu.Item>Your profile</Menu.Item>
                        </Link>
                        <Link to={`/${currentUser.username}`}>
                            <Menu.Item>Your recipes</Menu.Item>
                        </Link>

                        <Menu.Divider />
                        <Menu.Item onClick={onLogOut}>Log out</Menu.Item>
                    </>
                )}
                {!currentUser && (
                    <>
                        <Link to="/login">
                            <Menu.Item>Login</Menu.Item>
                        </Link>
                        <Link to="/signup">
                            <Menu.Item>Sign up</Menu.Item>
                        </Link>
                    </>
                )}
            </Menu.Dropdown>

            <SearchModal searchModal={searchModal} setSearchModal={setSearchModal} />
        </Menu>
    );
};

export default Header;
