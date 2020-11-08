import axios from "axios";
export * from "./auth.js";

const API_BASE_URL = "http://localhost:8080";
/* const API_BASE_URL = "https://demo.myatoz.fi"; */

export const client = axios.create({
  baseURL: API_BASE_URL,
  maxRedirects: 0,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

/*
 * Check each response whether content-type is not JSON. This indicates that
 * session has timed out
 */
client.interceptors.response.use(function (response) {
  const type = response.headers["content-type"];
  const valid = /application\/json/.test(type);

  if (valid) {
    return response;
  } else {
    window.location.href = "/logout";
  }
});

export function getRecords(access_token, date) {
  const client = axios.create({
    baseURL: API_BASE_URL,
    maxRedirects: 0,
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + access_token,
      "Content-Type": "application/json"
    }
  });
  return client.get("/rest/records/" + date);
}

export function postRecord(access_token, params) {
  const client = axios.create({
    baseURL: API_BASE_URL,
    maxRedirects: 0,
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + access_token,
      "Content-Type": "application/json"
    }
  });
  return client.post("/rest/record", params);
}

export function getSummary(access_token, date) {
  const client = axios.create({
    baseURL: API_BASE_URL,
    maxRedirects: 0,
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + access_token,
      "Content-Type": "application/json"
    }
  });
  return client.get("/rest/summary/" + date);
}

export function getCalendar(access_token) {
  const client = axios.create({
    baseURL: API_BASE_URL,
    maxRedirects: 0,
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + access_token,
      "Content-Type": "application/json"
    }
  });
  return client.get("/rest/calendar");
}
