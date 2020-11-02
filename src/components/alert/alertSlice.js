import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
  name: "alert",
  initialState: {
    message: "",
  },
  reducers: {
    show: (state, action) => {
      state.message = action.payload;
    },
    dismiss: (state) => {
      state.message = "";
    },
  },
});

export const { show, dismiss } = alertSlice.actions;

export const selectMessage = (state) => state.alert.message;

export default alertSlice.reducer;
