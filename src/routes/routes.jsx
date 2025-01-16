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
import MyCourse from "../pages/Dasboard/Teacher/MyCourse";
import UpdateCourse from "../pages/Dasboard/Teacher/UpdateCourse";
import SeeProgressDetails from "../pages/Dasboard/Teacher/SeeProgressDetails";

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

            // teacher routes
            {
                path: 'addCourse',
                element: <PrivateRoute><AddCourse></AddCourse></PrivateRoute>
            },
            {
                path: 'myCourse',
                element: <PrivateRoute><MyCourse></MyCourse></PrivateRoute>
            },
            {
                path: 'updateCourse/:id',
                element: <PrivateRoute><UpdateCourse></UpdateCourse></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/specificCourseForUpdate/${params.id}`)
            },
            {
                path: 'seeProgressDetails/:id',
                element: <PrivateRoute><SeeProgressDetails></SeeProgressDetails></PrivateRoute>,
                // loader: ({ params }) => fetch(`http://localhost:5000/specificCourseForUpdate/${params.id}`)
            },
        ]
    }
]);

export default router