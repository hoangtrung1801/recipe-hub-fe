/* eslint-disable no-unused-vars */
import useSWR from "swr";
import constants from "../constants";

export default function useGetRecipe(recipeId) {
    const endpoint = `${constants.BACKEND_URL}/recipes/${recipeId}`;

    const { data, error } = useSWR(endpoint);
    const { insutrcionts } = useSWR;

    return {
        recipe: data !== undefined ? data.data : null,
        isLoading: !error && !data,
        error,
    };
}