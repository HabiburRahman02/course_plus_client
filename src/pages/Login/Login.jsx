import Lottie from 'lottie-react';
import lottieImg from '../../assets/lottie/login.json'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../../components/SocialLogin';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-toastify';
import { IoCloseSharp } from 'react-icons/io5';


const Login = () => {
    const { loginUser } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)

        loginUser(data.email, data.password)
            .then(() => {
                // console.log(result);
                toast.success('Login user successfully')
                navigate(location.state || '/')
            })
            .catch(error => {
                // console.log(error);
                toast.error(error.message);
            })
    }

    return (
        <div className='dark:bg-gray-800 dark:text-white'>
            <div className="md:flex gap-12 min-h-screen dark:bg-gray-900 dark:text-white bg-white shadow-lg rounded-lg overflow-hidden items-center max-w-5xl mx-auto px-6 py-12">
                {/* Left Section: Image */}
                <div className="md:w-1/2 mb-6 md:mb-0">
                    <Lottie animationData={lottieImg} loop={true} />
                </div>

                {/* Right Section: Form */}
                <div className="md:w-1/2">
                    <div className='flex justify-between items-center'>
                        <p></p>
                        <Link to='/'>
                            <IoCloseSharp className='text-3xl font-medium hover:text-red-500 cursor-pointer'></IoCloseSharp>
                        </Link>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 text-center dark:text-gray-200">
                        Welcome Back
                    </h2>
                    <p className="text-gray-600 text-center mt-2 dark:text-gray-100">
                        Please login to your account
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                        {/* Email Input */}
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text font-medium dark:text-gray-100">Email</span>
                            </label>
                            <input
                                {...register("email", { required: true })}
                                name='email'
                                type="email"
                                placeholder="Enter your email"
                                className="input input-bordered w-full dark:bg-gray-800"
                            />
                            {errors.email?.type === 'required' && <span className='text-red-500'>Password field is required</span>}
                        </div>

                        {/* Password Input */}
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text font-medium dark:text-gray-100">Password</span>
                            </label>
                            <input
                                {...register("password", { required: true })}
                                name='password'
                                type="password"
                                placeholder="Enter your password"
                                className="input input-bordered w-full dark:bg-gray-800"
                            />
                            {errors.password?.type === 'required' && <span className='text-red-500'>Password field is required</span>}
                        </div>

                        {/* Login Button */}
                        <button type="submit" className=" bg-cyan-700 hover:bg-[#03816e] text-white px-8 py-4 rounded-lg w-full font-semibold">
                            Login
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="divider">OR</div>

                    {/* Social Login */}
                    <SocialLogin></SocialLogin>

                    {/* Redirect to Register */}
                    <p className="text-sm text-center text-gray-600 mt-4 dark:text-gray-100">
                        Don’t have an account?{" "}
                        <Link to="/register" className="text-primary hover:underline dark:text-blue-500">
                            Register here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;