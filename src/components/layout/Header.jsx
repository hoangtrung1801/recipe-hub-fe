import { ForkKnife, Gear, MagnifyingGlass, User } from "phosphor-react";
import { Link } from "react-router-dom";
import UnderlineLink from "../links/UnderlineLink";

const router = [
    {
        path: "/recipes",
        label: "Recipes",
        icon: <ForkKnife weight="light" />,
    },
    {
        path: "/about",
        label: "About",
        icon: <User weight="light" />,
    },
];

const Header = () => {
    return (
        <div className="container h-[80px] border-b border-black">
            <div className="flex h-full items-center justify-between">
                <div className="flex-1">
                    <h1 className="text-4xl font-bold ">Stryve</h1>
                </div>
                <div className="flex space-x-8">
                    {router.map((route) => (
                        <UnderlineLink
                            to={route.path}
                            icon={route.icon}
                            key={route.label}
                        >
                            {route.label}
                        </UnderlineLink>
                    ))}
                </div>
                <div className="flex flex-1">
                    <div className="ml-auto flex space-x-4">
                        <div>
                            <Link className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-500 transition hover:bg-primary-500/30">
                                <Gear className="text-xl" weight="light" />
                            </Link>
                        </div>
                        <div>
                            <Link className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-500 transition hover:bg-primary-500/30">
                                <MagnifyingGlass
                                    className="text-xl"
                                    weight="light"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
