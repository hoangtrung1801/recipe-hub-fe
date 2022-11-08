import constants from "../constants";
import { postData } from "../fetcher";

const endpoint = `${constants.BACKEND_URL}/auth/register`;

export default async function (userData) {
    const response = await postData(endpoint, userData);
    return response;
}
