import constants from "../constants";
import { fetcherDelete } from "../fetcher";

export default async function deleteRecipe(recipeId) {
    const endpoint = `${constants.BACKEND_URL}/recipes/${recipeId}`;
    const response = await fetcherDelete(endpoint);

    return response;
}
