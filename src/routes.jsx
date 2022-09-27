import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import Page404 from "./components/pages/404";
import ComponentsPage from "./components/pages/components";
import HomePage from "./components/pages/HomePage";
import RecipePage from "./components/pages/RecipePage";
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
            {
                path: "/recipe",
                element: <RecipePage />,
            },
            {
                path: "/components",
                element: <ComponentsPage />,
            },
            {
                path: "/404",
                element: <Page404 />,
            },
        ],
    },
]);

const AppRoutes = () => {
    return <RouterProvider router={router} />;
};

export default AppRoutes;
