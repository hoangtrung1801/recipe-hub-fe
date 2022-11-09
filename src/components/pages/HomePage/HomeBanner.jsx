export default function HomeBanner() {
    return (
        <banner>
            <div className="home-page__banner relative">
                <img
                    className="inset-0 h-full w-full object-cover "
                    src="https://images.prismic.io/stryve/d697919f-3a89-46a5-a743-82350add036e_masthead.png?auto=compress,format&w=1280"
                    alt="image"
                />
                <div className="home-page__banner-text  absolute inset-0 flex h-full w-full flex-col items-center justify-center">
                    <span className="w-[55%] text-center text-7xl font-bold leading-[95px] text-black">
                        Tasty plant - based recipes & more{" "}
                    </span>{" "}
                    <span className="mt-8 w-[57%] text-center text-3xl font-light">
                        Discover some tasty plant - based recipes🥙 explore topics around physical🚵‍♂️
                        & mental health🧠 all whilst trying to look after our planet🌍{" "}
                    </span>{" "}
                </div>{" "}
            </div>{" "}
        </banner>
    );
}
