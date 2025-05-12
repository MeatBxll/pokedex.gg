import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface UserState {
  firstName: Number | null;
  userName: string | null;
  token: string | null;
  id: string | null;
  favoritePokemon: [] | null;
  about: string | null;
  teams: [] | null;
}

const initialState: UserState = {
  firstName: null,
  userName: null,
  token: null,
  id: null,
  favoritePokemon: null,
  about: null,
  teams: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCredentials: (state: UserState, action: PayloadAction<UserState>) => {
      state.firstName = action.payload.firstName;
      state.userName = action.payload.userName;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.favoritePokemon = action.payload.favoritePokemon;
      state.about = action.payload.about;
      state.teams = action.payload.teams;
    },
    Logout: (state: UserState) => {
      state.firstName = null;
      state.userName = null;
      state.token = null;
      state.id = null;
      state.favoritePokemon = null;
      state.about = null;
      state.teams = null;
    },
    setFavoritePokemon: (state: UserState, action: PayloadAction<any>) => {
      state.favoritePokemon = action.payload.favoritePokemon;
    },
  },
});

export const { setCredentials, logout, setFavoritePokemon }: any =
  userSlice.actions;

export const selectFavoritePokemon = (state: RootState) =>
  state.user.favoritePokemon;

export const selectTeams = (state: RootState) => state.user.teams;

export const selectUserId = (state: RootState) => state.user.id;

export default userSlice.reducer;
