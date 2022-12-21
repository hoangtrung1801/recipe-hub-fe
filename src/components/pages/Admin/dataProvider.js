import constants from "~/libs/constants";
import fetcherGet, { fetcherDelete, fetcherPut } from "~/libs/fetcher";

const apiUrl = constants.BACKEND_URL;
// const fetcher = (resource, option?: RequestInit) =>
//     fetch(`${apiUrl}/${resource}`, option).then((data) => data.json());

const dataProvider = {
    getList: async function (resource, params) {
        const data = await fetcherGet(`${apiUrl}/${resource}`);
        return {
            data: data.data,
            total: data.data.length,
        };
    },
    getOne: async function (resource, params) {
        const data = await fetcherGet(`${apiUrl}/${resource}/${params.id}`);

        return {
            data: data.data,
        };
    },
    getMany: async function (resource, params) {
        const data = await fetcherGet(`${apiUrl}/${resource}`);

        return {
            data: data.data,
        };
    },
    getManyReference: async function (resource, params) {
        const data = await fetcherGet(`${apiUrl}/${resource}`);

        return {
            data: data.data,
            total: data.data.length,
        };
    },
    update: async function (resource, params) {
        let updateData = {};
        Object.keys(params.data).map((key) => {
            const value = params.data[key];
            const previousValue = params.previousData[key];
            if (JSON.stringify(value) !== JSON.stringify(previousValue)) updateData[key] = value;
        });

        const data = await fetcherPut(`${apiUrl}/${resource}/${params.id}`, updateData);

        return {
            data: data.data,
        };
    },
    updateMany: function (resource, params) {
        throw new Error("Function not implemented.");
    },
    // create: async function (resource, params) {
    //     let body = params.data;

    //     if (resource === "products") {
    //         let images = body.images;
    //         images = await Promise.all(
    //             images.map(async (imageFile) => {
    //                 const imageStr = await convertToBase64(imageFile);
    //                 // // post upload image & get url from response
    //                 const imageResponse = await fetcherPost("upload/images", {
    //                     method: "POST",
    //                     body: JSON.stringify({
    //                         data: imageStr,
    //                     }),
    //                 });
    //                 return imageResponse.data.url;
    //             })
    //         );

    //         body = {
    //             ...body,
    //             images,
    //         };
    //     } else if (resource === "donations") {
    //         let image = body.image;
    //         const imageStr = await convertToBase64(image);
    //         // // post upload image & get url from response
    //         const imageResponse = await fetchJson("upload/images", {
    //             method: "POST",
    //             body: JSON.stringify({
    //                 data: imageStr,
    //             }),
    //         });

    //         let expiryDate = body.expiryDate;

    //         body = {
    //             ...body,
    //             expiryDate: new Date(expiryDate).toISOString(),
    //             image: imageResponse.data.url,
    //         };
    //     }

    //     const data = await fetchJson(`${resource}`, {
    //         method: "POST",
    //         body: JSON.stringify(body),
    //     });

    //     return {
    //         data: data.data,
    //     };
    // },
    delete: async function (resource, params) {
        const data = await fetcherDelete(`${apiUrl}/${resource}/${params.id}`);

        return {
            data: data.data,
        };
    },
    deleteMany: function (resource, params) {
        throw new Error("Function not implemented.");
    },
};

export default dataProvider;
