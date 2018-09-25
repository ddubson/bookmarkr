import {AxiosPromise} from "axios";
import booksAxios from "../BookStoreApp.config";

export const getAllBooks: () => AxiosPromise = () => booksAxios
  .get("/api/books").then((res) => res.data);
