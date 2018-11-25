import * as React from "react";
import {PureComponent} from "react";
import {BookmarksScene} from "../scenes/Bookmarks/BookmarksScene";
import {AppFooter} from "./AppFooter";
import AppHeader from "./AppHeader";

class App extends PureComponent {
  public render(): JSX.Element {
    return (
      <React.Fragment>
        <AppHeader />
        <BookmarksScene />
        <AppFooter />
      </React.Fragment>
    );
  }
}

export default App;
