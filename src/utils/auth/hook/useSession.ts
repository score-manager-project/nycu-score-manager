import { useSession as useNextAuthSession } from "next-auth/react";

export const useSession = (): ReturnType<typeof useNextAuthSession> => {
  if (!process.env.NEXT_PUBLIC_MOCK_NEXT_AUTH) {
    return useNextAuthSession();
  }

  return {
    data: {
      user: {
        name: "123456789",
        email: "test@example.com",
      },
      expires: new Date(Date.now() + 86_400_000).toISOString(),
    },
    status: "authenticated",
  };
};
