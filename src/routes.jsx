import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import Page404 from "./components/pages/404";
import ComponentsPage from "./components/pages/components";
import CreateRecipePage from "./components/pages/CreateRecipePage/CreateRecipePage";
import HomePage from "./components/pages/HomePage/HomePage";
import LoginPage from "./components/pages/LoginPage";
import ProfilePage from "./components/pages/ProfilePage/ProfilePage";
import RecipePage from "./components/pages/RecipePage/RecipePage";
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
                path: "/profile/update",
                element: <UpdateProfile />,
            },
            {
                path: "/recipes",
                element: <RecipesPage />,
            },
            {
                path: "/recipes/:recipeId",
                element: <RecipePage />,
            },
            {
                path: "/recipes/create",
                element: <CreateRecipePage />,
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
                path: "/search",
                element: <SearchPage />,
            },
            {
                path: "/:username",
                element: <ProfilePage />,
            },
            // {
            //     path: "*",
            //     element: <Page404 />,
            // },
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
