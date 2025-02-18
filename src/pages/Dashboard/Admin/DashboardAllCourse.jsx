import { toast } from "react-toastify";
import Heading from "../../../components/Heading";
import useAllCourse from "../../../hooks/useAllCourse";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const DashboardAllCourse = () => {
    const [courses, , refetch] = useAllCourse();
    const axiosSecure = useAxiosSecure();

    const handleApproved = async (id) => {
        const res = await axiosSecure.patch(`/allCoursesApproved/${id}`)
        if (res.data.modifiedCount > 0) {
            toast.success('Approved this course!!')
            refetch();
        }
    }

    const handleRejected = async (id) => {
        console.log(id);
        const res = await axiosSecure.patch(`/allCoursesRejected/${id}`)
        if (res.data.modifiedCount > 0) {
            toast.error('Rejected this course!!')
            refetch();
        }
    }

    return (
        <div className="pb-20 pt-10 bg-white px-6">
            <Heading title={`All Courses Request - ${courses?.length}`} />

            <div className="overflow-x-auto">
                <table className="table w-full table-auto bg-white shadow-md rounded-lg">
                    {/* Head */}
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">No.</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Image</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Title</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Email</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Description</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Status</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Action 1</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Action 2</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Progress</th>
                        </tr>
                    </thead>

                    {/* Body */}
                    <tbody>
                        {
                            courses?.map((course, i) => (
                                <tr key={course._id} className="border-b hover:bg-gray-50">
                                    <td className="px-4 py-2 text-sm text-gray-600">{i + 1}</td>
                                    <td className="px-4 py-2">
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={course.image}
                                                        alt="Course Thumbnail"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 text-sm text-gray-600">{course.title}</td>
                                    <td className="px-4 py-2 text-sm text-gray-600">{course.email}</td>
                                    <td className="px-4 py-2 text-sm text-gray-600">{course.description.slice(0, 30)}...</td>
                                    <td className="px-4 py-2">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${course.status === 'approved' ? 'bg-green-100 text-green-700' :
                                            course.status === 'rejected' ? 'bg-red-100 text-red-700' :
                                                course.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                                                    'bg-gray-100 text-gray-700'
                                            }`}>
                                            {course.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-2">
                                        <button
                                            onClick={() => handleApproved(course._id)}
                                            disabled={course.status === 'approved'}
                                            className={`btn ${course.status === 'approved' ? 'btn-disabled' : 'btn-secondary'}`}
                                        >
                                            Approve
                                        </button>
                                    </td>
                                    <td className="px-4 py-2">
                                        <button
                                            onClick={() => handleRejected(course._id)}
                                            disabled={course.status === 'rejected'}
                                            className={`btn ${course.status === 'rejected' ? 'btn-disabled' : 'btn-accent'}`}
                                        >
                                            Reject
                                        </button>
                                    </td>
                                    <td className="px-4 py-2">
                                        {course.status === 'approved' ? (
                                            <button className="btn btn-primary">Progress</button>
                                        ) : (
                                            <button className="btn btn-primary" disabled>Progress</button>
                                        )}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>


    );
};

export default DashboardAllCourse;