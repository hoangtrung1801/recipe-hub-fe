import constants from "../constants";
import { fetcherPost } from "../fetcher";

export default async function postUnstar(recipeId) {
    const endpoint = `${constants.BACKEND_URL}/recipes/${recipeId}/unstar`;
    const response = await fetcherPost(endpoint);

    return response;
}
