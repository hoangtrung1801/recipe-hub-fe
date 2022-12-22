const LOGIN_ADMIN_KEY = "login-admin";

const authProvider = {
    login: ({ username, password }) => {
        if (username === "admin" && password === "admin") {
            localStorage.setItem(LOGIN_ADMIN_KEY, true);
            return Promise.resolve();
        }

        return Promise.reject();
    },
    logout: () => {
        localStorage.removeItem(LOGIN_ADMIN_KEY);
        return Promise.resolve();
    },
    checkAuth: () =>
        localStorage.getItem(LOGIN_ADMIN_KEY)
            ? Promise.resolve()
            : Promise.reject({ redirectTo: "/" }),
    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem(LOGIN_ADMIN_KEY);
            return Promise.reject();
        }
        // other error code (404, 500, etc): no need to log out
        return Promise.resolve();
    },
    getIdentity: () =>
        Promise.resolve({
            id: "admin",
            fullname: "admin",
        }),
    getPermissions: () => Promise.resolve(),
};

export default authProvider;
