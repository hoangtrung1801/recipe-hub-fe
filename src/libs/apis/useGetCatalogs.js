import useSWR from "swr";
import constants from "../constants";

const endpoint = `${constants.BACKEND_URL}/catalogs`;

export default function useGetCatalogs() {
    const { data, error } = useSWR(endpoint);

    return {
        catalogs: data !== undefined ? data.data : [],
        isLoading: !error && !data,
        error,
    };
}
