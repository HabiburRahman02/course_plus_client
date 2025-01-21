import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";


const Profile = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [newUser, setNewUser] = useState();
    console.log('user', newUser);

    useEffect(() => {
        axiosSecure.get(`/userSpecific/${user?.email}`)
            .then(res => {
                setNewUser(res.data);
            })
    }, [axiosSecure, user?.email])
    return (
        <div className="max-w-[1400px] mx-auto pt-20 px-2 md:px-0">
            <div className="card bg-base-100 max-w-[500px] drop-shadow-2xl rounded-none mx-auto">
                <h2 className="text-3xl font-semibold my-6 text-center">Profile</h2>
                <figure className="">
                    <img
                        className="w-full h-[300px] object-cover"
                        src={newUser?.image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-semibold mb-4 text-center mx-auto">Role: {newUser?.role}</h2>
                    <h2 className="card-title font-semibold">Name: {newUser?.name}</h2>
                    <p className="font-semibold text-gray-500">Email: {newUser?.email}</p>
                    <p className="font-semibold text-gray-500">Phone: Not set</p>

                    <button type="submit" className="bg-cyan-700 rounded-lg w-full mt-4 py-3 px-8  text-white font-bold hover:bg-[rgb(10,132,176)] transition-colors">
                        Update Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;