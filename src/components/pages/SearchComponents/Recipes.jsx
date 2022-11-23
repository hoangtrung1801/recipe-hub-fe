import { useEffect, useState } from "react";
import RecipeCard from "~/components/RecipeCard";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getRecipes();
    }, []);

    const getRecipes = async () => {
        const check = localStorage.getItem("recipes");

        if (check) {
            setRecipes(JSON.parse(check));
        } else {
            const api = await fetch(`http://localhost:3000/recipes?number=9`);
            const infor = await api.json();

            localStorage.setItem("recipes", JSON.stringify(infor.data));
            setRecipes(infor.data);
            console.log(infor.data);
        }
    };

    return (
        <>
            {recipes.map((recipe) => {
                return (
                    <div key={recipe.id}>
                        <RecipeCard recipe={recipe} />{" "}
                    </div>
                );
            })}{" "}
        </>
    );
};

export default Recipes;
