import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/Home/shared/Navbar";
import Footer from "../shared/Footer";

const MainLayout = () => {
    const location = useLocation();
    const isBannerPage = location.pathname === "/";
    return (
        <div>
            <div className="mb-[83px]">
                <Navbar></Navbar>
            </div>
            <div className={`${isBannerPage ? "w-full" : "max-w-[1400px]"} mx-auto min-h-screen`}>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;