import { toast } from "react-toastify";
import Heading from "../../../components/Heading";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useTeacher from "../../../hooks/useTeacher";

const TeacherRequest = () => {
    const [teachers, , refetch] = useTeacher();
    const axiosSecure = useAxiosSecure();
    console.log(teachers);

    const handleApproved = async (id) => {
        const res = await axiosSecure.patch(`/allTeacherApproved/${id}`)
        if (res.data.modifiedCount > 0) {
            toast.success('Yah, Approved this instructor')
            refetch();
        }
    }
    const handleRejected = async (id) => {
        console.log(id);
        const res = await axiosSecure.patch(`/allTeacherRejected/${id}`)
        if (res.data.modifiedCount > 0) {
            toast.error('Rejected this Instructor!!')
            refetch();
        }
    }
    return (
        <div>
            <Heading title={`Total teacher request - ${teachers?.length}`}></Heading>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>experience</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Status</th>
                            <th>Action 1</th>
                            <th>Action 2</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            teachers?.map((teacher, i) => <tr key={teacher._id}>
                                <th>{i + 1}</th>
                                <td>{teacher.name}</td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={teacher.image}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{teacher.experience}</td>
                                <td>{teacher.title}</td>
                                <td>{teacher.category}</td>
                                <td>{teacher.status}</td>
                                <td>
                                    {
                                        teacher.status === 'rejected' ? <button disabled className="btn btn-secondary">Approve</button> : <button
                                            onClick={() => handleApproved(teacher._id)}
                                            className="btn btn-secondary" >Approve</button>
                                    }
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleRejected(teacher._id)}
                                        disabled={teacher.status === 'rejected'}
                                        className="btn btn-accent">Reject</button>
                                </td>

                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TeacherRequest;