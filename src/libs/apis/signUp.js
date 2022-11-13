import constants from "../constants";
import { fetcherPost } from "../fetcher";

const endpoint = `${constants.BACKEND_URL}/auth/register`;

export default async function (userData) {
    const response = await fetcherPost(endpoint, userData);
    return response;
}
