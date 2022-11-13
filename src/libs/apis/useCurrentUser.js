import useSWR from "swr";
import constants from "../constants";
import fetcherGet from "../fetcher";

const endpoint = `${constants.BACKEND_URL}/auth`;

const useCurrentUser = () => {
    const { data, error } = useSWR(endpoint, fetcherGet);

    return {
        user: data !== undefined ? data.data : null,
        isLoading: !error && !data,
        error,
    };
};

export default useCurrentUser;
