import {PureComponent} from "react";
import * as React from "react";
const logo = require("./images/library.svg");

export class AppHeader extends PureComponent {
  render() {
    return (
      <nav className="app-nav">
          <div className="app-logo">
            <img src={logo} alt="book-store-logo" />
          </div>
          <div data-test="page-title" className="app-title">
            A Simple Book Store
          </div>
      </nav>
    )
  }
}