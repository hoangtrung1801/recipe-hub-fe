export default {
    PORT: import.meta.env.VITE_PORT,
    BACKEND_URL: import.meta.env.VITE_BACKEND_URL,
    GOOGLE_CLIENT_ID: import.meta.env.VITE_GOOGLE_CLIENT_ID,

    responseStatus: {
        SUCCESS: "success",
        FAIL: "fail",
        ERROR: "error",
    },

    avatarDefault: "/avatar-default.jpg",
    ingredientDefault: "/ingredient-default.png",

    recipeMode: [
        { value: "PUBLIC", label: "Public" },
        { value: "PRIVATE", label: "Public" },
    ],
};
