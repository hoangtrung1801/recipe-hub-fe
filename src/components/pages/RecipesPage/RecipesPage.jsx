import { useState } from "react";
import useGetRecipes from "~/libs/apis/useGetRecipes";
import RecipeCard from "../../RecipeCard";
import ListCatalogs from "./ListCatalogs";

const RecipesPage = () => {
    const { recipes } = useGetRecipes();

    // Catalog 'All' is -1 (default)
    const [selectedCatalogId, setSelectedCatalogId] = useState(-1);

    return (
        <div className="container auto-rows-auto">
            <ListCatalogs
                selectedCatalogId={selectedCatalogId}
                setSelectedCatalogId={setSelectedCatalogId}
            />

            {/* recipes list */}
            <div className="relative">
                <section className="">
                    <div className="flex flex-col">
                        <div className="relative my-24 " id="textRecipes">
                            <h1 className="text-center text-7xl font-semibold lg:text-9xl ">
                                Recipes
                            </h1>
                        </div>
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8  ">
                            {recipes.map((recipe) => (
                                <div key={recipe.id}>
                                    <RecipeCard recipe={recipe} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default RecipesPage;