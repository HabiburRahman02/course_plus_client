import Lottie from 'lottie-react';
import lottieImg from '../../assets/lottie/register.json'
import SocialLogin from '../../components/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-toastify';

const Register = () => {
    const { createUser } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        if (data.password.length < 6) {
            return toast.error('Password must be 6 character or longer')
        }

        createUser(data.email, data.password)
            .then((result) => {
                console.log(result);
                toast.success('User created successfully')
                navigate(location.state || '/')
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message);
            })
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
                        Register Now
                    </h2>
                    <p className="text-gray-600 text-center mt-2">
                        Please register your account
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                        {/* Email Input */}
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text font-medium">Name</span>
                            </label>
                            <input
                                {...register("name", { required: true })}
                                name='name'
                                type="text"
                                placeholder="Enter your name"
                                className="input input-bordered w-full"

                            />
                            {errors.name && <span className='text-red-500'>Name field is required</span>}
                        </div>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text font-medium">Photo Url</span>
                            </label>
                            <input
                                {...register("photoUrl", { required: true })}
                                name='photoUrl'
                                type="text"
                                placeholder="Enter your photo url"
                                className="input input-bordered w-full"
                            />
                            {errors.photoUrl && <span className='text-red-500'>PhotoUrl field is required</span>}
                        </div>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text font-medium">Email</span>
                            </label>
                            <input
                                {...register("email", { required: true })}
                                name='email'
                                type="email"
                                placeholder="Enter your email"
                                className="input input-bordered w-full"
                            />
                            {errors.email && <span className='text-red-500'>Email field is required</span>}
                        </div>

                        {/* Password Input */}
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text font-medium">Password</span>
                            </label>
                            <input
                                {...register("password", { required: true, minLength: 6, maxLength: 10 })}
                                name='password'
                                type="password"
                                placeholder="Enter your password"
                                className="input input-bordered w-full"
                            />
                            {errors.password?.type === 'required' && <span className='text-red-500'>Password field is required</span>}
                            {errors.password?.type === 'minLength' && <span className='text-red-500'>Min 6 length must be added</span>}
                            {errors.password?.type === 'maxLength' && <span className='text-red-500'>Max 10 length added</span>}
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