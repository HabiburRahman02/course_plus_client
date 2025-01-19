import { FaChalkboardTeacher, FaHome, FaList, FaUserCircle, FaUsers } from "react-icons/fa";
import { FaChampagneGlasses } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useUser from "../hooks/useUser";


const DashboardLayout = () => {
    const [userForStatus] = useUser();
    // console.log('user form dash', userForStatus.role);
    const isStudent = userForStatus.role === 'student';
    const isTeacher = userForStatus.role === 'teacher';
    const [isAdmin] = useAdmin();
    // const isAdmin = false


    return (
        <div className="flex">
            <div className="w-1/6 bg-cyan-700 p-10 text-white min-h-screen">
                {/* side nav */}
                <ul className="space-y-3">
                    <li>
                        <NavLink to='/' className='flex items-center gap-2'>
                            <FaHome></FaHome>
                            Home
                        </NavLink>
                    </li>
                    {isStudent && <>
                        <li>
                            <NavLink to='/dashboard/myEnrollCourse' className='flex items-center gap-2'>
                                <FaChampagneGlasses></FaChampagneGlasses>
                                My Enroll Course
                            </NavLink>
                        </li>
                    </>}
                    {
                        isTeacher && <>
                            <li>
                                <NavLink to='/dashboard/addCourse' className='flex items-center gap-2'>
                                    <FaChampagneGlasses></FaChampagneGlasses>
                                    Add Course
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/myCourse' className='flex items-center gap-2'>
                                    <FaChampagneGlasses></FaChampagneGlasses>
                                    My Course
                                </NavLink>
                            </li>
                        </>
                    }
                    {
                        isAdmin && <>
                            <li>
                                <NavLink to='/dashboard/teacherRequest' className='flex items-center gap-2'>
                                    <FaChalkboardTeacher></FaChalkboardTeacher>
                                    Teacher Request
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/users' className='flex items-center gap-2'>
                                    <FaUsers></FaUsers>
                                    Users
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/dashboardAllCourse" className='flex items-center gap-2'>
                                    <FaList></FaList>
                                    All Course
                                </NavLink>
                            </li>

                        </>
                    }
                    <li>
                        <NavLink to='/dashboard/profile' className='flex items-center gap-2'>
                            <FaUserCircle></FaUserCircle>
                            Profile
                        </NavLink>
                    </li>
                </ul>

            </div>
            <div className="w-5/6 p-10">
                {/* dynamic content */}

                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;