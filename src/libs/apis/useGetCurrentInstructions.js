import useSWR from "swr";
import constants from "../constants";

export default function useGetCurrentInstructions(recipeId) {
    const endpoint = `${constants.BACKEND_URL}/recipes/${recipeId}/instructions`;
    const { data, error } = useSWR(endpoint);

    return {
        instructions: data !== undefined ? data.data : null,
        isLoading: !error && !data,
        error,
    };
}
