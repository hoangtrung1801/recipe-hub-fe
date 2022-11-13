import useSWR from "swr";
import constants from "../constants";

export default function useGetUser(username) {
    const endpoint = `${constants.BACKEND_URL}/users/username/${username}`;

    const { data, error } = useSWR(endpoint);

    return {
        user: data !== undefined ? data.data : null,
        isLoading: !error && !data,
        error,
    };
}
