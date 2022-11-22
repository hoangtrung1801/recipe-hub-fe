import constants from "../constants";
import { fetcherPost } from "../fetcher";

const forkRecipe = async (recipeId, name, description, mode) => {
    const endpoint = `${constants.BACKEND_URL}/recipes/${recipeId}/fork`;
    const response = await fetcherPost(endpoint, { name, description, mode });
    return response;
};

export default forkRecipe;
