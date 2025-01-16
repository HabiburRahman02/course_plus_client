import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useParams } from "react-router-dom";


const SeeProgressDetails = () => {
    const axiosSecure = useAxiosSecure();
    const [enrollmentCount, setEnrollMentCount] = useState(0);
    const { id } = useParams();

    useEffect(() => {
        axiosSecure.get(`/courseCount/${id}`)
            .then(res => {
                setEnrollMentCount(res.data);
            })
    }, [axiosSecure, id])

    return (
        <div>
            <div className="md:flex justify-between gap-6 px-10 mt-6">
                <div className="w-full bg-white shadow-lg p-6 rounded-lg mt-6">
                    <h2 className="text-xl font-semibold mb-2">Total Enrollment</h2>
                    <p className="text-2xl font-bold">{enrollmentCount.totalEnrollment}</p>
                </div>
                <div className="w-full bg-white shadow-lg p-6 rounded-lg mt-6">
                    <h2 className="text-xl font-semibold mb-2">Total Assignments</h2>
                    <p className="text-2xl font-bold">{20}</p>
                </div>
                <div className="w-full bg-white shadow-lg p-6 rounded-lg mt-6">
                    <h2 className="text-xl font-semibold mb-2">Total Submits</h2>
                    <p className="text-2xl font-bold">{30}</p>
                </div>
            </div>
        </div>
    );
};

export default SeeProgressDetails;