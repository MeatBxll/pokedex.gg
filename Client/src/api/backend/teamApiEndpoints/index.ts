import { backendApi } from "../backendApi";

export const teamApiEndpoints = backendApi.injectEndpoints({
  endpoints: (builder) => ({
    updatePokemonTeam: builder.mutation<any, any>({
      query: (data: any) => ({
        url: "/team/updatePokemon",
        method: "POST",
        body: {
          ...data,
        },
      }),
    }),
  }),
});

export const { useUpdatePokemonTeamMutation } = teamApiEndpoints;
