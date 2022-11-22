import useSWR from "swr";
import constants from "../constants";

export default function useGetRecipe(recipeId) {
    const endpoint = `${constants.BACKEND_URL}/recipes/${recipeId}`;

    const { data, error } = useSWR(endpoint);

    return {
        recipe: data !== undefined ? data.data : null,
        isLoading: !error && !data,
        error,
    };
}
