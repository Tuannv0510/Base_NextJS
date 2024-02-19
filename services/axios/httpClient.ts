import Axios from "axios";
import Cookies from "js-cookie";
import HTTP_CODES_ENUM from "./types/http-codes";
import { TokensInfo } from "../auth/auth-context";

export const AUTH_TOKEN = process.env.NEXT_PUBLIC_AUTH_TOKEN || "MKTtoken";

const axiosClient = Axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const mktToken = JSON.parse(
      Cookies.get(AUTH_TOKEN) ?? "null"
    ) as TokensInfo;
    if (mktToken && mktToken.apiToken) {
      config.headers.Authorization = `Bearer ${mktToken.apiToken}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if (response.status === HTTP_CODES_ENUM.OK) {
      return response.data;
    }
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosClient;
