import Heading from "../../../components/Heading";
import useTeacher from "../../../hooks/useTeacher";

const TeacherRequest = () => {
    const { teachers } = useTeacher();
    return (
        <div>
            <Heading title='All courses here'></Heading>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Email</th>
                            <th>Description</th>
                            <th>Action 1</th>
                            <th>Action 2</th>
                            <th>Progress</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            teachers?.map((course, i) => <tr key={course._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={course.image}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{course.title}</td>
                                <td>{course.email}</td>
                                <td>{course.description.slice(0, 10)}</td>
                                <td>{course.status}</td>
                                <td>
                                    <button
                                        // onClick={() => handleApproved(course._id)}
                                        disabled={course.status === 'approved'}
                                        className="btn btn-secondary" >Approve</button>
                                </td>
                                <td>
                                    <button
                                        // onClick={() => handleRejected(course._id)}
                                        disabled={course.status === 'rejected'}
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