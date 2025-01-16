import { FaHome } from "react-icons/fa";
import { FaChampagneGlasses, FaPersonRifle } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
    const student = false;
    const teacher = true;
    const admin = false;
    return (
        <div className="flex gap-10">
            <div className="w-1/5 bg-cyan-700 p-10 text-white min-h-screen">
                {/* side nav */}
                <ul className="space-y-2">
                    {student && <>
                        <li>
                            <NavLink to='/' className='flex items-center gap-2'>
                                <FaHome></FaHome>
                                Home
                            </NavLink>
                        </li>
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
                                <NavLink to='/' className='flex items-center gap-2'>
                                    <FaHome></FaHome>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/addCourse' className='flex items-center gap-2'>
                                    <FaChampagneGlasses></FaChampagneGlasses>
                                    Add Course
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/profile' className='flex items-center gap-2'>
                                    <FaPersonRifle></FaPersonRifle>
                                    Profile
                                </NavLink>
                            </li>
                        </>
                    }
                    {
                        admin && <>
                            <li>
                                <NavLink to='/' className='flex items-center gap-2'>
                                    <FaHome></FaHome>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/myEnrollClass' className='flex items-center gap-2'>
                                    <FaChampagneGlasses></FaChampagneGlasses>
                                    ADmin
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/profile' className='flex items-center gap-2'>
                                    <FaPersonRifle></FaPersonRifle>
                                    admin
                                </NavLink>
                            </li>
                        </>
                    }
                </ul>

            </div>
            <div className="w-4/5">
                {/* dynamic content */}

                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;