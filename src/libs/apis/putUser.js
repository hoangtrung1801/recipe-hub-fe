import constants from "../constants";
import { fetcherPut } from "../fetcher";
import postUploadFile from "./postUploadFile";
import * as _ from "lodash";

export default async function putUser(userId, userData) {
    const endpoint = `${constants.BACKEND_URL}/users/${userId}`;

    // UPLOAD IMAGE AND GET URL
    if (userData?.image) {
        const imageFormData = new FormData();
        const imageBlob = await fetch(URL.createObjectURL(userData.image)).then((res) =>
            res.blob()
        );
        imageFormData.append("file", imageBlob);
        imageFormData.append("name", _.uniqueId("image_"));
        const responseImage = await postUploadFile(imageFormData);

        if (responseImage.status !== constants.responseStatus.SUCCESS) {
            throw new Error("error when upload image");
        }

        userData.avatarUrl = responseImage.data.contentUrl;
        delete userData.image;
    }

    const response = await fetcherPut(endpoint, {
        ...userData,
    });

    return response;
}
