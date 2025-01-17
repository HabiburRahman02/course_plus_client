import Heading from "../../../components/Heading";
import useAllCourse from "../../../hooks/useAllCourse";


const DashboardAllCourse = () => {
    const [courses, loading, refetch] = useAllCourse();
    console.log(courses);
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
                            courses?.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={user.image}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{user.title}</td>
                                <td>{user.email}</td>
                                <td>{user.description.slice(0, 10)}</td>
                                <td>{user.status}</td>
                                <td>
                                    <button className="btn btn-secondary">Approve</button>
                                </td>
                                <td>
                                    <button className="btn btn-accent">Reject</button>
                                </td>
                                <td>
                                    <button className="btn btn-primary">Progress</button>
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

export default DashboardAllCourse;