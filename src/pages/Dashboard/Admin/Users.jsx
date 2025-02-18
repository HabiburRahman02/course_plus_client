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



    console.log(users, 'form dashboard user');

    const handleMakeAdmin = async (user) => {
        const res = await axiosSecure.patch(`/user/admin/${user._id}`)
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
            refetch()
            toast.success(`${user.name} is an admin now`)
        }
    }

    return (
        <div className="p-6 bg-white rounded-lg shadow-xl">
            <Heading title={`Total Users - ${users?.length}`} />

            <div className="overflow-x-auto mt-4">
                <table className="table w-full table-auto text-sm text-gray-700">
                    {/* Head */}
                    <thead>
                        <tr className="text-gray-600 bg-gray-100 border-b">
                            <th className="p-3 text-left">No.</th>
                            <th className="p-3 text-left">Name</th>
                            <th className="p-3 text-left">Image</th>
                            <th className="p-3 text-left">Email</th>
                            <th className="p-3 text-left">Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, i) => (
                                <tr key={user._id} className="hover:bg-gray-50 transition-all">
                                    <td className="p-3">{i + 1}</td>
                                    <td className="p-3">{user.name}</td>
                                    <td className="p-3">
                                        <div className="flex items-center justify-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={user.image}
                                                        alt="User Avatar"
                                                        className="object-cover rounded-full"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-3">{user.email}</td>
                                    <td className="p-3">
                                        {user.role === 'admin' ? (
                                            <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">
                                                Admin Already
                                            </span>
                                        ) : (
                                            <button
                                                onClick={() => handleMakeAdmin(user)}
                                                className="btn btn-sm btn-ghost bg-gray-200 text-gray-700 hover:bg-gray-300"
                                            >
                                                Make Admin
                                            </button>
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

export default Users;