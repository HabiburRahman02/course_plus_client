import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/logo/logo.png'
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";


const Navbar = () => {
    const { user, logOut } = useAuth();

    const handleDarkTheme = () => {
        document.documentElement.classList.toggle('dark')
    }

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
        <nav className="bg-cyan-700 text-white fixed z-50 top-0 w-full ">

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
                    <div className="flex items-center gap-6">
                        <div>
                            <Link to='/' className="font-semibold text-2xl flex items-center gap-2">
                                <img className="h-10" src={logo} alt="" />
                                <span className="hidden lg:block"> Course<span className="">Plus</span></span>
                            </Link>
                        </div>
                        <div className="mt-1">
                            <label className="swap swap-rotate">
                                {/* this hidden checkbox controls the state */}
                                <input onClick={handleDarkTheme} type="checkbox" className="theme-controller" value="synthwave" />

                                {/* sun icon */}
                                <svg
                                    className="swap-off h-7 w-7 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                                </svg>

                                {/* moon icon */}
                                <svg
                                    className="swap-on h-7 w-7 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                                </svg>
                            </label>
                        </div>
                    </div>
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