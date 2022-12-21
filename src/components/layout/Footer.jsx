import { ForkKnife, Person, User } from "phosphor-react";
import UnderlineLink from "../links/UnderlineLink";

const members = [
    {
        name: "Lê Kim Hoàng Trung",
        code: "21IT052",
        facebook: "https:/fb.com/trung181",
        github: "https://github.com/hoangtrung1801",
        instagram: "#",
    },
    {
        name: "Nguyễn Văn Thành Vinh",
        code: "21IT038",
        facebook: "https:/fb.com/trung181",
        github: "https://github.com/hoangtrung1801",
        instagram: "#",
    },
    {
        name: "Nguyễn Đăng Nhã",
        code: "21IT055",
        facebook: "https:/fb.com/trung181",
        github: "https://github.com/hoangtrung1801",
        instagram: "#",
    },
    {
        name: "Trần Nguyên Anh",
        code: "21IT003",
        facebook: "https:/fb.com/trung181",
        github: "https://github.com/hoangtrung1801",
        instagram: "#",
    },
];

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

const Footer = () => {
    return (
        <div className="container mt-24 h-[80px] border-t border-black">
            <div className="grid grid-cols-5 items-start space-y-8 py-12">
                <div className="col-span-5 flex h-full flex-col space-y-4 md:col-span-3">
                    <div className="">
                        <h1 className="text-4xl font-bold ">Recipe Hub</h1>
                    </div>
                    <div className="flex space-x-8">
                        {router.map((route) => (
                            <UnderlineLink key={route.label} icon={route.icon}>
                                {route.label}
                            </UnderlineLink>
                            // <Link
                            //     to={route.path}
                            //     className="flex items-center space-x-1"
                            // >
                            //     <span className="text-2xl">{route.icon}</span>
                            //     <span>{route.label}</span>
                            // </Link>
                        ))}
                    </div>
                </div>
                <div className="col-span-5 grid grid-cols-2 gap-6 md:col-span-2">
                    {members.map((member) => (
                        <div className="" key={member.code}>
                            <div className="max-w-8 min-h-24 space-y-1 bg-primary-300 p-8">
                                <Person weight="light" className="text-3xl" />
                                <p className="">{member.name}</p>
                                <p className="">{member.code}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col-span-5 flex justify-center">
                    <p className="italic">Copyright © 2022</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
