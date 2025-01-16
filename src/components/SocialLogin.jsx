import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";


const SocialLogin = () => {
    const { googleLogin } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email,
                    image: result.user?.photoUrl,
                    role: 'student'
                }
                axiosPublic.post(`/users/${result.user?.email}`, userInfo)
                    .then(res => {
                        console.log('form register page', res.data);
                        toast.success('Login created successfully')
                        navigate(location.state || '/')
                    })
            })
            .catch(error => {
                toast.error(error.message);
            })
    }
    return (
        <button
            onClick={handleGoogleLogin}
            className="btn btn-outline hover:text-black border border-gray-300 w-full hover:bg-gray-100">
            Continue with Google
        </button>
    );
};

export default SocialLogin;