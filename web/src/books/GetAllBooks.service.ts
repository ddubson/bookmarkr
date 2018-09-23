import booksAxios from "../BookStoreApp.config";

export const getAllBooks = () => booksAxios.get("/api/books")
    .then((res) => res.data);
