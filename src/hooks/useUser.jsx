import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useUser = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: userForStatus = {} } = useQuery({
        queryKey: ['userSpecific'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/userSpecific/${user?.email}`);
            return res.data;
        }
    })
    return [userForStatus]

};

export default useUser;