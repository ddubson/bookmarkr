import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import {getAllBooks} from "./books/GetAllBooks.service";
import "./styles/App.styles.scss";

ReactDOM.render(
  <App getAllBooks={getAllBooks} />,
  document.getElementById("root"),
);
