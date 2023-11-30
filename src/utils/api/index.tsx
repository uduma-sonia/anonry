import axios from "axios";
import { getSession } from "next-auth/react";
import authService from "./auth";
import userService from "./user";
import entriesService from "./entries";
import timelineService from "./timeline";
import tagService from "./tags";
import { signIn } from "next-auth/react";
import trashService from "./trash";

// export const API_ENDPOINT = "https://anonry.onrender.com";
export const API_ENDPOINT =
  "https://spurtx-toolkit-api-staging-v2.herokuapp.com/api/v1";
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

    let { response, config } = error;
    let message = "An unexpected error occurred";

    const { url }: { url: string } = config;

    if (
      response &&
      ![
        "/login",
        "/signup",
        "/forgot-password",
        "/reset-password",
        "/verify-email",
      ].includes(url)
    ) {
      if (response.status === 401) {
        config._retry = true;
        const session = await getSession();
        const data = {
          //@ts-ignore
          refreshToken: session?.refresh ?? "",
        };
        const result: any = await signIn("refresh", {
          ...data,
          redirect: false,
        });
        if (result.error && isBrowser) {
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

  console.log("SESSION>>>>", session);

  request.headers["x-access-token"] =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhhODE4MjIwLWFjNGMtNGNkYi1iMjM4LThlMDVlMjVmNWM1MSIsImlhdCI6MTcwMTM0NjM3NSwiZXhwIjoxNzAxMzgyMzc1fQ.cVdc-tc35UVo8WWeqff3A6ucEA0_2GTp1X_rvfxGito";
  //@ts-ignore
  const token = session?.token ?? "";
  // request.headers.Authorization = `Bearer `;
  return request;
};
api.interceptors.request.use(addTokenToRequest);

export const authAPI = authService({ api });
export const userAPI = userService({ api });
export const entriesAPI = entriesService({ api });
export const timelineAPI = timelineService({ api });
export const tagsAPI = tagService({ api });
export const trashAPI = trashService({ api });
