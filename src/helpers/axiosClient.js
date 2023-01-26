import axios from "axios";
//  process.env.REACT_APP_BASE_URL ??
const baseURL =
  process.env.NODE_ENV !== "development"
    ? process.env.REACT_APP_BASE_URL
    : "http://localhost:8088/api/v1/";
const DEFAULT_HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
};
const token = JSON.parse(localStorage.getItem("user"));

const newToken = token?.token;

const headers = newToken
  ? { ...DEFAULT_HEADERS, Authorization: `Bearer ${newToken}` }
  : { ...DEFAULT_HEADERS };

const axiosClient = axios.create({
  baseURL: baseURL,
  headers: headers,
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export default axiosClient;
