import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllCourses from "../pages/AllCourses/AllCourses";
import CourseDetails from "../pages/AllCourses/CourseDetails";
import PrivateRoute from "./PrivateRoute";
import Payment from "../pages/AllCourses/Payment";
import TeachOnCoursePlus from "../pages/TeachOnCoursePlus/TeachOnCoursePlus";
import DashboardLayout from "../layout/DashboardLayout";
import AddCourse from "../pages/Dasboard/Teacher/AddCourse";

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
                path: 'allCourses',
                element: <AllCourses></AllCourses>
            },
            {
                path: 'courseDetails/:id',
                element: <PrivateRoute><CourseDetails></CourseDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
            },
            {
                path: 'payment/:id',
                element: <PrivateRoute><Payment></Payment></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
            },
            {
                path: 'teachOnCoursePlus',
                element: <PrivateRoute><TeachOnCoursePlus></TeachOnCoursePlus></PrivateRoute>,
            },
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: 'addCourse',
                element: <PrivateRoute><AddCourse></AddCourse></PrivateRoute>
            }
        ]
    }
]);

export default router