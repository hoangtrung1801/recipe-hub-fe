import useSWR from "swr";
import constants from "../constants";

export default function useGetRecipes(q = "", c = "") {
    const searchQuery = !q && !c ? "" : `q=${q}&c=${c}`;
    const endpoint = `${constants.BACKEND_URL}/recipes?${searchQuery}`;

    const { data, error, ...rest } = useSWR(endpoint);

    return {
        recipes: data !== undefined ? data.data : [],
        isLoading: !error && !data,
        error,
        ...rest,
    };
}
