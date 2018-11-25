import * as React from "react";

interface AppHeaderProps {
  logout: () => void;
}

const AppHeader = (props: AppHeaderProps) => (
  <nav className="app-nav">
    <div data-test="page-title" className="app-title">
      Bookmarkr
    </div>
    <div>
      <a href="#" onClick={props.logout}>Logout</a>
    </div>
  </nav>
);

export default AppHeader;
