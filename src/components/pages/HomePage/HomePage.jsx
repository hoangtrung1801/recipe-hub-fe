import RecipeCard from "~/components/RecipeCard";
import useGetRecipes from "~/libs/apis/useGetRecipes";
import HomeBanner from "./HomeBanner";

const HomePage = () => {
    const { recipes, isLoading: isLoadingRecipes } = useGetRecipes();

    return (
        <div>
            <HomeBanner />

            <menu className="pt-[120px] pb-[80px]">
                <div className="home-page__menu grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
                    {!isLoadingRecipes &&
                        recipes.map((recipe) => (
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
        </div>
    );
};

export default HomePage;
