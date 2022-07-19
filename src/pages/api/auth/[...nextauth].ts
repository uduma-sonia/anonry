/* eslint-disable import/no-anonymous-default-export */
import { authAPI } from "@utils/api";
import Credentials from "next-auth/providers/credentials";
import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { NextAuthOptions } from "next-auth";

const options = {
  providers: [
    Credentials({
      id: "signin",
      name: "signin",
      credentials: {
        identifier: { label: "identifier", type: "string" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          const result = await authAPI.login({
            identifier: credentials?.identifier!,
            password: credentials?.password!,
          });
          return result.data;
        } catch (error: any) {
          if (error) {
            throw new Error(error ?? "Something went wrong");
          }
          return null;
        }
      },
    }),

    Credentials({
      id: "verify-email",
      name: "VerifyEmail",
      credentials: {
        otp: { label: "OTP", type: "string" },
        email: { label: "email", type: "email" },
      },
      async authorize(credentials, req) {
        try {
          const result = await authAPI.verifyEmail({
            otp: credentials?.otp!,
            email: credentials?.email!,
          });
          return result.data;
        } catch (error: any) {
          if (error) {
            throw new Error(error ?? "Something went wrong");
          }
          return null;
        }
      },
    }),
  ],
  session: {
    jwt: true,
  },
  pages: {
    verifyRequest: "/verify-email",
    signIn: "/login",
  },
  secret: "testing",
};

export default (
  req: NextAuthOptions | NextApiRequest,
  res: NextApiResponse<any>
  //@ts-ignore
) => NextAuth(req, res, options);
