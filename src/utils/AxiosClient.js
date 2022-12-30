import axios from "axios";
import { token } from "./Storage";

const baseURL = process.env.REACT_APP_BASE_URL;

const DEFAULT_HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const headers = token
  ? { ...DEFAULT_HEADERS, Authorization: `Bearer${token}` }
  : { ...DEFAULT_HEADERS };

const AxiosClient = axios.create({
  baseURL: baseURL,
  headers: headers,
});

AxiosClient.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export default AxiosClient;
