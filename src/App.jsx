import { SWRConfig } from "swr";
import fetcher from "./libs/fetcher";
import AppRoutes from "./routes";

function App() {
    return (
        <SWRConfig value={{ fetcher }}>
            <AppRoutes />
        </SWRConfig>
    );
}

export default App;
