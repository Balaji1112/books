import { createSlice } from "@reduxjs/toolkit";

export const booksSlice = createSlice({
  name: "books",
  initialState: {
    value: {
      author: "",
      country: "",
      language: "",
      link: "",
      pages: "",
      title: "",
      year: "",
    },
  },
  reducers: {
    edit: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { edit } = booksSlice.actions;
export default booksSlice.reducer;
