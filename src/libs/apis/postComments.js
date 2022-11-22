import constants from "../constants";
import { fetcherPost } from "../fetcher";

export default async function postComments(recipeId, message) {
    const endpoint = `${constants.BACKEND_URL}/recipes/${recipeId}/comments`;

    const response = await fetcherPost(endpoint, { message });

    return response;
}
