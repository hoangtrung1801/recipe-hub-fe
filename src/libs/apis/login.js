import constants from "../constants";
import { postData } from "../fetcher";

const endpoint = `${constants.BACKEND_URL}/auth/login`;

export default async function login(username, password) {
    const response = await postData(endpoint, {
        username,
        password,
    });
    console.log(response);

    return response;
}
