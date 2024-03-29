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
  published?: Boolean;
};

function entriesService({ api }: Service) {
  const createEntry = async (data: CreateEntry, reqConfig?: ReqConfig) => {
    const result = await api.post(`${prefix}`, data, { ...reqConfig });
    return result;
  };

  const getUserEntries = async (data: UserEntries, reqConfig?: ReqConfig) => {
    const { limit = 20, page = 1, published } = data;
    const result = await api.get(
      `${prefix}?limit=${limit}&page=${page}${
        published && `&published=${published}`
      } `,
      {
        ...reqConfig,
      }
    );
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

  const publishEntry = async (data: { action: string }, id: string) => {
    const result = await api.patch(`${prefix}/${id}`, data);
    return result;
  };

  const unPublishEntry = async (data: { action: string }, id: string) => {
    const result = await api.patch(`${prefix}/${id}`, data);
    return result;
  };

  const getLikes = async (data: UserEntries, reqConfig?: ReqConfig) => {
    const { limit = 20, page = 1 } = data;
    const result = await api.get(`/likes?limit=${limit}&page=${page}`, {
      ...reqConfig,
    });
    return result;
  };

  const getAllPublishedAppraisals = async (reqConfig?: ReqConfig) => {
    // const { page, take, searchQuery } = data;

    const result = await api.get(
      `/spur/appraisal/employee/ee713c88-39f1-45a1-9faa-f45d3310c1b6?take=3&page=1`,
      { ...reqConfig }
    );

    return result;
  };

  return Object.freeze({
    createEntry,
    getUserEntries,
    deleteUserEntries,
    getSingleEntry,
    updateUserEntries,
    publishEntry,
    unPublishEntry,
    getLikes,
    getAllPublishedAppraisals,
  });
}

export default entriesService;
