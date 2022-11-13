import constants from "../constants";
import { fetcherPost } from "../fetcher";

const endpoint = `${constants.BACKEND_URL}/auth/logout`;

export default async function logOut() {
    const response = await fetcherPost(endpoint);

    return response;
}
