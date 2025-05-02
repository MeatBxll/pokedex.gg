import { pokemonApi } from "../pokemonApi";

export const pokemonApiEndpoints = pokemonApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPokemon: builder.query<
      // 👇 Result type
      {
        count: number;
        next: string | null;
        previous: string | null;
        results: { name: string; url: string }[];
      },
      // 👇 Argument type
      { limit?: number; offset?: number }
    >({
      query: ({ limit = 100, offset = 0 }) =>
        `pokemon?limit=${limit}&offset=${offset}`,
    }),
    getPokemonByName: builder.query<
      {
        name: string;
        id: number;
        stats: { base_stat: number; stat: { name: string } }[];
        types: { type: { name: string } }[];
        abilities: { ability: { name: string } }[];
        game_indices: { version: { name: string } }[];
        moves: { move: { name: string } }[];
      },
      string // name or ID
    >({
      query: (name) => `pokemon/${name}`,
    }),
    getPokemonSpecies: builder.query({
      query: (name) => `pokemon-species/${name}`,
    }),
    getEvolutionChain: builder.query({
      query: (id) => `evolution-chain/${id}`,
    }),

    getAllPokemonOfType: builder.query({
      query: (type) => `type/${type}`,
    }),
  }),

  overrideExisting: false,
});

export const {
  useGetAllPokemonQuery,
  useGetPokemonByNameQuery,
  useGetPokemonSpeciesQuery,
  useGetEvolutionChainQuery,
  useGetAllPokemonOfTypeQuery,
} = pokemonApiEndpoints;
