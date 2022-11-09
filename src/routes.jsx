import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import Page404 from "./components/pages/404";
import AboutPage from "./components/pages/AboutPage";
import ComponentsPage from "./components/pages/components";
import HomePage from "./components/pages/HomePage/HomePage";
import LoginPage from "./components/pages/LoginPage";
import RecipePage from "./components/pages/RecipePage";
import RecipesPage from "./components/pages/RecipesPage/RecipesPage";
import SearchPage from "./components/pages/SearchPage";
import SignUpPage from "./components/pages/SignUpPage";
import UpdateProfile from "./components/pages/UpdateProfile";

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
                path: "/profile",
                element: <AboutPage />,
            },
            {
                path: "/profile/update",
                element: <UpdateProfile />,
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
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "/signup",
                element: <SignUpPage />,
            },
            {
                path: "/components",
                element: <ComponentsPage />,
            },
            {
                path: "/404",
                element: <Page404 />,
            },
            {
                path: "/search",
                element: <SearchPage />,
            },
        ],
    },
]);

const AppRoutes = () => {
    return <RouterProvider router={router} />;
};

export default AppRoutes;
