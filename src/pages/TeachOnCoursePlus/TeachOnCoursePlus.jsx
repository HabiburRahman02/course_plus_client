import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";


const TeachOnCoursePlus = () => {
    const [checkUser, setCheckUser] = useState({});
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure()

    useEffect(() => {
        axiosSecure.get(`/teacherByEmail/${user?.email}`)
            .then(res => {
                setCheckUser(res?.data?.status);
            })
    }, [axiosSecure, user?.email])

    const admin = checkUser !== 'approved' && checkUser !== 'rejected' && checkUser !== 'pending'
    console.log(checkUser);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()

    const onSubmit = async (data) => {
        const teacherInfo = {
            ...data,
            status: 'pending'
        }
        const res = await axiosSecure.post('/teachers', teacherInfo)
        if (res.data.insertedId) {
            toast.success('Apply For join as an instructor')
            reset()
            window.location.reload()
        }
    }

    const handleRequestAgain = async () => {
        const res = await axiosSecure.patch(`/requestForPending/${user?.email}`)
        console.log(res.data);
        if (res.data.modifiedCount === 0) {
            toast.error('Already requested for teaching')
        }
        if (res.data.modifiedCount > 0) {
            toast.success(`Apply for teacher again`)
        }
    }

    return (
        <div>
            {admin && <div className="min-h-screen flex items-center justify-center py-12">
                <div className="max-w-4xl w-full dark:bg-gray-900 dark:text-white bg-white shadow-xl border border-gray-200  rounded-lg overflow-hidden p-8">
                    <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100">Teach On CoursePlus</h2>
                    <div>
                        <img className="rounded-full mx-auto my-6 w-32 object-cover h-32" src={user?.photoURL} alt="" />
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">Name</label>
                                <input
                                    {...register("name", { required: true })}
                                    type="text"
                                    name="name"
                                    defaultValue={user?.displayName}
                                    className="focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 input input-bordered w-full mt-1 dark:bg-gray-800"
                                />
                                {errors.name?.type === 'required' && <span className='text-red-500'>Name field is required</span>}
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    {...register("email", { required: true })}
                                    type="email"
                                    name="email"
                                    defaultValue={user?.email}
                                    readOnly
                                    className="focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 input input-bordered w-full mt-1 bg-gray-100 cursor-not-allowed dark:bg-gray-800"
                                />
                            </div>

                            {/* Image (URL or File Upload) */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Profile Image URL</label>
                                <input
                                    {...register("image", { required: true })}
                                    defaultValue={user?.photoURL}
                                    type="url"
                                    name="image"
                                    readOnly
                                    placeholder="Enter profile image URL"
                                    className="focus:outline-none disabled bg-gray-100 focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 input input-bordered w-full mt-1 dark:bg-gray-800"
                                />
                                {errors.image?.type === 'required' && <span className='text-red-500'>Image field is required</span>}
                            </div>



                            {/* Experience */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Experience</label>
                                <select
                                    {...register("experience", { required: true })}
                                    name="experience"
                                    className="focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 select select-bordered w-full mt-1 dark:bg-gray-800"
                                >
                                    <option value="beginner">Beginner</option>
                                    <option value="mid-level">Mid-Level</option>
                                    <option value="experienced">Experienced</option>
                                </select>
                                {errors.experience?.type === 'required' && <span className='text-red-500'>Experience field is required</span>}
                            </div>

                            {/* Title */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Title</label>
                                <input
                                    {...register("title", { required: true })}
                                    type="text"
                                    name="title"
                                    placeholder="Enter your title"
                                    className="focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 input input-bordered w-full mt-1 dark:bg-gray-800"
                                />
                                {errors.title?.type === 'required' && <span className='text-red-500'>Password field is required</span>}
                            </div>

                            {/* Category */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Category</label>
                                <select
                                    {...register("category", { required: true })}
                                    name="category"
                                    className="focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 select select-bordered w-full mt-1 dark:bg-gray-800"
                                >
                                    <option value="web development">Web Development</option>
                                    <option value="digital marketing">Digital Marketing</option>
                                    <option value="graphic design">Graphic Design</option>
                                    <option value="data science">Data Science</option>
                                    <option value="content writing">Content Writing</option>
                                </select>
                                {errors.category?.type === 'required' && <span className='text-red-500'>Password field is required</span>}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center mt-8">
                            <button
                                type="submit"
                                className="font-semibold bg-cyan-700 hover:bg-cyan-800 text-white px-8 py-4 rounded-lg w-full"
                            >
                                Submit For Review
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            }

            {checkUser === 'pending' && <h2 className="text-3xl font-bold pt-12 text-center">Your status pending now</h2>}
            {checkUser === 'approved' && <h2 className="text-3xl font-bold pt-12 text-center">Congratulation, Now you are an instructor</h2>}
            {checkUser === 'rejected' && <div className="mx-auto text-center">
                <h2 className="text-3xl font-bold pt-12 text-center">Sorry you are rejected</h2>
                <button
                    onClick={handleRequestAgain}
                    className="btn bg-cyan-700 hover:bg-cyan-800 text-white mx-auto text-center my-3">Request Again</button>
            </div>}
            {/* {admin && <h2 className="text-3xl font-bold pt-12 text-center">Oh man, you are a admin</h2>} */}

        </div>

    );
};

export default TeachOnCoursePlus;


