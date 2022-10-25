import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import Page404 from "./components/pages/404";
import ComponentsPage from "./components/pages/components";
import HomePage from "./components/pages/HomePage";
import RecipePage from "./components/pages/RecipePage";
import LoginPage from "./components/pages/LoginPage";
import RecipesPage from "./components/pages/RecipesPage";
import SignUpPage from "./components/pages/SignUpPage";
import AboutPage from "./components/pages/AboutPage";
import CardComponent from "./components/pages/CardComponent";
import DivStart from "./components/pages/DivStart";
import TestSlider from "./components/pages/TestSlider";

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
                path: "/about",
                element: <AboutPage />,
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
                path: "/temp",
                element: <CardComponent />,
            },
            {
                path: "/test",
                element: <DivStart />,
            },
            {
                path: "/slider",
                element: <TestSlider />,
            },
        ],
    },
]);

const AppRoutes = () => {
    return <RouterProvider router={router} />;
};

export default AppRoutes;
