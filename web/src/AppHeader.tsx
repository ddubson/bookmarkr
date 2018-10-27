import {PureComponent} from "react";
import * as React from "react";

export class AppHeader extends PureComponent {
  render() {
    return (
      <nav className="app-nav">
          <div className="app-logo">
            <img src={require("./images/library.svg")} alt="book-store-logo" />
          </div>
          <div data-test="page-title">
            Book Store
          </div>
      </nav>
    )
  }
}