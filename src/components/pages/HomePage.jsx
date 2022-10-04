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
                            {" "}
                            Tasty plant - based recipes & more{" "}
                        </span>{" "}
                        <span className="mt-8 w-[57%] text-center text-3xl font-light">
                            {" "}
                            Discover some tasty plant - based recipes🥙 explore
                            topics around physical🚵‍♂️ & mental health🧠 all
                            whilst trying to look after our planet🌍{" "}
                        </span>{" "}
                    </div>{" "}
                </div>{" "}
            </banner>
            <menu className="pt-[120px] pb-[80px]">
                <div className="home-page__menu grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
                    <div className="home-page__menu-item flex flex-col gap-5 pb-8">
                        <img
                            // className="h-full w-full object-cover "
                            src="https://images.prismic.io/stryve/338b523d-73cc-439a-acd0-d02eaff6ba7e_nutty-apple-date-porridge.png?auto=compress,format&fm=webp&lossless=false&q=75&w=375%20375w,%20https://images.prismic.io/stryve/338b523d-73cc-439a-acd0-d02eaff6ba7e_nutty-apple-date-porridge.png?auto=compress,format&fm=webp&lossless=false&q=75&w=450%20450w"
                            alt="image"
                        />
                        <div>
                            <a className="" href="#">
                                <span className="text-center text-3xl font-semibold md:text-left ">
                                    {" "}
                                    Nutty, apple date porridge{" "}
                                </span>{" "}
                            </a>{" "}
                        </div>{" "}
                        <div className="flex gap-3 text-base font-normal">
                            <div>
                                {" "}
                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="1em" height="1em" className="RecipeCard_metaIcon__RH7hh">
                                        <path d="M8 13.875a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"></path><path d="M8 8.375 10.475 5.9M6.5.875h3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"></path>
                                        </svg> */}{" "}
                                <span className="">10 m </span>{" "}
                            </div>{" "}
                            <div>
                                {" "}
                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="1em" height="1em" className="RecipeCard_metaIcon__RH7hh">
                                            <path d="M10 6L2.5 13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"></path><path d="M4.00006 12C1.00006 7.00001 5.00006 2 13.5001 2.5C14.0001 11 9.00005 15 4.00006 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"></path>
                                            </svg> */}{" "}
                                <span className="">6 plants </span>{" "}
                            </div>{" "}
                        </div>
                    </div>{" "}
                    <div className="home-page__menu-item flex flex-col gap-5 pb-8">
                        <img
                            // className="h-full w-full object-cover "
                            src="https://images.prismic.io/stryve/3d40b6ec-7d41-4d48-bd3a-5bf78ca5b303_tomato-pesto-pasta.png?auto=compress,format&fm=webp&lossless=false&q=75&w=450"
                            alt="image"
                        />
                        <div>
                            <a className="" href="#">
                                <span className="text-center text-3xl font-semibold md:text-left ">
                                    {" "}
                                    Tomato & pesto pasta{" "}
                                </span>{" "}
                            </a>{" "}
                        </div>{" "}
                        <div className="flex gap-3 text-base font-normal">
                            <div>
                                {" "}
                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="1em" height="1em" className="RecipeCard_metaIcon__RH7hh">
                                        <path d="M8 13.875a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"></path><path d="M8 8.375 10.475 5.9M6.5.875h3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"></path>
                                        </svg> */}{" "}
                                <span className="">10 m </span>{" "}
                            </div>{" "}
                            <div>
                                {" "}
                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="1em" height="1em" className="RecipeCard_metaIcon__RH7hh">
                                            <path d="M10 6L2.5 13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"></path><path d="M4.00006 12C1.00006 7.00001 5.00006 2 13.5001 2.5C14.0001 11 9.00005 15 4.00006 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"></path>
                                            </svg> */}{" "}
                                <span className="">6 plants </span>{" "}
                            </div>{" "}
                        </div>
                    </div>{" "}
                    <div className="home-page__menu-item flex flex-col gap-5 pb-8">
                        <img
                            // className="h-full w-full object-cover "
                            src="https://images.prismic.io/stryve/fad9e994-32e9-4511-b620-5b3a6287009f_mushroom-spinach-pesto-toasted-sandwich.png?auto=compress,format&fm=webp&lossless=false&q=75&w=450"
                            alt="image"
                        />
                        <div>
                            <a className="" href="#">
                                <span className="text-center text-3xl font-semibold md:text-left ">
                                    {" "}
                                    Mushroom, spinach & pesto toasted sandwich{" "}
                                </span>{" "}
                            </a>{" "}
                        </div>{" "}
                        <div className="flex gap-3 text-base font-normal">
                            <div>
                                {" "}
                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="1em" height="1em" className="RecipeCard_metaIcon__RH7hh">
                                        <path d="M8 13.875a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"></path><path d="M8 8.375 10.475 5.9M6.5.875h3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"></path>
                                        </svg> */}{" "}
                                <span className="">10 m </span>{" "}
                            </div>{" "}
                            <div>
                                {" "}
                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="1em" height="1em" className="RecipeCard_metaIcon__RH7hh">
                                            <path d="M10 6L2.5 13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"></path><path d="M4.00006 12C1.00006 7.00001 5.00006 2 13.5001 2.5C14.0001 11 9.00005 15 4.00006 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"></path>
                                            </svg> */}{" "}
                                <span className="">6 plants </span>{" "}
                            </div>{" "}
                        </div>
                    </div>{" "}
                    <div className="home-page__menu-item flex flex-col gap-5 pb-8">
                        <img
                            // className="h-full w-full object-cover "
                            src="https://images.prismic.io/stryve/7ac06668-07b3-4dbb-ac42-850aa27a7ec3_mushroom-stroganoff.png?auto=compress,format&fm=webp&lossless=false&q=75&w=450"
                            alt="image"
                        />
                        <div>
                            <a className="" href="#">
                                <span className="text-center text-3xl font-semibold md:text-left ">
                                    {" "}
                                    Mushroom stroganoff{" "}
                                </span>{" "}
                            </a>{" "}
                        </div>{" "}
                        <div className="flex gap-3 text-base font-normal">
                            <div>
                                {" "}
                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="1em" height="1em" className="RecipeCard_metaIcon__RH7hh">
                                        <path d="M8 13.875a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"></path><path d="M8 8.375 10.475 5.9M6.5.875h3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"></path>
                                        </svg> */}{" "}
                                <span className="">10 m </span>{" "}
                            </div>{" "}
                            <div>
                                {" "}
                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="1em" height="1em" className="RecipeCard_metaIcon__RH7hh">
                                            <path d="M10 6L2.5 13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"></path><path d="M4.00006 12C1.00006 7.00001 5.00006 2 13.5001 2.5C14.0001 11 9.00005 15 4.00006 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"></path>
                                            </svg> */}{" "}
                                <span className="">6 plants </span>{" "}
                            </div>{" "}
                        </div>
                    </div>{" "}
                    <div className="home-page__menu-item flex flex-col gap-5 pb-8">
                        <img
                            // className="h-full w-full object-cover "
                            src="https://images.prismic.io/stryve/6888281e-7d9d-4f83-abcb-6c1ac5eaf88c_chickpea-mayo-sandwhich.png?auto=compress,format&fm=webp&lossless=false&q=75&w=450"
                            alt="image"
                        />
                        <div>
                            <a className="" href="#">
                                <span className="text-center text-3xl font-semibold md:text-left ">
                                    {" "}
                                    Chickpea mayo sandwich{" "}
                                </span>{" "}
                            </a>{" "}
                        </div>{" "}
                        <div className="flex gap-3 text-base font-normal">
                            <div>
                                {" "}
                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="1em" height="1em" className="RecipeCard_metaIcon__RH7hh">
                                        <path d="M8 13.875a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"></path><path d="M8 8.375 10.475 5.9M6.5.875h3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"></path>
                                        </svg> */}{" "}
                                <span className="">10 m </span>{" "}
                            </div>{" "}
                            <div>
                                {" "}
                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="1em" height="1em" className="RecipeCard_metaIcon__RH7hh">
                                            <path d="M10 6L2.5 13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"></path><path d="M4.00006 12C1.00006 7.00001 5.00006 2 13.5001 2.5C14.0001 11 9.00005 15 4.00006 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"></path>
                                            </svg> */}{" "}
                                <span className="">6 plants </span>{" "}
                            </div>{" "}
                        </div>
                    </div>{" "}
                    <div className="home-page__menu-item flex flex-col gap-5 pb-8">
                        <img
                            // className="h-full w-full object-cover "
                            src="https://images.prismic.io/stryve/079be1b2-fb5d-4e64-9a98-5f5f231e8c63_mushroom-kale-macaroni.png?auto=compress,format&fm=webp&lossless=false&q=75&w=450"
                            alt="image"
                        />
                        <div>
                            <a className="" href="#">
                                <span className="text-center text-3xl font-semibold md:text-left ">
                                    {" "}
                                    Mushroom & kale macaroni{" "}
                                </span>{" "}
                            </a>{" "}
                        </div>{" "}
                        <div className="flex gap-3 text-base font-normal">
                            <div>
                                {" "}
                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="1em" height="1em" className="RecipeCard_metaIcon__RH7hh">
                                        <path d="M8 13.875a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"></path><path d="M8 8.375 10.475 5.9M6.5.875h3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"></path>
                                        </svg> */}{" "}
                                <span className="">10 m </span>{" "}
                            </div>{" "}
                            <div>
                                {" "}
                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="1em" height="1em" className="RecipeCard_metaIcon__RH7hh">
                                            <path d="M10 6L2.5 13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"></path><path d="M4.00006 12C1.00006 7.00001 5.00006 2 13.5001 2.5C14.0001 11 9.00005 15 4.00006 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"></path>
                                            </svg> */}{" "}
                                <span className="">6 plants </span>{" "}
                            </div>{" "}
                        </div>
                    </div>{" "}
                    <div className="home-page__menu-item flex flex-col gap-5 pb-8">
                        <img
                            // className="h-full w-full object-cover "
                            src="https://images.prismic.io/stryve/ec561102-09de-4fab-b60f-338101ca20c5_squash-kale-risotto.png?auto=compress,format&fm=webp&lossless=false&q=75&w=450"
                            alt="image"
                        />
                        <div>
                            <a className="" href="#">
                                <span className="text-center text-3xl font-semibold md:text-left ">
                                    {" "}
                                    Squash & kale risotto{" "}
                                </span>{" "}
                            </a>{" "}
                        </div>{" "}
                        <div className="flex gap-3 text-base font-normal">
                            <div>
                                {" "}
                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="1em" height="1em" className="RecipeCard_metaIcon__RH7hh">
                                        <path d="M8 13.875a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"></path><path d="M8 8.375 10.475 5.9M6.5.875h3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"></path>
                                        </svg> */}{" "}
                                <span className="">10 m </span>{" "}
                            </div>{" "}
                            <div>
                                {" "}
                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="1em" height="1em" className="RecipeCard_metaIcon__RH7hh">
                                            <path d="M10 6L2.5 13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"></path><path d="M4.00006 12C1.00006 7.00001 5.00006 2 13.5001 2.5C14.0001 11 9.00005 15 4.00006 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"></path>
                                            </svg> */}{" "}
                                <span className="">6 plants </span>{" "}
                            </div>{" "}
                        </div>
                    </div>{" "}
                    <div className="home-page__menu-item flex flex-col gap-5 pb-8">
                        <img
                            // className="h-full w-full object-cover "
                            src="https://images.prismic.io/stryve/7ac06668-07b3-4dbb-ac42-850aa27a7ec3_mushroom-stroganoff.png?auto=compress,format&fm=webp&lossless=false&q=75&w=450"
                            alt="image"
                        />
                        <div>
                            <a className="" href="#">
                                <span className="text-center text-3xl font-semibold md:text-left ">
                                    {" "}
                                    Pulled jackfruit loaded fries{" "}
                                </span>{" "}
                            </a>{" "}
                        </div>{" "}
                        <div className="flex gap-3 text-base font-normal">
                            <div>
                                {" "}
                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="1em" height="1em" className="RecipeCard_metaIcon__RH7hh">
                                        <path d="M8 13.875a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"></path><path d="M8 8.375 10.475 5.9M6.5.875h3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"></path>
                                        </svg> */}{" "}
                                <span className="">10 m </span>{" "}
                            </div>{" "}
                            <div>
                                {" "}
                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="1em" height="1em" className="RecipeCard_metaIcon__RH7hh">
                                            <path d="M10 6L2.5 13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"></path><path d="M4.00006 12C1.00006 7.00001 5.00006 2 13.5001 2.5C14.0001 11 9.00005 15 4.00006 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"></path>
                                            </svg> */}{" "}
                                <span className="">6 plants </span>{" "}
                            </div>{" "}
                        </div>
                    </div>{" "}
                </div>{" "}
            </menu>
            <description>
                <div className="h-auto items-center bg-primary-300 py-20 ">
                    <div className="mx-auto w-[66%] text-center text-4xl leading-[50px]">
                        Discover some tasty{" "}
                        <span className="font-semibold">
                            {" "}
                            plant - based recipes{" "}
                        </span>{" "}
                        and explore topics around{" "}
                        <span className="font-semibold">
                            {" "}
                            physical and mental health,{" "}
                        </span>{" "}
                        all whilst trying to look after our planet.
                    </div>
                </div>{" "}
            </description>
            <article className="pt-[120px]">
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
                                {" "}
                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="1em" height="1em" className="RecipeCard_metaIcon__RH7hh">
                                            <path d="M8 13.875a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"></path><path d="M8 8.375 10.475 5.9M6.5.875h3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"></path>
                                            </svg> */}{" "}
                                <span className="">5 mins read </span>{" "}
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
                                {" "}
                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="1em" height="1em" className="RecipeCard_metaIcon__RH7hh">
                                            <path d="M8 13.875a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"></path><path d="M8 8.375 10.475 5.9M6.5.875h3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"></path>
                                            </svg> */}{" "}
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
                                {" "}
                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="1em" height="1em" className="RecipeCard_metaIcon__RH7hh">
                                            <path d="M8 13.875a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"></path><path d="M8 8.375 10.475 5.9M6.5.875h3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"></path>
                                            </svg> */}{" "}
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
                                {" "}
                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="1em" height="1em" className="RecipeCard_metaIcon__RH7hh">
                                            <path d="M8 13.875a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"></path><path d="M8 8.375 10.475 5.9M6.5.875h3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"></path>
                                            </svg> */}{" "}
                                <span className="">4 mins read </span>{" "}
                            </div>
                        </div>
                    </div>{" "}
                </div>{" "}
            </article>{" "}
        </div>
    );
};

export default HomePage;
