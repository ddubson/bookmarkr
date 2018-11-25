import axios, {AxiosInstance} from "axios";

export const booksAxios: AxiosInstance = axios.create({
    baseURL: process.env.BOOKMARKR_API_URI,
});
