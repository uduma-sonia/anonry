const usersKeys = {
  getUserProfile: "/users/profile",
};

const entryKeys = {
  getUserEntries: "/entries",
  getSingleEntry: (id: any) => `/entries/${id}`,
};

export const swrKeys = {
  ...usersKeys,

  ...entryKeys,
};
