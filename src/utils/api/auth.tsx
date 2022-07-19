import { Service, ReqConfig } from "../types";
const prefix = "/users/auth";

function authService({ api }: Service) {
  type Signup = {
    user_name: string;
    email: string;
    password: string;
    link: string;
  };
  const signup = async (data: Signup, reqConfig?: ReqConfig) => {
    const result = await api.post(`${prefix}/signup`, data, { ...reqConfig });
    return result;
  };

  type Login = {
    identifier: string;
    password: string;
  };
  const login = async (data: Login, reqConfig?: ReqConfig) => {
    const result = await api.post(`${prefix}`, data, { ...reqConfig });
    return result;
  };

  type VerifyEmail = {
    email: string;
    otp: string;
  };
  const verifyEmail = async (data: VerifyEmail, reqConfig?: ReqConfig) => {
    const result = await api.post(`${prefix}/verify`, data, { ...reqConfig });
    return result;
  };

  const resendOtp = async (data: any, reqConfig?: ReqConfig) => {
    const result = await api.post(`${prefix}/resend-otp`, data, {
      ...reqConfig,
    });
    return result;
  };

  return Object.freeze({
    signup,
    login,
    verifyEmail,
    resendOtp,
  });
}

export default authService;
