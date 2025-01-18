import { useQuery } from "@tanstack/react-query";
import Heading from "../../../components/Heading";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import MyEnrollCourseCard from "./MyEnrollCourseCard";

const MyEnrollCourse = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure();
    const { data: courses = [] } = useQuery({
        queryKey: ['courses'],
        queryFn: async () => {
            const data = await axiosSecure.get(`/myEnrollCourse/${user?.email}`);
            return data.data
        }
    })

    return (
        <div>
            <Heading title={`My enroll courses - ${courses?.length}`}></Heading>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    courses.map(course => <MyEnrollCourseCard
                        key={course._id}
                        course={course}
                    ></MyEnrollCourseCard>)
                }
            </div>
        </div>
    );
};

export default MyEnrollCourse;