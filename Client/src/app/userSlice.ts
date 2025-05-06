import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@reduxjs/toolkit/query";

interface UserState {
  firstName: Number | null;
  userName: string | null;
  token: string | null;
  id: string | null;
  favoritedPokemon: [] | null;
  about: string | null;
  teams: [] | null;
}

const initialState: UserState = {
  firstName: null,
  userName: null,
  token: null,
  id: null,
  favoritedPokemon: null,
  about: null,
  teams: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCredetials: (state: UserState, action: PayloadAction<UserState>) => {
      state.firstName = action.payload.firstName;
      state.userName = action.payload.userName;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.favoritedPokemon = action.payload.favoritedPokemon;
      state.about = action.payload.about;
      state.teams = action.payload.teams;
    },
    Logout: (state: UserState) => {
      state.firstName = null;
      state.userName = null;
      state.token = null;
      state.id = null;
      state.favoritedPokemon = null;
      state.about = null;
      state.teams = null;
    },
  },
});

export const { setCredentials, logout }: any = userSlice.actions;
export default userSlice.reducer;
