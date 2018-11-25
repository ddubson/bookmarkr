import * as React from "react";
import * as ReactDOM from "react-dom";
import Auth from "../services/security/Auth";
import App from "./App";
import "./styles/App.styles.scss";

const auth0 = new Auth();

if (!auth0.isAuthenticated()) {
  console.log("Not authenticated.");
  //auth0.login();
}

ReactDOM.render(
  <App auth={auth0} />,
  document.getElementById("root"),
);
