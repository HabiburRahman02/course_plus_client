import useAuth from "../hooks/useAuth";

const DashboardForAllUser = () => {
    const { user } = useAuth();
    return (
        <div>
            <div className="mx-auto text-center">
                <h1 className="text-3xl font-bold">Welcome To Dashboard</h1>
                <p className="font-medium text-lg mt-2">Hi, {user?.displayName} you can manage you all info</p>
            </div>
        </div>
    );
};

export default DashboardForAllUser;