import { createSlice } from "@reduxjs/toolkit";
import { getCampers } from "./operations";

const handlePending = (state) => {
  state.loading = true;
  state.error = false;
};

const handleRejected = (state) => {
  state.loading = false;
  state.error = true;
};

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    loading: false,
    error: false,
    page: 1,
  },
  reducers: {
    nextPage(state) {
      state.page = state.page + 1;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getCampers.pending, handlePending)
      .addCase(getCampers.fulfilled, (state, action) => {
        if (state.page === 1) {
          state.items = action.payload;
        } else {
          state.items.push(...action.payload);
        }
      })
      .addCase(getCampers.rejected, handleRejected),
});

export const { nextPage } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
