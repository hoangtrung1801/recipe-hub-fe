import { MantineProvider } from "@mantine/core";
import { useEffect } from "react";
import { SWRConfig } from "swr";
import fetcherGet from "./libs/fetcher";
import useCurrentUserStore from "./libs/stores/useCurrentUserStore";
import AppRoutes from "./routes";

function App() {
    const currentUser = useCurrentUserStore((state) => state.currentUser);
    const fetchUser = useCurrentUserStore((state) => state.fetchUser);

    useEffect(() => {
        fetchUser();
    }, []);

    useEffect(() => {
        console.log(currentUser);
    }, [currentUser]);

    return (
        <MantineProvider withCSSVariables>
            <SWRConfig value={{ fetcher: fetcherGet }}>
                <AppRoutes />
            </SWRConfig>
        </MantineProvider>
    );
}

export default App;
