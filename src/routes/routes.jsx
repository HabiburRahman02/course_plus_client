import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AllClasses from "../pages/AllClasses/AllClasses";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'allClasses',
                element: <AllClasses></AllClasses>
            },
        ]
    },
]);

export default router