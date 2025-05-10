import { backendApi } from "../backendApi";

export const userApiEndpoints = backendApi.injectEndpoints({
  endpoints: (builder) => ({
    addFavoritePokemon: builder.mutation<any, any>({
      query: (data: any) => ({
        url: "/user/addFavoritePokemon",
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

export const { useAddFavoritePokemonMutation, useSignInMutation } =
  userApiEndpoints;
