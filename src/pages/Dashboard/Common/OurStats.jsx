import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Heading from "../../../components/Heading";
import StatChart from "./StatChart";


const OurStats = () => {
    const axiosPublic = useAxiosPublic();
    const [info, setInfo] = useState([]);

    useEffect(() => {
        axiosPublic.get('/countForApi')
            .then(res => {
                setInfo(res.data);
            })
    }, [axiosPublic])

    return (
        <div className="mb-20">
            <Heading title='Our CoursePlus Stats'></Heading>
            <div className="" >
                {/* Left side - Stats */}
                <div className="md:flex justify-between items-center gap-6">
                    <div className="bg-white shadow-lg p-6 rounded-lg w-full">
                        <h2 className="text-xl font-semibold mb-2">Total Users</h2>
                        <p className="text-2xl font-bold">{info.userCount}</p>
                    </div>
                    <div className="bg-white shadow-lg p-6 rounded-lg  w-full">
                        <h2 className="text-xl font-semibold mb-2">Total Course</h2>
                        <p className="text-2xl font-bold">{info.courseCount}</p>
                    </div>
                    <div className="bg-white shadow-lg p-6 rounded-lg w-full">
                        <h2 className="text-xl font-semibold mb-2">Total Student Enrollments</h2>
                        <p className="text-2xl font-bold">{info.enrollCount}</p>
                    </div>
                </div>
                <div>
                    {/* our stats */}
                    <StatChart></StatChart>
                </div>
            </div>
        </div>
    );
};

export default OurStats;
