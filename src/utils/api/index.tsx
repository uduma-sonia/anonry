import axios from "axios";
import { getSession } from "next-auth/react";
import authService from "./auth";
import userService from "./user";
import entriesService from "./entries";
import timelineService from "./timeline";
import tagService from "./tags";
import { signIn } from "next-auth/react";
import trashService from "./trash";

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
  async function (error) {
    if (process.env.NODE_ENV === "development") {
      console.error(error.response ?? "Error");
    }

    let { response } = error;
    let message = "An unexpected error occurred";

    if (response) {
      if (response.status === 401) {
        const session = await getSession();

        const data = {
          refreshToken: session?.refresh ?? "",
        };
        const result: any = await signIn("refresh", {
          ...data,
          redirect: false,
        });

        if (result.error) {
          window.location.href = `/login`;
        }
      }

      if (response.data) {
        message = response.data.data.message;

        if (response.data.data.status) {
        }

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
export const trashAPI = trashService({ api });
