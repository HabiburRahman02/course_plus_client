import { Outlet } from "react-router-dom";
import Navbar from "../pages/Home/shared/Navbar";

const MainLayout = () => {

    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-[1400px] mx-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;