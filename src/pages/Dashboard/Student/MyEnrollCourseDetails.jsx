import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useParams } from "react-router-dom";

const MyEnrollCourseDetails = () => {
    const axiosSecure = useAxiosSecure();
    const id = useParams();
    console.log('id from details', id);
    const { data: assignments = [] } = useQuery({
        queryKey: ['assignments', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/assignments/${id}`)
            return res.data;
        }
    })

    return (
        <div>
            MyEnrollCourseDetails: {assignments.length}
        </div>
    );
};

export default MyEnrollCourseDetails;