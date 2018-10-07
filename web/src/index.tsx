import * as React from "react";
import * as ReactDOM from "react-dom";
import BookStoreApp from "./BookStoreApp";
import {getAllBooks} from "./books/GetAllBooks.service";

ReactDOM.render(
  <BookStoreApp getAllBooks={getAllBooks} />,
  document.getElementById("root")
);