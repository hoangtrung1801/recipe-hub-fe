import constants from "../constants";
import { fetcherPost } from "../fetcher";

const endpoint = `${constants.BACKEND_URL}/auth/login`;

export default async function login(username, password) {
    const response = await fetcherPost(endpoint, {
        username,
        password,
    });

    return response;
}
