import axios from "axios";

/* const API_BASE_URL = "https://localhost:8080"; */
const API_BASE_URL = "https://demo.myatoz.fi";

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
client.interceptors.response.use(function(response) {
  const type = response.headers["content-type"];
  const valid = /application\/json/.test(type);

  if (valid) {
    return response;
  } else {
    window.location.href = "/logout";
  }
});

export function getRecords() {
  return client.get("/rest/records");
}

export function postRecord(params) {
  return client.post("/rest/record", params);
}
