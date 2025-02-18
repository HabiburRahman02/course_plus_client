import { toast } from "react-toastify";
import Heading from "../../../components/Heading";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useTeacher from "../../../hooks/useTeacher";

const TeacherRequest = () => {
    const [teachers, , refetch] = useTeacher();
    const axiosSecure = useAxiosSecure();


    const handleApproved = async (id) => {
        const res = await axiosSecure.patch(`/allTeacherApproved/${id}`)
        if (res.data.modifiedCount > 0) {
            toast.success('Yah, Approved this instructor')
            refetch();
        }
    }

    const handleUserRole = async (email) => {
        const res = await axiosSecure.patch(`/user/teacher/${email}`)
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
            refetch()
            toast.success(` is an teacher now`)
        }
    }

    const handleUserRoleStudent = async (email) => {
        const res = await axiosSecure.patch(`/user/student/${email}`)
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
            refetch()
            // toast.success(`Rejected this instructor`)
        }
    }

    const handleRejected = async (id) => {
        const res = await axiosSecure.patch(`/allTeacherRejected/${id}`)
        if (res.data.modifiedCount > 0) {
            toast.error('Rejected this Instructor!!')
            refetch();
        }
    }
    return (
        <div className="p-6 bg-white rounded-lg shadow-lg">
            <Heading title={`Total Teacher Requests - ${teachers?.length}`} />

            <div className="overflow-x-auto mt-4">
                <table className="table w-full table-auto text-sm text-gray-700">
                    {/* Head */}
                    <thead>
                        <tr className="text-gray-600 bg-gray-100 border-b">
                            <th className="p-3 text-left">No.</th>
                            <th className="p-3 text-left">Name</th>
                            <th className="p-3 text-left">Image</th>
                            <th className="p-3 text-left">Experience</th>
                            <th className="p-3 text-left">Title</th>
                            <th className="p-3 text-left">Category</th>
                            <th className="p-3 text-left">Status</th>
                            <th className="p-3 text-center">Action 1</th>
                            <th className="p-3 text-center">Action 2</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            teachers?.map((teacher, i) => (
                                <tr key={teacher._id} className="hover:bg-gray-50 transition-all">
                                    <td className="p-3">{i + 1}</td>
                                    <td className="p-3">{teacher.name}</td>
                                    <td className="p-3">
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img src={teacher.image} alt={teacher.name} />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-3">{teacher.experience} years</td>
                                    <td className="p-3">{teacher.title}</td>
                                    <td className="p-3">{teacher.category}</td>
                                    <td className="p-3">
                                        <span className={`px-2 py-1 text-xs rounded-full ${teacher.status === 'approved' ? 'bg-green-100 text-green-700' : teacher.status === 'rejected' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                            {teacher.status}
                                        </span>
                                    </td>
                                    <td className="p-3 text-center">
                                        {teacher.status === 'rejected' ? (
                                            <button disabled className="btn btn-sm btn-disabled">Approve</button>
                                        ) : (
                                            <button
                                                onClick={() => {
                                                    handleApproved(teacher._id);
                                                    handleUserRole(teacher.email);
                                                }}
                                                className="btn btn-sm btn-primary">Approve</button>
                                        )}
                                    </td>
                                    <td className="p-3 text-center">
                                        <button
                                            onClick={() => {
                                                handleRejected(teacher._id);
                                                handleUserRoleStudent(teacher.email);
                                            }}
                                            disabled={teacher.status === 'rejected'}
                                            className="btn btn-sm btn-accent">Reject</button>
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

export default TeacherRequest;