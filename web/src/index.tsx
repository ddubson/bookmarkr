import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import {getAllBooks} from "./books/GetAllBooks.service";

ReactDOM.render(
  <App getAllBooks={getAllBooks} />,
  document.getElementById("root")
);