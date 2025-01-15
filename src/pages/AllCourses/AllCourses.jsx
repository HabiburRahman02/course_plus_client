import CourseCard from "./CourseCard";
import useCourse from "../../hooks/useCourse";

const AllCourses = () => {
    const [courses] = useCourse();
    return (
        <div>
            All Courses: {courses?.length}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
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