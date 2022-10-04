import UnderlineLink from "../links/UnderlineLink";

const RecipesPage = () => {
    return (
        <div className="auto-rows-auto ">
            <div className="headerRecipes sticky top-0  z-50">
                <div>
                    <div className="nav ">
                        <nav>
                            <div className="flex flex-col justify-center align-middle">
                                <div className="navFirst rn:w-[98%] mx-auto w-[98%] border-b-[1px] border-black md:w-[95%] lg:w-[100%%]">
                                    <div className="bg-primary-200 py-4 ">
                                        <ul className="left-auto m-0 flex justify-start p-0 font-normal lg:justify-center  ">
                                            <li className=" mx-3 items-center rounded-2xl  bg-transparent py-4 ">
                                                <a
                                                    href="#"
                                                    className="rounded-3xl border-y-2  border-x-2  border-primary-400 bg-primary-500 py-3  px-4 text-sm"
                                                >
                                                    <span className="text-lg font-normal ">
                                                        {" "}
                                                        All
                                                    </span>
                                                </a>
                                            </li>
                                            <li className=" mx-3 items-center rounded-2xl  bg-transparent py-4 ">
                                                <a
                                                    href="#"
                                                    className="rounded-3xl border-y-2  border-x-2  border-primary-400 bg-transparent py-3  px-4 text-sm"
                                                >
                                                    <span className="text-lg font-normal ">
                                                        Vegan
                                                    </span>
                                                </a>
                                            </li>
                                            <li className=" mx-3 items-center rounded-2xl  bg-transparent py-4 ">
                                                <a
                                                    href="#"
                                                    className="rounded-3xl border-y-2  border-x-2  border-primary-400 bg-transparent py-3  px-4 text-sm"
                                                >
                                                    <span className="text-lg font-normal ">
                                                        Vegetarian
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="allRecipesList relative">
                <section className="listRecipes">
                    <div className="containeList flex flex-col">
                        <div className="relative mt-24 mb-24 " id="textRecipes">
                            <h1 className="text-center text-7xl font-semibold lg:text-9xl ">
                                Recipes
                            </h1>
                        </div>
                        <div className=" gridList rn:w-[98%] mx-auto grid w-[98%] grid-cols-2 gap-4 md:w-[95%] md:grid-cols-3 md:gap-6 lg:w-[90%] lg:grid-cols-4 lg:gap-10  ">
                            <div className=" article relative  flex min-w-full cursor-pointer flex-col gap-8 overflow-hidden  pb-5 duration-500 hover:scale-105 lg:mb-14">
                                <div className="imgWrapper  h-[240px] bg-[url(https://images.prismic.io/stryve/338b523d-73cc-439a-acd0-d02eaff6ba7e_nutty-apple-date-porridge.png?auto=compress,format&fm=webp&lossless=false&q=75&w=375%20375w,%20https://images.prismic.io/stryve/338b523d-73cc-439a-acd0-d02eaff6ba7e_nutty-apple-date-porridge.png?auto=compress,format&fm=webp&lossless=false&q=75&w=450%20450w)] bg-cover bg-center bg-no-repeat md:h-[270px] lg:h-[360px]"></div>

                                <div className="textWrapper  text-left text-xl font-medium lg:text-3xl ">
                                    <UnderlineLink>
                                        {" "}
                                        Mushroom, spinach & pesto toasted
                                        sandwich
                                    </UnderlineLink>
                                </div>

                                <div className="contentWrapper flex gap-4">
                                    <div className="flex items-center justify-center">
                                        <img
                                            className="mr-1  h-5 w-5"
                                            src="https://img.icons8.com/windows/32/000000/clock--v1.png"
                                        />
                                        <span>10m</span>
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <img
                                            className="mr-1  h-5 w-5"
                                            src="https://img.icons8.com/fluency-systems-regular/48/000000/leaf.png"
                                        />
                                        <span>6 plants</span>
                                    </div>
                                </div>
                            </div>

                            <div className="article relative  flex min-w-full cursor-pointer flex-col gap-8 overflow-hidden  pb-5 duration-500 hover:scale-105 lg:mb-14">
                                <div className="imgWrapper  h-[240px] overflow-hidden bg-[url(https://images.prismic.io/stryve/2be94b3a-3084-4aa0-817d-7af87596bd74_pulled-jackfruit-loaded-fries.png?auto=compress,format&fm=webp&lossless=false&q=75&w=375%20375w,%20https://images.prismic.io/stryve/2be94b3a-3084-4aa0-817d-7af87596bd74_pulled-jackfruit-loaded-fries.png?auto=compress,format&fm=webp&lossless=false&q=75&w=450%20450w)] bg-cover bg-center bg-no-repeat duration-500 hover:scale-105 md:h-[270px] lg:h-[360px]"></div>
                                <div className="textWrapper  text-left text-xl font-medium lg:text-3xl">
                                    <UnderlineLink>
                                        {" "}
                                        Mushroom, spinach & pesto toasted
                                        sandwich
                                    </UnderlineLink>
                                </div>
                                <div className="contentWrapper flex gap-4">
                                    <div className="flex items-center justify-center">
                                        <img
                                            className="mr-1  h-5 w-5"
                                            src="https://img.icons8.com/windows/32/000000/clock--v1.png"
                                        />
                                        <span>10m</span>
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <img
                                            className="mr-1  h-5 w-5"
                                            src="https://img.icons8.com/fluency-systems-regular/48/000000/leaf.png"
                                        />
                                        <span>6 plants</span>
                                    </div>
                                </div>
                            </div>
                            <div className="article relative  flex min-w-full cursor-pointer flex-col gap-8 overflow-hidden  pb-5 duration-500 hover:scale-105 lg:mb-14">
                                <div className="imgWrapper  h-[240px] overflow-hidden bg-[url(https://images.prismic.io/stryve/3d40b6ec-7d41-4d48-bd3a-5bf78ca5b303_tomato-pesto-pasta.png?auto=compress,format&fm=webp&lossless=false&q=75&w=375%20375w,%20https://images.prismic.io/stryve/3d40b6ec-7d41-4d48-bd3a-5bf78ca5b303_tomato-pesto-pasta.png?auto=compress,format&fm=webp&lossless=false&q=75&w=450%20450w)] bg-cover bg-center bg-no-repeat duration-500 hover:scale-105 md:h-[270px] lg:h-[360px]"></div>
                                <div className="textWrapper  text-left text-xl font-medium lg:text-3xl">
                                    <UnderlineLink>
                                        {" "}
                                        Mushroom, spinach & pesto toasted
                                        sandwich
                                    </UnderlineLink>
                                </div>
                                <div className="contentWrapper flex gap-4">
                                    <div className="flex items-center justify-center">
                                        <img
                                            className="mr-1  h-5 w-5"
                                            src="https://img.icons8.com/windows/32/000000/clock--v1.png"
                                        />
                                        <span>10m</span>
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <img
                                            className="mr-1  h-5 w-5"
                                            src="https://img.icons8.com/fluency-systems-regular/48/000000/leaf.png"
                                        />
                                        <span>6 plants</span>
                                    </div>
                                </div>
                            </div>
                            <div className="article relative  flex min-w-full cursor-pointer flex-col gap-8 overflow-hidden  pb-5 duration-500 hover:scale-105 lg:mb-14">
                                <div className="imgWrappe roverflow-hidden h-[240px] bg-[url(https://images.prismic.io/stryve/fad9e994-32e9-4511-b620-5b3a6287009f_mushroom-spinach-pesto-toasted-sandwich.png?auto=compress,format&fm=webp&lossless=false&q=75&w=375%20375w,%20https://images.prismic.io/stryve/fad9e994-32e9-4511-b620-5b3a6287009f_mushroom-spinach-pesto-toasted-sandwich.png?auto=compress,format&fm=webp&lossless=false&q=75&w=450%20450w)] bg-cover bg-center bg-no-repeat duration-500 hover:scale-105 md:h-[270px] lg:h-[360px]"></div>
                                <div className="textWrapper  text-left text-xl font-medium lg:text-3xl">
                                    <UnderlineLink>
                                        {" "}
                                        Mushroom, spinach & pesto toasted
                                        sandwich
                                    </UnderlineLink>
                                </div>
                                <div className="contentWrapper flex gap-4">
                                    <div className="flex items-center justify-center">
                                        <img
                                            className="mr-1  h-5 w-5"
                                            src="https://img.icons8.com/windows/32/000000/clock--v1.png"
                                        />
                                        <span>10m</span>
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <img
                                            className="mr-1  h-5 w-5"
                                            src="https://img.icons8.com/fluency-systems-regular/48/000000/leaf.png"
                                        />
                                        <span>6 plants</span>
                                    </div>
                                </div>
                            </div>
                            <div className="article relative  flex min-w-full cursor-pointer flex-col gap-8 overflow-hidden  pb-5 duration-500 hover:scale-105 lg:mb-14">
                                <div className="imgWrappe roverflow-hidden h-[240px] bg-[url(https://images.prismic.io/stryve/7ac06668-07b3-4dbb-ac42-850aa27a7ec3_mushroom-stroganoff.png?auto=compress,format&fm=webp&lossless=false&q=75&w=375%20375w,%20https://images.prismic.io/stryve/7ac06668-07b3-4dbb-ac42-850aa27a7ec3_mushroom-stroganoff.png?auto=compress,format&fm=webp&lossless=false&q=75&w=450%20450w)] bg-cover bg-center bg-no-repeat duration-500 hover:scale-105 md:h-[270px] lg:h-[360px]"></div>
                                <div className="textWrapper  text-left text-xl font-medium lg:text-3xl">
                                    <UnderlineLink>
                                        {" "}
                                        Mushroom, spinach & pesto toasted
                                        sandwich
                                    </UnderlineLink>
                                </div>
                                <div className="contentWrapper flex gap-4">
                                    <div className="flex items-center justify-center">
                                        <img
                                            className="mr-1  h-5 w-5"
                                            src="https://img.icons8.com/windows/32/000000/clock--v1.png"
                                        />
                                        <span>10m</span>
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <img
                                            className="mr-1  h-5 w-5"
                                            src="https://img.icons8.com/fluency-systems-regular/48/000000/leaf.png"
                                        />
                                        <span>6 plants</span>
                                    </div>
                                </div>
                            </div>
                            <div className="article relative  flex min-w-full cursor-pointer flex-col gap-8 overflow-hidden  pb-5 duration-500 hover:scale-105 lg:mb-14">
                                <div className="imgWrappe roverflow-hidden h-[240px] bg-[url(https://images.prismic.io/stryve/6888281e-7d9d-4f83-abcb-6c1ac5eaf88c_chickpea-mayo-sandwhich.png?auto=compress,format&fm=webp&lossless=false&q=75&w=375%20375w,%20https://images.prismic.io/stryve/6888281e-7d9d-4f83-abcb-6c1ac5eaf88c_chickpea-mayo-sandwhich.png?auto=compress,format&fm=webp&lossless=false&q=75&w=450%20450w)] bg-cover bg-center bg-no-repeat duration-500 hover:scale-105 md:h-[270px] lg:h-[360px]"></div>
                                <div className="textWrapper  text-left text-xl font-medium lg:text-3xl">
                                    <UnderlineLink>
                                        {" "}
                                        Mushroom, spinach & pesto toasted
                                        sandwich
                                    </UnderlineLink>
                                </div>
                                <div className="contentWrapper flex gap-4">
                                    <div className="flex items-center justify-center">
                                        <img
                                            className="mr-1  h-5 w-5"
                                            src="https://img.icons8.com/windows/32/000000/clock--v1.png"
                                        />
                                        <span>10m</span>
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <img
                                            className="mr-1  h-5 w-5"
                                            src="https://img.icons8.com/fluency-systems-regular/48/000000/leaf.png"
                                        />
                                        <span>6 plants</span>
                                    </div>
                                </div>
                            </div>
                            <div className="article relative  flex min-w-full cursor-pointer flex-col gap-8 overflow-hidden  pb-5 duration-500 hover:scale-105 lg:mb-14">
                                <div className="imgWrappe roverflow-hidden h-[240px] bg-[url(https://images.prismic.io/stryve/079be1b2-fb5d-4e64-9a98-5f5f231e8c63_mushroom-kale-macaroni.png?auto=compress,format&fm=webp&lossless=false&q=75&w=375%20375w,%20https://images.prismic.io/stryve/079be1b2-fb5d-4e64-9a98-5f5f231e8c63_mushroom-kale-macaroni.png?auto=compress,format&fm=webp&lossless=false&q=75&w=450%20450w)] bg-cover bg-center bg-no-repeat duration-500 hover:scale-105 md:h-[270px] lg:h-[360px]"></div>
                                <div className="textWrapper  text-left text-xl font-medium lg:text-3xl">
                                    <UnderlineLink>
                                        {" "}
                                        Mushroom, spinach & pesto toasted
                                        sandwich
                                    </UnderlineLink>
                                </div>
                                <div className="contentWrapper flex gap-4">
                                    <div className="flex items-center justify-center">
                                        <img
                                            className="mr-1  h-5 w-5"
                                            src="https://img.icons8.com/windows/32/000000/clock--v1.png"
                                        />
                                        <span>10m</span>
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <img
                                            className="mr-1  h-5 w-5"
                                            src="https://img.icons8.com/fluency-systems-regular/48/000000/leaf.png"
                                        />
                                        <span>6 plants</span>
                                    </div>
                                </div>
                            </div>
                            <div className="article relative  flex min-w-full cursor-pointer flex-col gap-8 overflow-hidden  pb-5 duration-500 hover:scale-105 lg:mb-14">
                                <div className="imgWrappe roverflow-hidden h-[240px] bg-[url(https://images.prismic.io/stryve/93d08668-16df-4395-807f-923c43a3c220_griddled-courgette-asparagus-pasta.png?auto=compress,format&q=75&w=375%20375w,%20https://images.prismic.io/stryve/93d08668-16df-4395-807f-923c43a3c220_griddled-courgette-asparagus-pasta.png?auto=compress,format&q=75&w=450%20450w)] bg-cover bg-center bg-no-repeat duration-500 hover:scale-105 md:h-[270px] lg:h-[360px]"></div>
                                <div className="textWrapper  text-left text-xl font-medium lg:text-3xl">
                                    <UnderlineLink>
                                        {" "}
                                        Mushroom, spinach & pesto toasted
                                        sandwich
                                    </UnderlineLink>
                                </div>
                                <div className="contentWrapper flex gap-4">
                                    <div className="flex items-center justify-center">
                                        <img
                                            className="mr-1  h-5 w-5"
                                            src="https://img.icons8.com/windows/32/000000/clock--v1.png"
                                        />
                                        <span>10m</span>
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <img
                                            className="mr-1  h-5 w-5"
                                            src="https://img.icons8.com/fluency-systems-regular/48/000000/leaf.png"
                                        />
                                        <span>6 plants</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default RecipesPage;
