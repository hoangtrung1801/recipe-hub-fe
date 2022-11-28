import constants from "../constants";
import { fetcherPut } from "../fetcher";
import postUploadFile from "./postUploadFile";
import * as _ from "lodash";

export default async function putRecipe(recipeId, recipeData) {
    const endpoint = `${constants.BACKEND_URL}/recipes/${recipeId}`;

    // UPLOAD IMAGE AND GET URL
    if (recipeData?.image) {
        const imageFormData = new FormData();
        const imageBlob = await fetch(URL.createObjectURL(recipeData.image)).then((res) =>
            res.blob()
        );
        imageFormData.append("file", imageBlob);
        imageFormData.append("name", _.uniqueId("image_"));
        const responseImage = await postUploadFile(imageFormData);

        if (responseImage.status !== constants.responseStatus.SUCCESS) {
            throw new Error("error when upload image");
        }

        recipeData.imageUrl = responseImage.data.contentUrl;
        delete recipeData.image;
    }

    // MAP catalog Ids
    if (recipeData?.catalogs) {
        recipeData.catalogs = recipeData.catalogs.map((id) => ({ id }));
    }

    const response = await fetcherPut(endpoint, {
        ...recipeData,
    });

    return response;
}
