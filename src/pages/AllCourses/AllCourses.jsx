import CourseCard from "./CourseCard";
import useCourse from "../../hooks/useCourse";
import Heading from "../../components/Heading";

const AllCourses = () => {
    const [courses] = useCourse();
    return (
        <div className="pb-20 pt-10">
            <Heading
                title={` All Courses: ${courses?.length}`}
            > </Heading>
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