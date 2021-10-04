import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://deven-personal-website.herokuapp.com/"
});