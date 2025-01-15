import { Outlet } from "react-router-dom";
import Navbar from "../pages/Home/shared/Navbar";

const MainLayout = () => {

    return (
        <div>
            <div className="mb-[88px]">
                <Navbar></Navbar>
            </div>
            <div className="max-w-[1400px] mx-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;