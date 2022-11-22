import useSWR from "swr";
import constants from "../constants";

export default function useGetRecipeChangelogSpecific(recipeId, changelogId) {
    const endpoint = `${constants.BACKEND_URL}/recipes/${recipeId}/changelogs/${changelogId}`;

    const { data, error } = useSWR(endpoint);

    return {
        changelog: data !== undefined ? data.data : [],
        isLoading: !error && !data,
        error,
    };
}
