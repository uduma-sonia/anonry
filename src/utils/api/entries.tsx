import { Service, ReqConfig } from "../types";
const prefix = "/entries";

function entriesService({ api }: Service) {
  type CreateEntry = {
    title: string;
    description: string;
  };

  const createEntry = async (data: CreateEntry, reqConfig?: ReqConfig) => {
    const result = await api.post(`${prefix}`, data, { ...reqConfig });
    return result;
  };

  return Object.freeze({
    createEntry,
  });
}

export default entriesService;
