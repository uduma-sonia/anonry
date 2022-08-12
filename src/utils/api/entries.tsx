import { Service, ReqConfig } from "../types";
const prefix = "/entries";

type CreateEntry = {
  title: string;
  description: string;
  tags?: any;
};

type UpdateEntry = {
  title: string;
  description: string;
  entry_id: string;
};

type UserEntries = {
  limit?: number;
  page?: string | string[] | number;
};

function entriesService({ api }: Service) {
  const createEntry = async (data: CreateEntry, reqConfig?: ReqConfig) => {
    const result = await api.post(`${prefix}`, data, { ...reqConfig });
    return result;
  };

  const getUserEntries = async (data: UserEntries, reqConfig?: ReqConfig) => {
    const { limit = 2, page = 1 } = data;

    const result = await api.get(`${prefix}?limit=${limit}&page=${page}`, {
      ...reqConfig,
    });
    return result;
  };

  const getSingleEntry = async (id: any, reqConfig?: ReqConfig) => {
    const result = await api.get(`${prefix}/${id}`, { ...reqConfig });
    return result;
  };

  const deleteUserEntries = async (id: string) => {
    const result = await api.delete(`${prefix}/${id}`);
    return result;
  };

  const updateUserEntries = async (data: UpdateEntry) => {
    const result = await api.patch(`${prefix}`, data);
    return result;
  };

  const publishEntry = async (id: string) => {
    const result = await api.patch(`${prefix}/${id}`);
    return result;
  };

  return Object.freeze({
    createEntry,
    getUserEntries,
    deleteUserEntries,
    getSingleEntry,
    updateUserEntries,
    publishEntry,
  });
}

export default entriesService;
