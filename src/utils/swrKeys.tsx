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

const entryKeys = {
  getUserEntries: getAllEntries,
  getSingleEntry: (id: any) => `/entries/${id}`,
};

export const swrKeys = {
  ...usersKeys,

  ...entryKeys,
};
