import axios, {AxiosInstance} from "axios";

const booksAxios: AxiosInstance = axios.create({
    baseURL: process.env.BOOKS_API_URI,
});

export default booksAxios;
