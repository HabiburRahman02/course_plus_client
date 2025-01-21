import Heading from "../../components/Heading";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const StatsSection = () => {
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
            <div className="flex flex-col md:flex-row justify-between items-center gap-20 px-8 md:p-0">
                {/* Left side - Stats */}
                <div className="w-full md:w-1/2 lg:w-1/2 mb-8 text-center">
                    <div className="bg-white shadow-lg p-6 rounded-lg">
                        <h2 className="text-xl font-semibold mb-2">Total Users</h2>
                        <p className="text-2xl font-bold">{info.userCount}</p>
                    </div>
                    <div className="bg-white shadow-lg p-6 rounded-lg mt-6">
                        <h2 className="text-xl font-semibold mb-2">Total Course</h2>
                        <p className="text-2xl font-bold">{info.courseCount}</p>
                    </div>
                    <div className="bg-white shadow-lg p-6 rounded-lg mt-6">
                        <h2 className="text-xl font-semibold mb-2">Total Student Enrollments</h2>
                        <p className="text-2xl font-bold">{info.enrollCount}</p>
                    </div>
                </div>

                {/* Right side - Image */}
                <div className="w-full md:w-1/2 lg:w-1/2 mb-8">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPnBx4VBO2U3ENHuWjK5oVkvspLpu3uHyFCA&s"
                        alt="Website Image"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default StatsSection;
