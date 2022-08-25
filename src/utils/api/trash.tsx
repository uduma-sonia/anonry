import { Service, ReqConfig } from "../types";
const prefix = "/trash";

function trashService({ api }: Service) {
  const getUserTrash = async (reqConfig?: ReqConfig) => {
    const result = await api.get(`${prefix}`, { ...reqConfig });
    return result;
  };

  const restoreTrash = async (data: any, reqConfig?: ReqConfig) => {
    const result = await api.patch(`${prefix}`, data, { ...reqConfig });
    return result;
  };

  const deletePermanently = async (data: any, reqConfig?: ReqConfig) => {
    const result = await api.delete(`${prefix}/?trash=${data}`, {
      ...reqConfig,
    });
    return result;
  };

  return Object.freeze({
    getUserTrash,
    restoreTrash,
    deletePermanently,
  });
}

export default trashService;
