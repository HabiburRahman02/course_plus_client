import useAuth from "../../hooks/useAuth";


const TeachOnCoursePlus = () => {
    const { user } = useAuth();
    return (
        <div className="min-h-screen flex items-center justify-center py-12">
            <div className="max-w-4xl w-full bg-white shadow-xl border border-gray-200 dark:text-black rounded-lg overflow-hidden p-8">
                <h2 className="text-3xl font-bold text-center text-gray-800">Teach On CoursePlus</h2>
                <div>
                    <img className="rounded-full mx-auto my-6 w-32 object-cover h-32" src={user?.photoURL} alt="" />
                </div>
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                defaultValue={user?.displayName}
                                className="focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 input input-bordered w-full mt-1"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
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
                                defaultValue={user?.photoURL}
                                type="url"
                                name="image"
                                placeholder="Enter profile image URL"
                                className="focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 input input-bordered w-full mt-1"
                            />
                        </div>



                        {/* Experience */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Experience</label>
                            <select
                                name="experience"
                                className="focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 select select-bordered w-full mt-1"
                            >
                                <option value="beginner">Beginner</option>
                                <option value="mid-level">Mid-Level</option>
                                <option value="experienced">Experienced</option>
                            </select>
                        </div>

                        {/* Title */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Title</label>
                            <input
                                type="text"
                                name="title"
                                placeholder="Enter your title"
                                className="focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 input input-bordered w-full mt-1"
                            />
                        </div>

                        {/* Category */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Category</label>
                            <select
                                name="category"
                                className="focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 select select-bordered w-full mt-1"
                            >
                                <option value="web development">Web Development</option>
                                <option value="digital marketing">Digital Marketing</option>
                                <option value="graphic design">Graphic Design</option>
                                <option value="data science">Data Science</option>
                                <option value="content writing">Content Writing</option>
                            </select>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center mt-8">
                        <button
                            type="submit"
                            className="font-semibold bg-customGreen hover:bg-[#03816e] text-white px-8 py-4 rounded-lg w-full"
                        >
                            Submit Profile
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default TeachOnCoursePlus;