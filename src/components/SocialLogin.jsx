import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";


const SocialLogin = () => {
    const { googleLogin } = useAuth();

    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => {
                toast.success('Login user successfully')
                // navigate(location.state || '/')
            })
            .catch(error => {
                toast.error(error.message);
            })
    }
    return (
        <button
            onClick={handleGoogleLogin}
            className="btn btn-outline hover:text-black border border-blue-500 w-full hover:bg-gray-100">
            Continue with Google
        </button>
    );
};

export default SocialLogin;