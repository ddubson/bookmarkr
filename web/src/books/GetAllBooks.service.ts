import {AxiosResponse} from "axios";
import booksAxios from "../App.config";
import Book from "./Book";

export const getAllBooks: () => Promise<Book[]> = () => booksAxios
  .get("/api/books")
  .then((res: AxiosResponse<Book[]>): Book[] => res.data);
