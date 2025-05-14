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
  isDarkMode: boolean;
}

const initialState: UserState = {
  firstName: null,
  userName: null,
  token: null,
  id: null,
  favoritePokemon: null,
  about: null,
  teams: null,
  isDarkMode: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCredentials: (state: UserState, action: PayloadAction<any>) => {
      state.firstName = action.payload.firstName;
      state.userName = action.payload.userName;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.favoritePokemon = action.payload.favoritePokemon;
      state.about = action.payload.about;
      state.teams = action.payload.teams;
      if (!state.isDarkMode) state.isDarkMode = false; 
    },
    Logout: (state: any) => {
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
    setTeams: (state: UserState, action: PayloadAction<any>) => {
      const newTeams: any = state.teams?.map((t: any) => {
        if (t.id === action.payload.id) return action.payload;
        return t;
      });
      state.teams = newTeams;
    },
    setIsDarkMode: (state: UserState, action: PayloadAction<any>) => {
      state.isDarkMode = action.payload;
    }
  },
});

export const { setCredentials, logout, setFavoritePokemon, setTeams, setIsDarkMode }: any =
  userSlice.actions;

export const selectFavoritePokemon = (state: RootState) =>
  state.user.favoritePokemon;

export const selectTeams = (state: RootState) => state.user.teams;

export const selectIsDarkMode = (state: RootState) => state.user.isDarkMode;

export const selectUserId = (state: RootState) => state.user.id;

export default userSlice.reducer;
