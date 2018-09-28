import {AxiosPromise} from "axios";
import booksAxios from "../BookStoreApp.config";
import Book from "./Book";

export const getAllBooks: () => AxiosPromise<Book[]> = () => booksAxios
  .get("/api/books").then((res) => res.data);
