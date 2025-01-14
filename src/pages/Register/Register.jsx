import Lottie from 'lottie-react';
import lottieImg from '../../assets/lottie/register.json'
import SocialLogin from '../../components/SocialLogin';
import { Link } from 'react-router-dom';
const Register = () => {


    // const handleRegister = e => {
    //     e.preventDefault();
    //     const form = e.target
    //     const formData = new FormData(form);
    //     const data = Object.fromEntries(formData.entries());
    //     const password = data.password;
    //     if (password.length < 6) {
    //         return toast.error('Password must be 6 character or longer')
    //     }

    //     const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    //     if (!regex.test(password)) {
    //         return toast.error('Password must be One uppercase & one lowercase')
    //     }

    //     createUser(data.email, data.password)
    //         .then(() => {
    //             toast.success('Create user successfully')
    //             navigate(location.state || '/')
    //         })
    //         .catch(error => {
    //             toast.error(error.message);
    //         })
    // }
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
                        Register Now
                    </h2>
                    <p className="text-gray-600 text-center mt-2">
                        Please register your account
                    </p>

                    <form className="mt-6">
                        {/* Email Input */}
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text font-medium">Name</span>
                            </label>
                            <input
                                name='name'
                                type="text"
                                placeholder="Enter your name"
                                className="input input-bordered w-full"

                            />
                        </div>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text font-medium">Photo Url</span>
                            </label>
                            <input
                                name='photoUrl'
                                type="text"
                                placeholder="Enter your photo url"
                                className="input input-bordered w-full"

                            />
                        </div>
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
                            Register
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="divider">OR</div>

                    {/* Social Login */}
                    <SocialLogin></SocialLogin>

                    {/* Redirect to Register */}
                    <p className="text-sm text-center text-gray-600 mt-4">
                        Already have an account?{" "}
                        <Link to="/login" className="text-primary hover:underline">
                            Login here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;