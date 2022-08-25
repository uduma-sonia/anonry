import { Service, ReqConfig } from "../types";
const prefix = "/users";

function userService({ api }: Service) {
  const getUserProfile = async (reqConfig?: ReqConfig) => {
    const result = await api.get(`${prefix}/profile`, { ...reqConfig });
    return result;
  };

  const updateUser = async (data: any, reqConfig?: ReqConfig) => {
    const result = await api.patch(`${prefix}`, { ...data }, { ...reqConfig });

    return result;
  };

  return Object.freeze({
    getUserProfile,
    updateUser,
  });
}

export default userService;
