import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useCourse = () => {
    const axiosPublic = useAxiosPublic();
    const { data: courses, isLoading: loading, refetch } = useQuery({
        queryKey: ['courses'],
        queryFn: async () => {
            const data = await axiosPublic.get('/courses');
            return data.data
        }
    })
    return [courses, loading, refetch]
};

export default useCourse;