import { backendApi } from "../backendApi";

export const authApiEndpoints = backendApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<any, any>({
      query: (data: any) => ({
        URL: "/auth/register",
        method: "POST",
        body: {
          ...data,
        },
      }),
    }),
  }),
});

export const { useRegisterMutation } = authApiEndpoints;
