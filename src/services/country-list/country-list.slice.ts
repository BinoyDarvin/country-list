import { createSlice } from "@reduxjs/toolkit";
import { ApiStatus } from "../../types/types";
import { CountryListReducer } from "./country-list.type";
import { fetchCountryList } from "./country-list.service";

const initialState: CountryListReducer = {
  status: ApiStatus.Idle,
  data: []
};

const countryListSlice = createSlice({
  name: "countryList",
  initialState,
  reducers: {
    clearFetchCountryList(state) {
      state = initialState;
    }
  },
  extraReducers(builder) {
    builder.addCase(fetchCountryList.pending, (state) => {
      state.status = ApiStatus.Pending;
    });
    builder.addCase(fetchCountryList.fulfilled, (state, action) => {
        state.status = ApiStatus.Fulfilled;
        state.data = action.payload;
    });
    builder.addCase(fetchCountryList.rejected, (state) => {
      state.status = ApiStatus.Rejected;
    });
  },
});

export const { clearFetchCountryList } = countryListSlice.actions;
export default countryListSlice.reducer;