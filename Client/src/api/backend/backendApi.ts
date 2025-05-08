import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logout } from "../../app/userSlice";
import { RootState } from "../../app/store";

// const baseQuery = fetchBaseQuery({
//   baseUrl: "http://localhost:8000/api",
//   credentials: "include",
//   prepareHeaders: (headers, { getState }) => {
//     const token = (getState() as RootState).user.token;
//     if (token) {
//       headers.set("authorization", `Bearer ${token}`);
//     }
//     return headers;
//   },
// });

// const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
//   let result: any = await baseQuery(args, api, extraOptions);
//   if (result?.error?.originalStatus === 403) {
//     console.log("sending refresh token");
//     const refreshResult: any = await baseQuery(
//       "/auth/refreshToken",
//       api,
//       extraOptions
//     );
//     if (refreshResult?.data) {
//       const id = api.getState().user.id;
//       const firstName = api.getState().user.firstName;
//       const username = api.getState().user.username;
//       const teams = api.getState().user.teams;
//       const favoritedPokemon = api.getState().user.favoritedPokemon;
//       const about = api.getState().user.about;

//       api.dispatch(
//         setCredentials({
//           id,
//           username,
//           firstName,
//           teams,
//           about,
//           favoritedPokemon,
//           token: refreshResult.data.accessToken,
//         })
//       );
//       result = await baseQuery(args, api, extraOptions);
//     } else {
//       api.dispatch(logout());
//     }
//   }
//   return result;
// };

export const backendApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api" }),
  endpoints: () => ({}),
});
