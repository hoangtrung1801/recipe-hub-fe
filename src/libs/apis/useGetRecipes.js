import useSWR from "swr";
import constants from "../constants";

const endpoint = `${constants.BACKEND_URL}/recipes`;

export default function useGetRecipes() {
    const { data, error } = useSWR(endpoint);

    return {
        recipes: data !== undefined ? data.data : [],
        isLoading: !error && !data,
        error,
    };
}
