import {Auth0DecodedHash, WebAuth} from "auth0-js";
import history from "./history";

export default class Auth {
  private auth0 = new WebAuth({
    clientID: "yP5NqYduTLKJZAESMNqsGuXrdKHYBx6J",
    domain: "ddubson.auth0.com",
    redirectUri: "http://localhost:1234/",
    responseType: "token id_token",
    scope: "openid",
  });

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        history.replace("/");
      } else if (err) {
        history.replace("/");
        console.log(err);
      }
    });
  }

  public setSession(authResult: Auth0DecodedHash) {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("id_token", authResult.idToken);
    localStorage.setItem("expires_at", expiresAt);
    // navigate to the home route
    history.replace("/");
  }

  public logout() {
    // Clear Access Token and ID Token from local storage
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    // navigate to the home route
    history.replace("/");
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    const expiresAtJson = localStorage.getItem("expires_at");

    if (!expiresAtJson) {
      return false;
    }

    const expiresAt = JSON.parse(expiresAtJson);
    return new Date().getTime() < expiresAt;
  }
}
