import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/logo/logo.png'
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";


const Navbar = () => {
    const { user, logOut } = useAuth();

    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success('Logout user successfully')
            })
            .catch(error => {
                toast.error(error.message);
            })
    }

    return (
        <nav className="dark:text-white dark:bg-gray-700 bg-cyan-700 text-white fixed z-50 top-0 w-full ">

            <div className={` navbar max-w-[1400px] mx-auto py-5`}>
                <div className="flex-1">
                    {/* only sm device */}
                    <div className="navbar-start  block md:hidden">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h7" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content dark:text-black text-black font-medium z-50 mt-3 w-52 p-4 space-y-2 shadow bg-white">
                                <li>
                                    <NavLink to='/' className={({ isActive }) => `hover:text-cyan-700 duration-500  ${isActive && 'text-cyan-700'}`}>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to='allCourses' className={({ isActive }) => `hover:text-cyan-700 duration-500 ${isActive && 'text-cyan-700'}`}>All Courses</NavLink>
                                </li>
                                <li>
                                    <NavLink to='teachOnCoursePlus' className={({ isActive }) => `hover:text-cyan-700 duration-500 ${isActive && 'text-cyan-700'}`}>Teach on CoursePlus</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link to='/' className="font-semibold text-2xl flex items-center gap-2">
                        <img className="" src={logo} alt="" />
                        <span className="hidden lg:block"> Course<span className="">Minus</span></span>
                    </Link>
                </div>

                <div className="flex-none gap-2">
                    <ul className="flex items-center gap-2 md:gap-6 font-medium ">
                        <li>
                            <NavLink to='/' className={({ isActive }) => ` duration-500 hidden md:block hover:text-orange-200 ${isActive && ' text-orange-200'}`}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='allCourses' className={({ isActive }) => ` hidden md:block duration-500 hover:text-orange-200 ${isActive && ' text-orange-200'}`}>All Courses</NavLink>
                        </li>
                        <li>
                            <NavLink to='teachOnCoursePlus' className={({ isActive }) => ` hidden md:block duration-500 hover:text-orange-200 ${isActive && ' text-orange-200'}`}>Teach On CoursePlus</NavLink>
                        </li>
                    </ul>
                    <div>
                        {!user &&
                            <>
                                <Link to='/login'>
                                    <button className="bg-white border-[2px] hover:border-white duration-500 border-transparent hover:border-[2px] hover:bg-transparent hover:text-white text-black font-medium px-8 py-2 rounded-full">Login</button>
                                </Link>
                            </>
                        }
                    </div>
                    {user &&
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        title={user?.displayName}
                                        alt="Image"
                                        src={`${user?.photoURL || 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'}`} />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 dark:text-black text-black font-medium space-y-2 z-50 mt-3 w-52 p-4 shadow">

                                <li>Name - {user?.displayName}</li>

                                {/* <NavLink to='/dashboard' className={({ isActive }) => `hover:text-customGreen duration-500 ${isActive && 'text-customGreen'}`}>Dashboard</NavLink> */}

                                <NavLink to='/dashboard'>
                                    <button
                                        className="bg-cyan-700 hover:bg-cyan-800 text-white px-8 py-2 text-center inline rounded-lg w-full">Dashboard</button>
                                </NavLink>
                                <button
                                    onClick={handleLogout}
                                    className="bg-cyan-700 hover:bg-cyan-800 text-white px-8 py-2 text-center rounded-lg inline w-full">Logout</button>
                            </ul>
                        </div>
                    }
                </div>

            </div>
        </nav>
    );
};

export default Navbar;