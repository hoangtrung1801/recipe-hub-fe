import useSWR from "swr";
import constants from "../constants";

export default function useGetComments(recipeId) {
    const endpoint = `${constants.BACKEND_URL}/recipes/${recipeId}/comments`;

    const { data, error, ...rest } = useSWR(endpoint);

    return {
        comments: data !== undefined ? data.data : null,
        isLoading: !error && !data,
        error,
        ...rest,
    };
}
