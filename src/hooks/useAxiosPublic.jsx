import axios from "axios";


const axiosInstance = axios.create({
    baseURL: 'https://course-plus-server-orcin.vercel.app',
})

const useAxiosPublic = () => {
    return axiosInstance
};

export default useAxiosPublic;