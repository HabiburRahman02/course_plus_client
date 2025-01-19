import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import CreateAssignment from "../../Modal/CreateAssignment";
import { useEffect, useState } from "react";


const SeeProgressDetails = () => {
    const axiosSecure = useAxiosSecure();
    // const [assignmentCounts, setAssignmentCounts] = useState([]);
    const { id } = useParams();
    // console.log('id from se progress', id);

    // useEffect(() => {
    //     axiosSecure.get(`/assignments/${id}`)
    //         .then(res => {
    //             setAssignmentCounts(res.data);
    //         })
    // }, [axiosSecure, id])

    const { data: assignmentCounts = [], refetch } = useQuery({
        queryKey: ['assignments', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/assignments/${id}`)
            return res.data;
        }
    })



    const { data: enrollmentCount = 0 } = useQuery({
        queryKey: ['courseCount', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/courseCount/${id}`)
            return res.data;
        }
    })

    return (
        <div className="mx-12">
            <div className="md:flex justify-between gap-6 px-10 mt-6">
                <div className="w-full bg-white shadow-lg p-6 rounded-lg mt-6">
                    <h2 className="text-xl font-semibold mb-2">Total Enrollment</h2>
                    <p className="text-2xl font-bold">{enrollmentCount.totalEnrollment}</p>
                </div>
                <div className="w-full bg-white shadow-lg p-6 rounded-lg mt-6">
                    <h2 className="text-xl font-semibold mb-2">Total Assignments</h2>
                    <p className="text-2xl font-bold">{assignmentCounts?.length}</p>
                </div>
                <div className="w-full bg-white shadow-lg p-6 rounded-lg mt-6">
                    <h2 className="text-xl font-semibold mb-2">Total Submits</h2>
                    <p className="text-2xl font-bold">{30}</p>
                </div>
            </div>
            <div >
                {/* create assignment */}
                <button
                    onClick={() => document.getElementById('my_modal_1').showModal()}
                    className="btn my-4 btn-secondary rounded-full">Create Assignment</button>
            </div>
            <CreateAssignment refetch={refetch}></CreateAssignment>
        </div>
    );
};

export default SeeProgressDetails;