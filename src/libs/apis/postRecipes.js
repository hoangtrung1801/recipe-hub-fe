import * as _ from "lodash";
import constants from "../constants";
import { fetcherPost } from "../fetcher";
import postUploadFile from "./postUploadFile";

export default async function postRecipe(recipeData) {
    const endpoint = `${constants.BACKEND_URL}/recipes`;

    // ADD 'total'
    const { prep, chill, cook } = recipeData.cookTime;
    recipeData.cookTime = {
        ...recipeData.cookTime,
        total: prep + chill + cook,
    };

    // MAP catalog Ids
    recipeData.catalogs = (recipeData?.catalogs && recipeData.catalogs.map((id) => ({ id }))) || [];

    // MAP ingredients
    recipeData.ingredients = recipeData?.ingredients.map((ingredient) => ({
        ...ingredient,
        unit: ingredient.unit === "none" || ingredient.unit === null ? "" : ingredient.unit,
    }));

    // UPLOAD IMAGE AND GET URL
    const imageFormData = new FormData();
    const imageBlob = await fetch(URL.createObjectURL(recipeData.image)).then((res) => res.blob());
    imageFormData.append("file", imageBlob);
    imageFormData.append("name", _.uniqueId("image_"));
    const responseImage = await postUploadFile(imageFormData);

    if (responseImage.status !== constants.responseStatus.SUCCESS)
        throw new Error("error when upload image");
    recipeData.imageUrl = responseImage.data.contentUrl;

    const response = fetcherPost(endpoint, recipeData);

    return response;
}
