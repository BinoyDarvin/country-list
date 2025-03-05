import { configureStore } from "@reduxjs/toolkit";
import CountryListReducer from "../services/country-list/country-list.slice";;

export const store = configureStore({
  reducer: CountryListReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;