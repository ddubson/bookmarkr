import * as React from "react";
import {PureComponent} from "react";
import {AppBody} from "./AppBody";
import Book from "./books/Book";
import {getAllBooks} from "./books/GetAllBooks.service";
import {AppFooter} from "./AppFooter";
import AppHeader from "./AppHeader";

export interface AppProps {
  getAllBooks: () => Promise<Book[]>,
}

class App extends PureComponent<AppProps> {
  render(): JSX.Element {
    return (
      <React.Fragment>
        <AppHeader />
        <AppBody getAllBooks={getAllBooks} />
        <AppFooter />
      </React.Fragment>
    )
  };
}

export default App;