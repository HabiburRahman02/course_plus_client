import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Heading from "../../../components/Heading";
import MyCourseCard from "./MyCourseCard";

const MyCourse = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [myCourse, setMyCourse] = useState([])

    useEffect(() => {
        axiosSecure.get(`/course/${user?.email}`)
            .then(res => {
                console.log(res.data);
                setMyCourse(res.data);
            })
    }, [axiosSecure, user?.email])

    return (
        <div>
            <Heading title='My all courses here'></Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                {
                    myCourse?.map(course => <MyCourseCard
                        key={course._id}
                        course={course}
                    ></MyCourseCard>)
                }
            </div>
        </div>
    );
};

export default MyCourse;