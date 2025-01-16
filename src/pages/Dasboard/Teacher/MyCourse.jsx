import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Heading from "../../../components/Heading";
import MyCourseCard from "./MyCourseCard";
import { useQuery } from "@tanstack/react-query";

const MyCourse = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    // useEffect(() => {
    //     axiosSecure.get(`/course/${user?.email}`)
    //         .then(res => {
    //             console.log(res.data);
    //             setMyCourse(res.data);
    //         })
    // }, [axiosSecure, user?.email])
    const { data: myCourse, refetch } = useQuery({
        queryKey: ['course', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/course/${user?.email}`)
            return res.data;
        }
    })

    return (
        <div>
            <Heading title={`My all courses here: ${myCourse.length}`}></Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                {
                    myCourse?.map(course => <MyCourseCard
                        key={course._id}
                        course={course}
                        refetch={refetch}
                    ></MyCourseCard>)
                }
            </div>
        </div>
    );
};

export default MyCourse;