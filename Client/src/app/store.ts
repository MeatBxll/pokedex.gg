import { configureStore } from "@reduxjs/toolkit";
import { pokemonApi } from "../api/pokemon/pokemonApi";
import userReducer from "./userSlice";
import { backendApi } from "../api/backend/backendApi";

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [backendApi.reducerPath]: backendApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(pokemonApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
