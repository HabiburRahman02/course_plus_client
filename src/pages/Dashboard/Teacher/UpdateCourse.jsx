import { useForm } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { toast } from 'react-toastify';

const UpdateCourse = () => {
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const course = useLoaderData();
    const { name, image, description, email, price, status, title, _id } = course || {}


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const updateCourse = {
            ...data,
            status
        }
        axiosSecure.patch(`/updateCourse/${_id}`, updateCourse)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    toast.success('Update course successfully')
                    navigate('/dashboard/myCourse')
                }
                console.log(res.data);
            })
    };

    return (
        <div className="min-h-screen flex items-center justify-center py-12">
            <div className="max-w-4xl w-full bg-white shadow-xl border border-gray-200 dark:text-black rounded-lg overflow-hidden p-8">
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Update course</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Title */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Class Title</label>
                            <input
                                {...register('title', { required: 'Title is required' })}
                                type="text"
                                defaultValue={title}
                                placeholder="Enter class title"
                                className="focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 input input-bordered w-full mt-1"
                            />
                            {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
                        </div>

                        {/* Price */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Price</label>
                            <input
                                {...register('price', {
                                    required: 'Price is required',
                                    valueAsNumber: true,
                                })}
                                type="number"
                                defaultValue={price}
                                placeholder="Enter class price"
                                className="focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 input input-bordered w-full mt-1"
                            />
                            {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
                        </div>

                        {/* Image */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Image URL</label>
                            <input
                                {...register('image', { required: 'Image URL is required' })}
                                type="url"
                                defaultValue={image}
                                placeholder="Enter image URL"
                                className="focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 input input-bordered w-full mt-1"
                            />
                            {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
                        </div>

                        {/* Name (Read Only) */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                {...register('name')}
                                type="text"
                                readOnly
                                defaultValue={name}
                                className="focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 input input-bordered w-full mt-1 bg-gray-100 cursor-not-allowed"
                            />
                        </div>

                        {/* Email (Read Only) */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                {...register('email')}
                                type="email"
                                readOnly
                                defaultValue={email}
                                className="focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 input input-bordered w-full mt-1 bg-gray-100 cursor-not-allowed"
                            />
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mt-6">
                        <label className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            {...register('description', { required: 'Description is required' })}
                            defaultValue={description}
                            placeholder="Enter class description"
                            className="focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 textarea textarea-bordered w-full mt-1"
                        />
                        {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <div className="text-center mt-8">
                        <button
                            type="submit"
                            className="font-semibold bg-cyan-700 hover:bg-[#03816e] text-white px-8 py-4 rounded-lg w-full"
                        >
                            Update Course
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCourse;
