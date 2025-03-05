import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Country } from "./country-list.type";

export const fetchCountryList = createAsyncThunk<Country[]>("fetch/countryList", async () => {
  const response = await axios.get("https://restcountries.com/v2/all?fields=name,region,flag");
  return response.data;
});