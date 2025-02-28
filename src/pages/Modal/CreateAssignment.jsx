import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";


const CreateAssignment = ({ refetch }) => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { id } = useParams();


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        // Close the modal after submission
        const modal = document.getElementById("my_modal_1");
        if (modal) {
            modal.close();
        }
        const assignmentInfo = {
            ...data,
            email: user?.email,
            submissionCount: 0,
            courseId: id
        }

        const res = await axiosSecure.post('/assignments', assignmentInfo)
        if (res.data.insertedId) {
            reset()
            toast.success('Create a assignment')
            refetch()
        }
    };

    // modal close
    const handleModalClose = () => {
        const modal = document.getElementById("my_modal_1");
        if (modal) {
            modal.close();
        }
    }

    return (
        <div>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-bo">
                    <div className="min-h-screen flex items-center justify-center py-12">
                        <div className="max-w-4xl w-full bg-white shadow-xl border border-gray-200 dark:text-black rounded-lg overflow-hidden p-8">
                            <div className="text-end">
                                <button
                                    onClick={handleModalClose}
                                    className="btn bg-cyan-700 hover:bg-cyan-800 text-white rounded-full">
                                    <MdOutlineClose className="text-lg font-bold"></MdOutlineClose>
                                </button>
                            </div>
                            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
                                Add Assignment
                            </h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="grid">
                                    {/* Assignment Title */}
                                    <div>
                                        <label className="text-sm font-medium text-gray-700">
                                            Assignment Title
                                        </label>
                                        <input
                                            {...register("title", { required: "Title is required" })}
                                            type="text"
                                            placeholder="Enter assignment title"
                                            className="focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 input input-bordered w-full mt-1"
                                        />
                                        {errors.title && (
                                            <p className="text-red-500 text-sm">
                                                {errors.title.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Assignment Deadline */}
                                    <div>
                                        <label className="text-sm font-medium text-gray-700">
                                            Assignment Deadline
                                        </label>
                                        <input
                                            type="date"
                                            {...register("deadline", {
                                                required: "Deadline is required",
                                            })}
                                            className="focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 input input-bordered w-full mt-1"
                                        />
                                        {errors.deadline && (
                                            <p className="text-red-500 text-sm">
                                                {errors.deadline.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Assignment Description */}
                                    <div>
                                        <label className="text-sm font-medium text-gray-700">
                                            Assignment Description
                                        </label>
                                        <textarea
                                            {...register("description", {
                                                required: "Description is required",
                                            })}
                                            placeholder="Enter assignment description"
                                            rows="4"
                                            className="focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 input input-bordered w-full mt-1"
                                        ></textarea>
                                        {errors.description && (
                                            <p className="text-red-500 text-sm">
                                                {errors.description.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="btn bg-cyan-700 hover:bg-cyan-800 text-white mt-4"
                                    >
                                        Add Assignment
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default CreateAssignment;
