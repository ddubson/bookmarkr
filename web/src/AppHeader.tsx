import * as React from "react";

const logo = require("./images/library.svg");

const AppHeader = () => (
  <nav className="app-nav">
    <div data-test="page-title" className="app-title">
      Bookmarkr
    </div>
  </nav>
);

export default AppHeader;