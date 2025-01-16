import { useQuery } from "@tanstack/react-query";
import Heading from "../../../components/Heading";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const Users = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const handleMakeAdmin = async (user) => {
        const res = await axiosSecure.patch(`/user/admin/${user._id}`)
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
            refetch()
            toast.success(`${user.name} is an admin now`)
        }
    }
    return (
        <div>
            <Heading title='Users'></Heading>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
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
                                <td>{user.name}</td>
                                <td>
                                    {user.role === 'admin' ? 'Admin already' : <button
                                        onClick={() => handleMakeAdmin(user)}
                                        className="btn btn-ghost bg-gray-200">Make Admin</button>}
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

export default Users;