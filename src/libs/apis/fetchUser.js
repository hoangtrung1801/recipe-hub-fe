import constants from "../constants";
import fetcherGet from "../fetcher";

const endpoint = `${constants.BACKEND_URL}/auth`;

export default async function fetchUser() {
    const response = await fetcherGet(endpoint);

    return response;
}
