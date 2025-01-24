import { useForm } from "react-hook-form";
import { MdOutlineClose } from "react-icons/md";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const UpdateProfileModal = () => {
    const { updateUserProfile, user, setLoading } = useAuth();
    const axiosSecure = useAxiosSecure();
    console.log(user);
    const {
        register,
        handleSubmit,
        // formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        // Close the modal after submission
        const modal = document.getElementById("my_modal_2");
        if (modal) {
            modal.close();
        }
        const updateData = {
            name: data.name,
            photoUrl: data.photoUrl
        }

        if (user?.displayName === data.name && user?.photoURL === data.photoUrl) {
            toast.info('No changes made!');
            setLoading(false);
            return;
        }

        updateUserProfile(data.name, data.photoUrl)
            .then(() => {
                axiosSecure.patch(`/updateUser/${user?.email}`, updateData)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            toast.success('profile updated')
                            setLoading(false)
                        }
                    })
            })
            .catch(err => {
                console.log(err);
            })

    };

    // modal close
    const handleModalClose = () => {
        const modal = document.getElementById("my_modal_2");
        if (modal) {
            modal.close();
        }
    }


    return (
        <dialog id="my_modal_2" className="modal">
            <div className="modal-bo">
                <div className="min-h-screen flex items-center justify-center py-12">
                    {/* Width Customize */}
                    <div className="sm:w-[400px] md:w-[500px] lg:w-[600px] bg-white shadow-xl border border-gray-200 dark:text-black rounded-lg overflow-hidden p-8">
                        {/* Close Button */}
                        <div className="relative">
                            <button
                                onClick={handleModalClose}
                                className="btn absolute right-0 top-0 bg-cyan-700 hover:bg-cyan-800 text-white rounded-full">
                                <MdOutlineClose className="font-bold text-lg"></MdOutlineClose>
                            </button>
                        </div>
                        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
                            Update Profile
                        </h2>
                        <img src={user?.image} className="h-20 w-20 mx-auto rounded-full" alt="" />
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="grid">
                                {/* Name Field */}
                                <div>
                                    <label className="text-sm font-medium text-gray-700">Name</label>
                                    <input
                                        defaultValue={user?.displayName}
                                        {...register("name")}
                                        placeholder="Enter your name"
                                        className="focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 input input-bordered w-full mt-1"
                                    />
                                    {/* {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>} */}
                                </div>
                                {/* Photo URL */}
                                <div>
                                    <label className="text-sm font-medium text-gray-700">Photo Url</label>
                                    <input
                                        defaultValue={user?.photoURL}
                                        {...register("photoUrl")}
                                        placeholder="Enter your photoUrl"
                                        className="focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 input input-bordered w-full mt-1"
                                    />
                                    {/* {errors.photoUrl && <p className="text-red-500 text-sm">{errors.photoUrl.message}</p>} */}
                                </div>
                                {/* Email */}
                                <div>
                                    <label className="text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        defaultValue={user?.email}
                                        {...register("email")}
                                        placeholder="Enter your email"
                                        readOnly
                                        className="focus:outline-none focus:ring-1 focus:ring-indigo-400 bg-gray-100 focus:border-indigo-400 input input-bordered w-full mt-1"
                                    />
                                </div>
                                {/* Submit Button */}
                                <button type="submit" className="btn bg-cyan-700 text-white hover:bg-cyan-800 mt-3">
                                    Update Now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </dialog>

    );
};

export default UpdateProfileModal;