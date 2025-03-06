import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Country } from "./country-list.type";

export const fetchCountryList = createAsyncThunk<Country[]>("fetch/countryList", async () => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/all?fields=name,region,flag`);
  return response.data;
});