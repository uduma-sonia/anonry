import { Service, ReqConfig } from "../types";

function timelineService({ api }: Service) {
  const getTimeline = async (reqConfig?: ReqConfig) => {
    const result = await api.get(`/timeline`, { ...reqConfig });
    return result;
  };

  return Object.freeze({
    getTimeline,
  });
}

export default timelineService;
