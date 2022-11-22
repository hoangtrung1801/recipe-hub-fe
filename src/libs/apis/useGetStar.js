import useSWR from "swr";
import constants from "../constants";

export default function useGetStars(recipeId) {
    const endpoint = `${constants.BACKEND_URL}/recipes/${recipeId}/stars`;

    const { data, error, ...rest } = useSWR(endpoint);

    return {
        stars: data !== undefined ? data.data : undefined,
        isLoading: !error && !data,
        error,
        ...rest,
    };
}
