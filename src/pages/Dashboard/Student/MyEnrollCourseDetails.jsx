import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useParams } from "react-router-dom";
import Heading from "../../../components/Heading";
import AssignmentSubmissionModal from "./AssignmentSubmissionModal";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const MyEnrollCourseDetails = () => {
    const [assId, setAssId] = useState('')
    const axiosSecure = useAxiosSecure();
    const { id } = useParams();

    const { data: assignments = [], refetch } = useQuery({
        queryKey: ['assignments', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/assignmentsByCourseId/${id}`)
            return res.data;
        }
    })

    console.log(assignments);


    return (
        <div>
            <div>
                <button className="btn bg-cyan-700 hover:bg-cyan-800 text-white px-6 rounded-full">
                    <FaPlus></FaPlus>
                    Feedback Us
                </button>
            </div>
            <Heading title={`Total assignments - ${assignments?.length}`}></Heading>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Marks</th>
                            <th>Deadline</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            assignments?.map((ass, i) => <tr key={ass._id}>
                                <th>{i + 1}</th>
                                <td>{ass.title}</td>
                                <td>{ass.description.slice(0, 30)}</td>
                                <td>{ass.marks} coming soon</td>
                                <td>{ass.deadline}</td>
                                <td>
                                    <button
                                        disabled={ass.submissionCount > 0}
                                        onClick={() => {
                                            document.getElementById('my_modal_1').showModal()
                                            setAssId(ass._id)
                                        }}
                                        className="btn bg-cyan-700 text-white hover:bg-cyan-800 my-4 px-6">Submit</button>
                                    {/* <button
                                        onClick={() => handleAssignmentSubmit(ass._id)}
                                        className="btn bg-cyan-700 text-white hover:bg-cyan-800">Submit</button> */}
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
                <AssignmentSubmissionModal assId={assId} refetch={refetch}></AssignmentSubmissionModal>
            </div>
        </div>
    );
};

export default MyEnrollCourseDetails;