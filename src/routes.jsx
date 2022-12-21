import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import Page404 from "./components/pages/404";
import ComponentsPage from "./components/pages/components";
import CreateRecipePage from "./components/pages/CreateRecipePage/CreateRecipePage";
import HomePage from "./components/pages/HomePage/HomePage";
import LoginPage from "./components/pages/LoginPage";
import ProfilePage from "./components/pages/ProfilePage/ProfilePage";
import RecipeChangelogPage from "./components/pages/RecipeChangelog/RecipeChangelog";
import RecipeChangelogSpecificPage from "./components/pages/RecipeChangelogSpecific/RecipeChangelogSpecific";
import RecipeEditPage from "./components/pages/RecipeEditPage/RecipeEditPage";
import RecipePage from "./components/pages/RecipePage/RecipePage";
import RecipesPage from "./components/pages/RecipesPage/RecipesPage";
import SearchPage from "./components/pages/SearchPage/SearchPage";
import SignUpPage from "./components/pages/SignUpPage";
import UpdateProfilePage from "./components/pages/UpdateProfilePage/UpdateProfilePage";
import UpdateRecipePage from "./components/pages/UpdateRecipePage/UpdateRecipePage";
import fetchUser from "./libs/apis/fetchUser";
import constants from "./libs/constants";
import AdminPage from "./components/pages/Admin/Admin";

const router = createBrowserRouter([
    {
        path: "/admin-page",
        element: <AdminPage />,
    },
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
                element: <UpdateProfilePage />,
            },
            {
                path: "/recipes",
                element: <RecipesPage />,
            },
            {
                path: "/recipes/:recipeId",
                children: [
                    {
                        index: true,
                        element: <RecipePage />,
                    },
                    {
                        path: "edit",
                        element: <RecipeEditPage />,
                    },
                    {
                        path: "changelog",
                        children: [
                            {
                                index: true,
                                element: <RecipeChangelogPage />,
                            },
                            {
                                path: ":changelogId",
                                element: <RecipeChangelogSpecificPage />,
                            },
                            {
                                path: "update",
                                element: <UpdateRecipePage />,
                            },
                        ],
                    },
                ],
            },
            {
                path: "/recipes/create",
                element: <CreateRecipePage />,
                loader: async () => {
                    const response = await fetchUser();
                    if (response.status === constants.responseStatus.SUCCESS) {
                        return;
                    } else {
                        return redirect("/");
                    }
                },
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
