import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useTeacher = () => {
    const axiosSecure = useAxiosSecure()
    const { data: teachers = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['teachers'],
        queryFn: async () => {
            const data = await axiosSecure.get('/teachers');
            return data.data
        }
    })
    return [teachers, loading, refetch]
};

export default useTeacher;