import { Outlet } from "react-router-dom";
import Navbar from "../pages/Home/shared/Navbar";
import Footer from "../shared/Footer";

const MainLayout = () => {

    return (
        <div>
            <div className="mb-[88px]">
                <Navbar></Navbar>
            </div>
            <div className="max-w-[1400px] mx-auto min-h-60">
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;