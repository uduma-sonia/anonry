import axios from "axios";
import { getSession } from "next-auth/react";
import authService from "./auth";
import userService from "./user";
import entriesService from "./entries";
import timelineService from "./timeline";
import tagService from "./tags";

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
      // console.log(error);
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
export const userAPI = userService({ api });
export const entriesAPI = entriesService({ api });
export const timelineAPI = timelineService({ api });
export const tagsAPI = tagService({ api });
