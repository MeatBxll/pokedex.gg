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
    removeFavoritePokemon: builder.mutation<any, any>({
      query: (data: any) => ({
        url: "/user/removeFavoritePokemon",
        method: "POST",
        body: {
          ...data,
        },
      }),
    }),
  }),
});

export const {
  useAddFavoritePokemonMutation,
  useRemoveFavoritePokemonMutation,
} = userApiEndpoints;
