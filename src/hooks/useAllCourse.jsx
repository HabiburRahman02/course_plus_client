import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllCourse = () => {
    const axiosSecure = useAxiosSecure();
    const { data: courses = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['courses'],
        queryFn: async () => {
            const data = await axiosSecure.get('/allCourses');
            return data.data
        }
    })
    return [courses, loading, refetch]
};

export default useAllCourse;