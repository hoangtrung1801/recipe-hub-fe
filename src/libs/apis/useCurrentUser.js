import useSWR from "swr";
import constants from "../constants";

const endpoint = `${constants.BACKEND_URL}/auth`;

const useCurrentUser = () => {
    const { data, error } = useSWR(endpoint);

    return {
        user: data !== undefined ? data.data : null,
        isLoading: !error && !data,
        error,
    };
};

export default useCurrentUser;
