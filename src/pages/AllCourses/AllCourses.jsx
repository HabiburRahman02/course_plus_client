import CourseCard from "./CourseCard";
import Heading from "../../components/Heading";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";

const AllCourses = () => {
    const [courses, setCourse] = useState();
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        axiosPublic.get('/courses')
            .then(res => setCourse(res.data))
    }, [])

    const handleSort = (e) => {
        console.log('Event target:', e.target);
        console.log('Selected value:', e.target.value);
        axiosPublic.get(`/courses?sortOrder=${e.target.value}`)
            .then(res => setCourse(res.data))
            .catch(error => console.error("Error fetching courses:", error));
    }

    return (
        <div className="pb-20 pt-10">
            <div className="md:flex justify-between">
                <Heading
                    title={` All Courses: ${courses?.length}`}
                > </Heading>
                <select onChange={handleSort} className="select w-full md:max-w-xs mb-8 md:mb-0 border-blue-500">
                    <option disabled selected>Would you like to sort?</option>
                    <option value={'asc'}>Low Price Courses</option>
                    <option value={'desc'}>High Price Courses</option>
                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
                {
                    courses?.map(course => <CourseCard
                        key={course._id}
                        course={course}
                    ></CourseCard>)
                }
            </div>
        </div>
    );
};

export default AllCourses;