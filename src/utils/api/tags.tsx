import { Service, ReqConfig } from "../types";

function tagService({ api }: Service) {
  const getTags = async (reqConfig?: ReqConfig) => {
    const result = await api.get(`/tags`, { ...reqConfig });
    return result;
  };

  return Object.freeze({
    getTags,
  });
}

export default tagService;
