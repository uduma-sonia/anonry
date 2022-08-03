import { Service, ReqConfig } from "../types";
const prefix = "/entries";

function entriesService({ api }: Service) {
  type CreateEntry = {
    title: string;
    description: string;
    tags?: any;
  };

  const createEntry = async (data: CreateEntry, reqConfig?: ReqConfig) => {
    const result = await api.post(`${prefix}`, data, { ...reqConfig });
    return result;
  };

  const getUserEntries = async (reqConfig?: ReqConfig) => {
    const result = await api.get(`${prefix}`, { ...reqConfig });
    return result;
  };
  return Object.freeze({
    createEntry,
    getUserEntries,
  });
}

export default entriesService;
