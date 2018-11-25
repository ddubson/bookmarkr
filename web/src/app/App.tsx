import * as React from "react";
import {PureComponent} from "react";
import {BookmarksScene} from "../scenes/Bookmarks/BookmarksScene";
import Auth from "../services/security/Auth";
import {AppFooter} from "./AppFooter";
import AppHeader from "./AppHeader";

interface AppProps {
  auth: Auth;
}

class App extends PureComponent<AppProps> {
  public render(): JSX.Element {
    return (
      <React.Fragment>
        <AppHeader logout={this.props.auth.logout}/>
        <BookmarksScene />
        <AppFooter />
      </React.Fragment>
    );
  }
}

export default App;
