import { ArrowArcRight, Warning } from "phosphor-react";

const Page404 = () => {
    return (
        <div className="mt-16 flex flex-col items-center justify-center space-x-2">
            <Warning
                size={60}
                className="drop-shadow-glow animate-flicker text-dark-1"
            />
            <h1 className="mt-8 text-4xl text-dark-1 md:text-6xl">
                Page Not Found
            </h1>
            <a href="/">
                <ArrowArcRight className="mt-4 text-4xl">
                    Back to Home
                </ArrowArcRight>
            </a>
        </div>
    );
};

export default Page404;
