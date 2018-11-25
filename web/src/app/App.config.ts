import axios, {AxiosInstance} from "axios";

const booksAxios: AxiosInstance = axios.create({
    baseURL: process.env.BOOKMARKR_API_URI,
});

export default booksAxios;
