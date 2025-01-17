import { FaChalkboardTeacher, FaHome, FaList, FaUsers } from "react-icons/fa";
import { FaChampagneGlasses, FaPersonRifle } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const DashboardLayout = () => {
    const student = false;
    const teacher = false;
    const [isAdmin] = useAdmin();
    // const isAdmin = false


    return (
        <div className="flex">
            <div className="w-1/5 bg-cyan-700 p-10 text-white min-h-screen">
                {/* side nav */}
                <ul className="space-y-2">
                    <li>
                        <NavLink to='/' className='flex items-center gap-2'>
                            <FaHome></FaHome>
                            Home
                        </NavLink>
                    </li>
                    {student && <>
                        <li>
                            <NavLink to='/dashboard/myEnrollClass' className='flex items-center gap-2'>
                                <FaChampagneGlasses></FaChampagneGlasses>
                                My Enroll Class
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/profile' className='flex items-center gap-2'>
                                <FaPersonRifle></FaPersonRifle>
                                Profile
                            </NavLink>
                        </li>
                    </>}
                    {
                        teacher && <>
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
                            <FaPersonRifle></FaPersonRifle>
                            Profile
                        </NavLink>
                    </li>
                </ul>

            </div>
            <div className="w-4/5 px-10">
                {/* dynamic content */}

                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;