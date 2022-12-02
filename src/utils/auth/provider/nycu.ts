import { OAuthUserConfig, Provider } from "next-auth/providers";

type ProfileResponse = {
  username: string;
  email: string;
};

export const NYCUProvider = ({
  clientId,
  clientSecret,
}: OAuthUserConfig<{}>): Provider => {
  return {
    id: "nycu",
    name: "NYCU",
    type: "oauth",
    authorization: {
      url: "https://id.nycu.edu.tw/o/authorize/",
      params: { scope: "profile" },
    },
    token: "https://id.nycu.edu.tw/o/token/",
    profileUrl: "https://id.nycu.edu.tw/api/profile/",
    clientId,
    clientSecret,
    profile: async ({ username, email }: ProfileResponse) => ({
      id: username,
      name: username,
      email,
    }),
  };
};
