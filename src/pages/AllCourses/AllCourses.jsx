import { useLoaderData } from "react-router-dom";
import CourseCard from "./CourseCard";

const AllCourses = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div>
            All classes: {courses.length}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
                {
                    courses.map(course => <CourseCard
                        key={course._id}
                        course={course}
                    ></CourseCard>)
                }
            </div>
        </div>
    );
};

export default AllCourses;