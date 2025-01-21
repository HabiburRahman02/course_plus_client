import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import StarRatings from "react-star-ratings";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";

const FeedbackModal = () => {
    const [rating, setRating] = useState(0);
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const navigate = useNavigate()

    console.log(rating);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        // Close the modal after submission
        const modal = document.getElementById("my_modal_2");
        if (modal) {
            modal.close();
        }

        const feedbackInfo = {
            name: user?.displayName,
            image: user?.photoURL,
            description: data.description,
            rating: rating
        }
        // console.log('feedback', feedbackInfo);

        const res = await axiosSecure.post('/feedbacks', feedbackInfo);
        if (res.data.insertedId) {
            toast.success('Successfully provide a feedback')
            navigate('/')
        }
    };

    // modal close
    const handleModalClose = () => {
        const modal = document.getElementById("my_modal_2");
        if (modal) {
            modal.close();
        }
    }

    return (
        <div>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-bo">
                    <div className="min-h-screen flex items-center justify-center py-12">
                        <div className="max-w-4xl w-full bg-white shadow-xl border border-gray-200 dark:text-black rounded-lg overflow-hidden p-8">
                            <div className="text-end">
                                <button
                                    onClick={handleModalClose}
                                    className="btn bg-cyan-700 hover:bg-cyan-800 text-white rounded-full">
                                    <MdOutlineClose></MdOutlineClose>
                                </button>
                            </div>
                            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
                                Provide a feedback
                            </h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="grid">

                                    {/* Assignment Description */}
                                    <div>
                                        <label className="text-sm font-medium text-gray-700">
                                            Feedback Description
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

                                    {/* star */}
                                    <div className="py-2">
                                        <StarRatings
                                            rating={rating}
                                            starRatedColor={rating > 0 ? "green" : "gray"}
                                            changeRating={(newRating) => setRating(newRating)}
                                            numberOfStars={5}
                                            name="rating"
                                            starHoverColor="green"
                                            starDimension="30px"
                                        />
                                    </div>
                                    <p>Rating: {rating}</p>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="btn bg-cyan-700 text-white hover:bg-cyan-800 mt-3"
                                    >
                                        Submit for Feedback
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

export default FeedbackModal;