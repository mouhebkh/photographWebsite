// reducers/features/contactSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  message: "",
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    updateFormData(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    resetFormData(state) {
      return initialState; // Reset the state to the initial state
    },
  },
});

export const { updateFormData, resetFormData } = contactSlice.actions;
export default contactSlice.reducer;
