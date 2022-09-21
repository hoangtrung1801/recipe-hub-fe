import {
    createBrowserRouter,
    RouterProvider,
    useRoutes,
} from "react-router-dom";
import Layout from "./components/layout";
import HomePage from "./components/pages/HomePage";
import RecipesPage from "./components/pages/RecipesPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "/recipes",
                element: <RecipesPage />,
            },
        ],
    },
]);

const AppRoutes = () => {
    return <RouterProvider router={router} />;
};

export default AppRoutes;
