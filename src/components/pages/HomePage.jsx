import CardComponent from "./CardComponent";

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

const HomePage = () => {
    return (
        <div>
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
                            Discover some tasty plant - based recipes🥙 explore topics around
                            physical🚵‍♂️ & mental health🧠 all whilst trying to look after our
                            planet🌍{" "}
                        </span>{" "}
                    </div>{" "}
                </div>{" "}
            </banner>{" "}
            <menu className="pt-[120px] pb-[80px]">
                <div className="home-page__menu grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
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
            </menu>{" "}
            <description>
                <div className="h-auto items-center bg-primary-300 py-20 ">
                    <div className="mx-auto w-[66%] text-center text-4xl leading-[50px]">
                        Discover some tasty{" "}
                        <span className="font-semibold"> plant - based recipes </span> and explore
                        topics around{" "}
                        <span className="font-semibold"> physical and mental health, </span> all
                        whilst trying to look after our planet.{" "}
                    </div>{" "}
                </div>{" "}
            </description>{" "}
            {/* <article className="pt-[120px]">
                            <div className="grid grid-cols-1 gap-9 md:grid-cols-3 lg:grid-cols-4">
                                <div className="home-page__menu-item flex flex-col gap-5 pb-8">
                                    <img
                                        // className="h-full w-full object-cover "
                                        src="https://images.prismic.io/stryve/96e70a08-232b-42ca-b450-aae500d04f61_thriva.png?auto=compress,format&fm=webp&lossless=false&q=75&w=768"
                                        alt="image"
                                    />
                                    <div>
                                        <a className="" href="#">
                                            <span className="text-center text-3xl font-semibold md:text-left ">
                                                {" "}
                                                Is a plant - based diet affecting my health
                                                ? I did a Thriva blood test to find out{" "}
                                            </span>{" "}
                                        </a>{" "}
                                    </div>{" "}
                                    <div className="text-base font-normal">
                                        <div>
                                            <span className="">5 mins read </span>
                                        </div>
                                    </div>
                                </div>{" "}
                                <div className="home-page__menu-item flex flex-col gap-5 pb-8">
                                    <img
                                        // className="h-full w-full object-cover "
                                        src="https://images.prismic.io/stryve/e89aed37-d1f1-4e41-a468-7ad102dc7f28_grubby.png?auto=compress,format&fm=webp&lossless=false&q=75&w=768"
                                        alt="image"
                                    />
                                    <div>
                                        <a className="" href="#">
                                            <span className="text-center text-3xl font-semibold md:text-left ">
                                                {" "}
                                                Grubby, the plant - based recipe kit that
                                                doesn’ t cost the earth{" "}
                                            </span>{" "}
                                        </a>{" "}
                                    </div>{" "}
                                    <div className="text-base font-normal">
                                        <div>
                                            <span className="">5 mins read </span>{" "}
                                        </div>
                                    </div>
                                </div>{" "}
                                <div className="home-page__menu-item flex flex-col gap-5 pb-8">
                                    <img
                                        // className="h-full w-full object-cover "
                                        src="https://images.prismic.io/stryve/8705e8d9-ff73-4fcf-93af-87d175e9dd7b_6-ways-better-sleep.png?auto=compress,format&fm=webp&lossless=false&q=75&w=768"
                                        alt="image"
                                    />
                                    <div>
                                        <a className="" href="#">
                                            <span className="text-center text-3xl font-semibold md:text-left ">
                                                {" "}
                                                6 ways to get a better night sleep{" "}
                                            </span>{" "}
                                        </a>{" "}
                                    </div>{" "}
                                    <div className="text-base font-normal">
                                        <div>
                                            <span className="">4 mins read </span>{" "}
                                        </div>
                                    </div>
                                </div>
                                <div className="home-page__menu-item flex flex-col gap-5 pb-8">
                                    {" "}
                                    <img
                                        // className="h-full w-full object-cover "
                                        src="https://images.prismic.io/stryve/ad43079f-15bd-450d-853e-47c6b653d694_building-a-consistent-walking-habit.png?auto=compress,format&fm=webp&lossless=false&q=75&w=768"
                                        alt="image"
                                    />
                                    <div>
                                        <a className="" href="#">
                                            <span className="text-center text-3xl font-semibold md:text-left ">
                                                {" "}
                                                I built a consistent walking habit, here’ s
                                                what helped{" "}
                                            </span>{" "}
                                        </a>{" "}
                                    </div>{" "}
                                    <div className="text-base font-normal">
                                        <div>
                                           <span className="">4 mins read </span>{" "}
                                        </div>
                                    </div>
                                </div>{" "}
                            </div>{" "}
                        </article> */}{" "}
        </div>
    );
};

export default HomePage;
