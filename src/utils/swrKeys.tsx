import { formatURLSearchParams } from "./format";

const usersKeys = {
  getUserProfile: "/users/profile",
};

const getAllEntries = (data: any) => {
  const searchParams = new URLSearchParams(
    formatURLSearchParams({ ...data })
  ).toString();
  return `/entries?${searchParams}`;
};

const getAllLikes = (data: any) => {
  const searchParams = new URLSearchParams(
    formatURLSearchParams({ ...data })
  ).toString();
  return `/likes?${searchParams}`;
};

const getPublishedEntres = (data: any) => {
  const searchParams = new URLSearchParams(
    formatURLSearchParams({ ...data })
  ).toString();
  return `/entries/p?${searchParams}`;
};

const entryKeys = {
  getUserEntries: getAllEntries,
  getPublishedEntries: getPublishedEntres,
  getSingleEntry: (id: any) => `/entries/${id}`,
  getLikes: getAllLikes,
};

const timelineKeys = {
  getTimeline: "/timeline",
};

const tagsKeys = {
  getTags: "/tags",
};

export const swrKeys = {
  ...usersKeys,

  ...entryKeys,

  ...timelineKeys,

  ...tagsKeys,
};
