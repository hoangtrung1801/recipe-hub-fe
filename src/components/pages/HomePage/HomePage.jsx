import ListRecipeCards from "~/components/ListRecipeCards";
import useGetRecipes from "~/libs/apis/useGetRecipes";
import HomeBanner from "./HomeBanner";

const HomePage = () => {
    const { recipes, isLoading: isLoadingRecipes } = useGetRecipes();

    return (
        <div className="container">
            <div className="space-y-24">
                <HomeBanner />

                <div className="">{!isLoadingRecipes && <ListRecipeCards recipes={recipes} />}</div>

                <div className="h-auto items-center bg-primary-300 py-20">
                    <div className="mx-auto w-[66%] text-center text-4xl leading-[50px]">
                        <h2 className="font-normal">
                            Discover some tasty
                            <span className="font-semibold"> plant - based recipes </span> and
                            explore topics around
                            <span className="font-semibold"> physical and mental health, </span> all
                            whilst trying to look after our planet.
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
