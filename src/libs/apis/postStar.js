import constants from "../constants";
import { fetcherPost } from "../fetcher";

export default async function postStar(recipeId) {
    const endpoint = `${constants.BACKEND_URL}/recipes/${recipeId}/stars`;
    const response = await fetcherPost(endpoint);

    return response;
}
