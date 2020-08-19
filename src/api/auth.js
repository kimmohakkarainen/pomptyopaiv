import axios from "axios";

const AUTH_BASE_URL = "http://localhost:8888";
/* const API_BASE_URL = "https://demo.myatoz.fi"; */

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

export function postLogin(params) {
  const urlparams =
    "grant_type=password&scope=webclient&username=john.carnell&password=password1&client_id=eagleeye";

  return authClient.post("/oauth/token", urlparams, {
    auth: {
      username: "eagleeye",
      password: "thisissecret"
    }
  });
}
