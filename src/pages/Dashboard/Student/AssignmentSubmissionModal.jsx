import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useParams } from "react-router-dom";

const AssignmentSubmissionModal = ({ id }) => {
    const axiosSecure = useAxiosSecure();
    const params = useParams();
    console.log(params);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        // Close the modal after submission
        const modal = document.getElementById("my_modal_1");
        if (modal) {
            modal.close();
        }

        console.log('submission', id);

        return
        console.log('data from submission', { description: data.description });
        const res = await axiosSecure.post('/assignmentSubmission', { description: data.description })
        console.log(res.data);

    };
    return (
        <div>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-bo">
                    <div className="min-h-screen flex items-center justify-center py-12">
                        <div className="max-w-4xl w-full bg-white shadow-xl border border-gray-200 dark:text-black rounded-lg overflow-hidden p-8">
                            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
                                Assignment Submission
                            </h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="grid">

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
                                            rows={23}
                                            cols='40'
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
                                        className="btn bg-cyan-700 text-white hover:bg-cyan-800 mt-3"
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

export default AssignmentSubmissionModal;