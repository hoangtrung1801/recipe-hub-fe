import RecipeCard from "~/components/RecipeCard";
import useGetRecipes from "~/libs/apis/useGetRecipes";
import HomeBanner from "./HomeBanner";

const HomePage = () => {
    const { recipes } = useGetRecipes();

    console.log(recipes);

    return (
        <div>
            <HomeBanner />

            <menu className="pt-[120px] pb-[80px]">
                <div className="home-page__menu grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
                    {recipes.map((recipe) => (
                        <div key={recipe.id}>
                            <RecipeCard recipe={recipe} />
                        </div>
                    ))}

                    {/* {recipes.map((recipe) => (
                        <div key={recipe.text}>
                            <CardComponent card={recipe} />
                        </div>
                    ))} */}
                </div>
            </menu>

            <description>
                <div className="h-auto items-center bg-primary-300 py-20 ">
                    <div className="mx-auto w-[66%] text-center text-4xl leading-[50px]">
                        Discover some tasty
                        <span className="font-semibold"> plant - based recipes </span> and explore
                        topics around
                        <span className="font-semibold"> physical and mental health, </span> all
                        whilst trying to look after our planet.
                    </div>
                </div>
            </description>
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

                                                Is a plant - based diet affecting my health
                                                ? I did a Thriva blood test to find out
                                            </span>
                                        </a>
                                    </div>
                                    <div className="text-base font-normal">
                                        <div>
                                            <span className="">5 mins read </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="home-page__menu-item flex flex-col gap-5 pb-8">
                                    <img
                                        // className="h-full w-full object-cover "
                                        src="https://images.prismic.io/stryve/e89aed37-d1f1-4e41-a468-7ad102dc7f28_grubby.png?auto=compress,format&fm=webp&lossless=false&q=75&w=768"
                                        alt="image"
                                    />
                                    <div>
                                        <a className="" href="#">
                                            <span className="text-center text-3xl font-semibold md:text-left ">

                                                Grubby, the plant - based recipe kit that
                                                doesn’ t cost the earth
                                            </span>
                                        </a>
                                    </div>
                                    <div className="text-base font-normal">
                                        <div>
                                            <span className="">5 mins read </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="home-page__menu-item flex flex-col gap-5 pb-8">
                                    <img
                                        // className="h-full w-full object-cover "
                                        src="https://images.prismic.io/stryve/8705e8d9-ff73-4fcf-93af-87d175e9dd7b_6-ways-better-sleep.png?auto=compress,format&fm=webp&lossless=false&q=75&w=768"
                                        alt="image"
                                    />
                                    <div>
                                        <a className="" href="#">
                                            <span className="text-center text-3xl font-semibold md:text-left ">

                                                6 ways to get a better night sleep
                                            </span>
                                        </a>
                                    </div>
                                    <div className="text-base font-normal">
                                        <div>
                                            <span className="">4 mins read </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="home-page__menu-item flex flex-col gap-5 pb-8">

                                    <img
                                        // className="h-full w-full object-cover "
                                        src="https://images.prismic.io/stryve/ad43079f-15bd-450d-853e-47c6b653d694_building-a-consistent-walking-habit.png?auto=compress,format&fm=webp&lossless=false&q=75&w=768"
                                        alt="image"
                                    />
                                    <div>
                                        <a className="" href="#">
                                            <span className="text-center text-3xl font-semibold md:text-left ">

                                                I built a consistent walking habit, here’ s
                                                what helped
                                            </span>
                                        </a>
                                    </div>
                                    <div className="text-base font-normal">
                                        <div>
                                           <span className="">4 mins read </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article> */}
        </div>
    );
};

export default HomePage;
