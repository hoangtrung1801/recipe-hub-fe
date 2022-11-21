import constants from "../constants";
import { fetcherPostWithFormData } from "../fetcher";

export default function postUploadFile(formData) {
    const endpoint = `${constants.BACKEND_URL}/upload/image`;

    const response = fetcherPostWithFormData(endpoint, formData);

    return response;
}
