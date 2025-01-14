import Lottie from 'lottie-react';
import lottieImg from '../../assets/lottie/login.json'
import { Link } from 'react-router-dom';
import SocialLogin from '../../components/SocialLogin';


const Login = () => {

    const handleLogin = e => {


    }
    return (
        <div>
            <div className="md:flex gap-12 min-h-screen bg-white dark:text-black shadow-lg rounded-lg overflow-hidden items-center max-w-5xl mx-auto px-6 py-12">
                {/* Left Section: Image */}
                <div className="md:w-1/2 mb-6 md:mb-0">
                    <Lottie animationData={lottieImg} loop={true} />
                </div>

                {/* Right Section: Form */}
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold text-gray-800 text-center">
                        Welcome Back
                    </h2>
                    <p className="text-gray-600 text-center mt-2">
                        Please login to your account
                    </p>

                    <form onSubmit={handleLogin} className="mt-6">
                        {/* Email Input */}
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text font-medium">Email</span>
                            </label>
                            <input
                                name='email'
                                type="email"
                                placeholder="Enter your email"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        {/* Password Input */}
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text font-medium">Password</span>
                            </label>
                            <input
                                name='password'
                                type="password"
                                placeholder="Enter your password"
                                className="input input-bordered w-full"
                                required
                            />
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
                    <p className="text-sm text-center text-gray-600 mt-4">
                        Don’t have an account?{" "}
                        <Link to="/register" className="text-primary hover:underline">
                            Register here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;