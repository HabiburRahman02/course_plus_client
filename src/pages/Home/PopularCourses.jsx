import { useEffect, useState } from "react";
import Heading from "../../components/Heading";
import CourseCard from "../AllCourses/CourseCard";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const PopularCourses = () => {
    const [courses, setCourses] = useState([]);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        axiosPublic.get('/popular-courses')
            .then(res => {
                setCourses(res.data)
            })
    }, [axiosPublic])
    return (
        <div className="mb-20">
            <Heading title='Popular Courses'> </Heading>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {
                        courses?.map(course => <CourseCard
                            key={course._id}
                            course={course}
                        ></CourseCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default PopularCourses;