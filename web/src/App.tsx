import * as React from "react";
import {PureComponent} from "react";
import {AppHeader} from "./AppHeader";
import {AppBody} from "./AppBody";
import Book from "./books/Book";
import {getAllBooks} from "./books/GetAllBooks.service";

export interface AppProps {
  getAllBooks: () => Promise<Book[]>,
}

class App extends PureComponent<AppProps> {
  render(): JSX.Element {
    return (
      <React.Fragment>
        <AppHeader/>
        <AppBody getAllBooks={getAllBooks} />
      </React.Fragment>
    )
  };
}

export default App;