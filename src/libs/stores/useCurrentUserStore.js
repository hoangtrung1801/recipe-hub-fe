import create from "zustand";
import fetchUser from "../apis/fetchUser";
import login from "../apis/logIn";
import logOut from "../apis/logOut";
import signUp from "../apis/signUp";
import constants from "../constants";

const useCurrentUserStore = create((set, get) => ({
    currentUser: undefined,
    fetchUser: async () => {
        const response = await fetchUser();
        if (response.status === constants.responseStatus.SUCCESS) {
            set({ currentUser: response.data });
            return true;
        }
        return false;
    },
    login: async (username, password) => {
        const response = await login(username, password);
        await get().fetchUser();
        return response;
    },
    loginWithGoogle: async (resGoogle) => {
        const { profileObj } = resGoogle;
        const username = profileObj.email.split("@")[0];
        const { name, googleId: password, imageUrl } = profileObj;

        let response;
        try {
            await get().signUp({
                username,
                password,
                name,
                phone: "012345678",
                address: "@",
                avatarUrl: imageUrl,
            });
        } finally {
            response = await login(username, password);
        }

        await get().fetchUser();
        return response;
    },
    signUp: async (userData) => {
        const response = await signUp(userData);
        await get().fetchUser();
        return response;
    },
    logOut: async () => {
        if (!get().currentUser) return false;

        await logOut();
        set({ currentUser: null });
        return true;
    },
}));

export default useCurrentUserStore;
