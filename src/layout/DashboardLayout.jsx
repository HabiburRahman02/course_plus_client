import { useState } from "react";
import { FaBars, FaChalkboardTeacher, FaHome, FaList, FaUserCircle, FaUsers } from "react-icons/fa";
import { FaBoxesStacked, FaChampagneGlasses } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useUser from "../hooks/useUser";
import { MdAddBox } from "react-icons/md";
import { RiListUnordered } from "react-icons/ri";
import logo from '../assets/logo/logo.png'

const DashboardLayout = () => {
    const [userForStatus] = useUser();
    const isStudent = userForStatus.role === "student";
    const isTeacher = userForStatus.role === "teacher";
    const [isAdmin] = useAdmin();

    // Sidebar toggle state
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex">
            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 z-50 h-full bg-cyan-700 min-h-screen p-6 text-white flex-shrink-0 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } md:translate-x-0 md:static transition-transform duration-300 ease-in-out md:basis-1/5`}
            >
                <div className="flex gap-1 mb-4 items-center">
                    <img src={logo} className="h-6 w-6" alt="" />
                    <span>CoursePlus</span>
                </div>
                <ul className="space-y-3">
                    <li>
                        <NavLink to="/" className="flex items-center gap-2">
                            <FaHome />
                            Home
                        </NavLink>
                    </li>
                    {isStudent && (
                        <li>
                            <NavLink to="/dashboard/myEnrollCourse" className="flex items-center gap-2">
                                <FaChampagneGlasses />
                                My Enroll Course
                            </NavLink>
                        </li>
                    )}
                    {isTeacher && (
                        <>
                            <li>
                                <NavLink to="/dashboard/addCourse" className="flex items-center gap-2">
                                    <MdAddBox></MdAddBox>
                                    Add Course
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/myCourse" className="flex items-center gap-2">
                                    <RiListUnordered className="font-semibold" />
                                    My Course
                                </NavLink>
                            </li>
                        </>
                    )}
                    {isAdmin && (
                        <>
                            <li>
                                <NavLink to="/dashboard/teacherRequest" className="flex items-center gap-2">
                                    <FaChalkboardTeacher />
                                    Teacher Request
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users" className="flex items-center gap-2">
                                    <FaUsers />
                                    Users
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/dashboardAllCourse" className="flex items-center gap-2">
                                    <FaList />
                                    All Course
                                </NavLink>
                            </li>
                        </>
                    )}
                    <li>
                        <NavLink to="/dashboard/out-stats" className="flex items-center gap-2">
                            <FaBoxesStacked />
                            Our Stats
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/profile" className="flex items-center gap-2">
                            <FaUserCircle />
                            Profile
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Sidebar Toggle Button (For small devices) */}
            <button
                className="fixed top-4 left-4 z-50 md:hidden bg-cyan-700 text-white p-2 rounded-full"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                <FaBars />
            </button>

            {/* Main Content */}
            <div className="flex-1 md:basis-4/5 p-6 bg-gray-100 md:ml-0 md:gap-12">
                <Outlet />
            </div>

            {/* Overlay for Sidebar (for small screens) */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                ></div>
            )}
        </div>
    );
};

export default DashboardLayout;
