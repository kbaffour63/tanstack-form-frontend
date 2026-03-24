import { authClient } from "@/lib/auth-client";

interface LoginCredentials {
  email: string;
  password: string;
}

interface SignUpCredentials {
  email: string;
  password: string;
  name: string;
}

export const authApi = {
  login: async ({ email, password }: LoginCredentials) => {
    const result = await authClient.signIn.email({ email, password });
    if (result.error) throw new Error(result.error.message);
    return result.data;
  },

  signUp: async ({ email, password, name }: SignUpCredentials) => {
    const result = await authClient.signUp.email({
      email,
      password,
      name,
    });
    if (result.error) throw new Error(result.error.message);
    return result.data;
  },

  getProfile: async () => {
    const result = await authClient.getSession();
    if (result.error) throw new Error(result.error.message);
    return result.data;
  },

  logout: async () => {
    const result = await authClient.signOut();
    if (result.error) throw new Error(result.error.message);
    return result.data;
  },
};
