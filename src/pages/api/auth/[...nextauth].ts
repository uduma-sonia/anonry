/* eslint-disable import/no-anonymous-default-export */
import { api, authAPI } from "@utils/api";
import Credentials from "next-auth/providers/credentials";
import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { NextAuthOptions } from "next-auth";

const refreshAccessToken = async (token: any) => {
  console.trace("NOT SO SILENT NOW ARE WE");
  
  const prefix = "/users/auth";
  try {
    const result = await api.post(`${prefix}/refresh-token`, {
      refreshToken: token.refresh_token,
    });

    return { ...token, ...result.data.data };
  } catch (error) {
    console.log("MAD PROBLEMS DEY");
    return token;
  }
};

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
          return result?.data;
        } catch (error: any) {
          if (error) {
            throw new Error(error ?? "Something went wrong");
          }
          return null;
        }
      },
    }),

    Credentials({
      id: "refresh",
      name: "refresh",
      credentials: {
        refreshToken: { label: "refreshToken", type: "string" },
      },
      async authorize(credentials, req) {
        try {
          const result = await authAPI.refreshToken({
            refreshToken: credentials?.refreshToken!,
          });
          return result?.data;
        } catch (error: any) {
          console.log(error);

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
          const result: any = await authAPI.verifyEmail({
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
  callbacks: {
    async session({ session, token }: any) {
      //   Returns result from jwt token below

      const signInData = token?.signInData as any;
      session.user = signInData?.data?.user;
      session.token = signInData?.data?.access_token;
      session.refresh = signInData?.data?.refresh_token;
      session.token_expires = signInData?.data?.access_token_expires;
      session.refresh_expires = signInData?.data?.refresh_token_expires;
      return session;
    },
    async jwt({ token, user }: any) {
      if (user) {
        //   Sets user to result from authorize
        token.signInData = user;
      }
      const currentDate = Date.now();

      if (currentDate >= token?.signInData?.data?.access_token_expires) {
        token.signInData.data = await refreshAccessToken(token.signInData.data);
      }
      return token;
    },
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
