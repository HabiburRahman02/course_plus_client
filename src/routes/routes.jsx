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
import AddCourse from "../pages/Dashboard/Teacher/AddCourse";
import MyCourse from "../pages/Dashboard/Teacher/MyCourse";
import UpdateCourse from "../pages/Dashboard/Teacher/UpdateCourse";
import SeeProgressDetails from "../pages/Dashboard/Teacher/SeeProgressDetails";
import Users from "../pages/Dashboard/Admin/Users";
import AdminRoute from "./AdminRoute";
import DashboardAllCourse from "../pages/Dashboard/Admin/DashboardAllCourse";
import Profile from "../pages/Dashboard/Common/Profile";
import TeacherRequest from "../pages/Dashboard/Admin/TeacherRequest";

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
                loader: ({ params }) => fetch(`http://localhost:5000/specificCourseForUpdate/${params.id}`)
            },
            {
                path: 'payment/:id',
                element: <PrivateRoute><Payment></Payment></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/specificCourseForUpdate/${params.id}`)
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
            // common routes
            {
                path: 'profile',
                element: <Profile></Profile>
            },
            // admin only routes
            {
                path: 'users',
                element: <AdminRoute><Users></Users></AdminRoute>
            },
            {
                path: 'dashboardAllCourse',
                element: <AdminRoute><DashboardAllCourse></DashboardAllCourse></AdminRoute>
            },

            // teacher routes
            {
                path: 'teacherRequest',
                element: <TeacherRequest></TeacherRequest>
            },
            {
                path: 'addCourse',
                element: <AddCourse></AddCourse>
            },
            {
                path: 'myCourse',
                element: <MyCourse></MyCourse>
            },
            {
                path: 'updateCourse/:id',
                element: <UpdateCourse></UpdateCourse>,
                loader: ({ params }) => fetch(`http://localhost:5000/specificCourseForUpdate/${params.id}`)
            },
            {
                path: 'seeProgressDetails/:id',
                element: <SeeProgressDetails></SeeProgressDetails>,
            },
        ]
    }
]);

export default router