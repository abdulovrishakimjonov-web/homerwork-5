import { AuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const authOptions: AuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.NEXT_GIT_CLIENT_ID as string,
      clientSecret: process.env.NEXT_GIT_CLIENT_SECREET as string,
    }),
  ],
  secret: process.env.SECREET_KEY as string,
};
