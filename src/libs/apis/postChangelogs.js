import constants from "../constants";
import { fetcherPost } from "../fetcher";

export default async function postChangelogs(recipeId, body) {
    const endpoint = `${constants.BACKEND_URL}/recipes/${recipeId}/changelogs`;

    const response = await fetcherPost(endpoint, body);

    return response;
}
