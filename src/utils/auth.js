import auth0 from "auth0-js";
import { navigate } from "gatsby";

const isBrowser = typeof window !== "undefined";

const auth = isBrowser
  ? new auth0.WebAuth({
      domain: "dev-yy7qack4.us.auth0.com",
      clientID: "6CtPV5C4FWHohpJE7D4la55ytOcreO9H",
      // redirectUri: "http://localhost:8000/callback/callback",
      redirectUri: "https://contentcreatorpro.netlify.app/callback",

      // domain: process.env.AUTH0_DOMAIN,
      // clientID: process.env.AUTH0_CLIENTID,
      // redirectUri: process.env.AUTH0_CALLBACK,
      responseType: "token id_token",
      scope: "openid profile email",
    })
  : {};

const tokens = {
  accessToken: false,
  idToken: false,
  expiresAt: false,
};

let user = {};

export const isAuthenticated = () => {
  if (!isBrowser) {
    return;
  }

  return localStorage.getItem("isLoggedIn") === "true";
};

export const login = () => {
  if (!isBrowser) {
    return;
  }

  auth.authorize();
};

const setSession =
  (cb = () => {}) =>
  (err, authResult) => {
    if (err) {
      navigate("/");
      cb();
      return;
    }

    if (authResult && authResult.accessToken && authResult.idToken) {
      let expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
      tokens.accessToken = authResult.accessToken;
      tokens.idToken = authResult.idToken;
      tokens.expiresAt = expiresAt;
      user = authResult.idTokenPayload;
      localStorage.setItem("isLoggedIn", true);
      // navigate("/account");
      navigate("/");
      cb();
    }
  };

export const silentAuth = (callback) => {
  if (!isAuthenticated()) return callback();
  auth.checkSession({}, setSession(callback));
};

export const handleAuthentication = () => {
  if (!isBrowser) {
    return;
  }

  auth.parseHash(setSession());
};

export const getProfile = () => {
  return user;
};

export const logout = () => {
  localStorage.setItem("isLoggedIn", false);
  auth.logout();
};
