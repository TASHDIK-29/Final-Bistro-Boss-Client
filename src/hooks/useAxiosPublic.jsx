import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://final-bistro-boss-server-gamma.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;