import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import { NYCUProvider } from "../../../utils/auth/provider/nycu";

export const authOptions: NextAuthOptions = {
  providers: [
    NYCUProvider({
      clientId: process.env.NYCU_OAUTH_CLIENT_ID ?? "",
      clientSecret: process.env.NYCU_OAUTH_CLIENT_SECRET ?? "",
    }),
  ],
};

export default NextAuth(authOptions);
