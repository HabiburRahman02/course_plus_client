
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    // const { googleLogin } = useAuth();
    // const navigate = useNavigate();
    // const location = useLocation();

    // const handleGoogleLogin = () => {
    //     googleLogin()
    //         .then(() => {
    //             toast.success('Login user successfully')
    //             navigate(location.state || '/')
    //         })
    //         .catch(error => {
    //             toast.error(error.message);
    //         })
    // }
    return (
        <button
            className="btn btn-outline hover:text-black border border-blue-500 w-full hover:bg-gray-100">
            Continue with Google
        </button>
    );
};

export default SocialLogin;