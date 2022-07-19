import axios from "axios";
import { getSession } from "next-auth/react";
import authService from "./auth";

export const API_ENDPOINT = "https://anonry.herokuapp.com";
const isBrowser = typeof window !== undefined;

export const api = axios.create({
  baseURL: API_ENDPOINT,
  timeout: 9000,
});

api.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    if (process.env.NODE_ENV === "development") {
      console.error(error.response ?? "Error");
    }

    let { response } = error;
    let message = "An unexpected error occurred";
    if (response) {
      if (response.data) {
        message = response.data.message;

        return Promise.reject(message);
      }
      return Promise.reject(message);
    }
    return Promise.reject(message);
  }
);

const addTokenToRequest = async (request: any) => {
  if (!isBrowser || request.headers.Authorization) return request;

  const session = await getSession();
  const token = session?.token ?? "";
  request.headers.Authorization = `Bearer ${token}`;
  return request;
};
api.interceptors.request.use(addTokenToRequest);

export const authAPI = authService({ api });