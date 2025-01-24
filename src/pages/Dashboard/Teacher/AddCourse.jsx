import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddCourse = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const addCourse = {
            ...data,
            totalEnrollment: 0,
            status: 'pending'
        }
        axiosSecure.post('/courses', addCourse)
            .then(res => {
                if (res.data.insertedId) {
                    toast.success('Course added successfully')
                    navigate('/dashboard/myCourse')
                }
            })
    };

    return (
        <div className="min-h-screen flex items-center justify-center py-12">
            <div className="max-w-4xl w-full bg-white shadow-xl border border-gray-200 dark:text-black rounded-lg overflow-hidden p-8">
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Add a new course</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Title */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Class Title</label>
                            <input
                                {...register('title', { required: 'Title is required' })}
                                type="text"
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
                                value={user?.displayName}
                                className="focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 input input-bordered w-full mt-1 bg-gray-100 cursor-not-allowed"
                            />
                        </div>
                    </div>
                    {/* Email (Read Only) */}
                    <div className='mt-6'>
                        <label className="block w-full text-sm font-medium text-gray-700">Email</label>
                        <input
                            {...register('email')}
                            type="email"
                            readOnly
                            value={user?.email}
                            className="focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 input input-bordered w-full mt-1 bg-gray-100 cursor-not-allowed"
                        />
                    </div>
                    {/* Description */}
                    <div className="mt-6">
                        <label className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            {...register('description', { required: 'Description is required' })}
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
                            Add Course
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCourse;
