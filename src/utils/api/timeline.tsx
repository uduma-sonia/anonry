import { Service, ReqConfig } from "../types";

function timelineService({ api }: Service) {
  type Likes = {
    entry_id: string;
    action: string;
  };

  const getTimeline = async (reqConfig?: ReqConfig) => {
    const result = await api.get(`/timeline`, { ...reqConfig });
    return result;
  };

  const handleLike = async (data: Likes, reqConfig?: ReqConfig) => {
    const result = await api.post(`/likes`, data, { ...reqConfig });
    return result;
  };

  return Object.freeze({
    getTimeline,
    handleLike,
  });
}

export default timelineService;
