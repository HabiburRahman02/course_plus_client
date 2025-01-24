import axios from "axios";
import useAuth from "./useAuth";
import { toast } from "react-toastify";

const axiosInstance = axios.create({
    baseURL: 'https://course-plus-server-orcin.vercel.app',
})

const useAxiosSecure = () => {
    const { logOut } = useAuth()
    // Add a request interceptor
    axiosInstance.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token');
        // console.log('from interceptors', token);
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

    // Add a response interceptor
    axiosInstance.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        // console.log('error from axios interceptors', error);
        if (error.response?.status === 401 || error.response?.status == 403) {
            logOut()
                .then(() => {
                    toast.success('Logout user successfully')
                })
                .catch(error => {
                    toast.error(error.message);
                })
        }
        return Promise.reject(error);
    });

    return axiosInstance;
};

export default useAxiosSecure;