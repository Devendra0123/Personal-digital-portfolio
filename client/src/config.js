import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://devendra13.herokuapp.com/"
});