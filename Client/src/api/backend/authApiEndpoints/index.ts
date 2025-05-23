import { backendApi } from "../backendApi";

export const authApiEndpoints = backendApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<any, any>({
      query: (data: any) => ({
        url: "/auth/register",
        method: "POST",
        body: {
          ...data,
        },
      }),
    }),
    signIn: builder.mutation<any, any>({
      query: (data: any) => ({
        url: "/auth/login",
        method: "POST",
        body: {
          ...data,
        },
      }),
    }),
  }),
});

export const { useRegisterMutation, useSignInMutation } = authApiEndpoints;
