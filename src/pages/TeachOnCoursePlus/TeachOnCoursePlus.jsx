import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";


const TeachOnCoursePlus = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

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
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center py-12">
            <div className="max-w-4xl w-full bg-white shadow-xl border border-gray-200 dark:text-black rounded-lg overflow-hidden p-8">
                <h2 className="text-3xl font-bold text-center text-gray-800">Teach On CoursePlus</h2>
                <div>
                    <img className="rounded-full mx-auto my-6 w-32 object-cover h-32" src={user?.photoURL} alt="" />
                </div>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                {...register("name", { required: true })}
                                type="text"
                                name="name"
                                defaultValue={user?.displayName}
                                className="focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 input input-bordered w-full mt-1"
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
                                className="focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 input input-bordered w-full mt-1 bg-gray-100 cursor-not-allowed"
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
                                className="focus:outline-none disabled bg-gray-100 focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 input input-bordered w-full mt-1"
                            />
                            {errors.image?.type === 'required' && <span className='text-red-500'>Image field is required</span>}
                        </div>



                        {/* Experience */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Experience</label>
                            <select
                                {...register("experience", { required: true })}
                                name="experience"
                                className="focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 select select-bordered w-full mt-1"
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
                                className="focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 input input-bordered w-full mt-1"
                            />
                            {errors.title?.type === 'required' && <span className='text-red-500'>Password field is required</span>}
                        </div>

                        {/* Category */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Category</label>
                            <select
                                {...register("category", { required: true })}
                                name="category"
                                className="focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 select select-bordered w-full mt-1"
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

    );
};

export default TeachOnCoursePlus;