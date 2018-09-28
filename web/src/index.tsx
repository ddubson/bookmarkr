import * as React from "react";
import * as ReactDOM from "react-dom";
import BookStoreApp from "./BookStoreApp";
import {MuiThemeProvider} from "@material-ui/core";
import {muiTheme} from "./BookStoreApp.theme";
import {getAllBooks} from "./books/GetAllBooks.service";


ReactDOM.render(
    <MuiThemeProvider theme={muiTheme}>
        <BookStoreApp getAllBooks={getAllBooks} />
    </MuiThemeProvider>,
    document.getElementById("root")
);