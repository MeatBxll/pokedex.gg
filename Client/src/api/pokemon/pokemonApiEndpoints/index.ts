import { pokemonApi } from "../pokemonApi";

export const pokemonApiEndpoints = pokemonApi.injectEndpoints({
  endpoints: (builder) => ({
    getOnePokemon: builder.query<any, any>({
      query: (pokemonName: String) => ({
        url: `/pokemon/${pokemonName}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetOnePokemonQuery } = pokemonApiEndpoints;
