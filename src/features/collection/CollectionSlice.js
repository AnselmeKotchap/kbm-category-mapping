import { createSlice } from "@reduxjs/toolkit";

export const collectionSlice = createSlice({
  name: "collection",
  initialState: {
    data: {},
  },
  reducers: {
    setCollection: (state, action) => {
      state.data = action.payload;
    },
  },
});
