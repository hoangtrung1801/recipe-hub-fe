import constants from "../constants";
import { fetcherPost } from "../fetcher";

export default async function postForkRecipe(recipeId, body) {
    const endpoint = `${constants.BACKEND_URL}/recipes/${recipeId}/fork`;
    const response = await fetcherPost(endpoint, body);

    return response;
}
