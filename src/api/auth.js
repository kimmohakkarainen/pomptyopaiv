import axios from "axios";

/* const AUTH_BASE_URL = "http://localhost:8888"; */
const AUTH_BASE_URL = "https://demo.myatoz.fi:80";

export const authClient = axios.create({
  baseURL: AUTH_BASE_URL,
  maxRedirects: 0,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded"
  }
});

/*
 * Check each response whether content-type is not JSON. This indicates that
 * session has timed out
 */
authClient.interceptors.response.use(function (response) {
  const type = response.headers["content-type"];
  const valid = /application\/json/.test(type);

  if (valid) {
    return response;
  } else {
    window.location.href = "/logout";
  }
});

export function postLogin(username, password) {
  const urlparams =
    "grant_type=password&scope=webclient&username=" +
    username +
    "&password=" +
    password +
    "&client_id=pomptyop";

  return authClient.post("/oauth/token", urlparams, {
    auth: {
      username: "pomptyop",
      password: "thisissecret"
    }
  });
}

export function postRefresh(refresh_token) {
  const urlparams =
    "grant_type=refresh_token&scope=webclient&client_id=pomptyop&refresh_token=" +
    refresh_token;

  return authClient.post("/oauth/token", urlparams, {
    auth: {
      username: "pomptyop",
      password: "thisissecret"
    }
  });
}
