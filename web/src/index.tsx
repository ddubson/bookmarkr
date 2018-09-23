import * as React from "react";
import * as ReactDOM from "react-dom";
import BookStoreApp from "./BookStoreApp";
import {MuiThemeProvider} from "@material-ui/core";
import {muiTheme} from "./BookStoreApp.theme";

ReactDOM.render(
    <MuiThemeProvider theme={muiTheme}>
        <BookStoreApp />
    </MuiThemeProvider>,
    document.getElementById("root")
);