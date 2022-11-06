import { ForkKnife, MagnifyingGlass, User } from "phosphor-react";
import { Link } from "react-router-dom";
import UnderlineLink from "../links/UnderlineLink";

const router = [
    {
        path: "/recipes",
        label: "Recipes",
        icon: <ForkKnife weight="light" />,
    },
    {
        path: "/profile",
        label: "About",
        icon: <User weight="light" />,
    },
];

const Header = () => {
    return (
        <div className="container sticky top-0 z-50 h-[80px] border-b border-black bg-primary-200">
            <div className="flex h-full items-center justify-between">
                <div className="flex-1">
                    {/* <h1 className="text-4xl font-bold ">Stryve</h1> */}
                    <Link className="text-4xl font-extrabold" to="/">
                        RecipeHub
                    </Link>
                </div>
                <div className="flex space-x-8">
                    {router.map((route) => (
                        <UnderlineLink to={route.path} icon={route.icon} key={route.label}>
                            {route.label}
                        </UnderlineLink>
                    ))}
                </div>
                <div className="flex flex-1">
                    <HeeaderRight />
                </div>
            </div>
        </div>
    );
};

const HeeaderRight = () => {
    return (
        <div className="ml-auto flex space-x-4">
            <div>
                <Link
                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-500 transition hover:bg-primary-500/30"
                    to="/login"
                >
                    <User className="text-xl" weight="light" />
                </Link>
            </div>
            <div>
                <Link className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-500 transition hover:bg-primary-500/30">
                    <MagnifyingGlass className="text-xl" weight="light" />
                </Link>
            </div>
        </div>
    );
};

export default Header;
