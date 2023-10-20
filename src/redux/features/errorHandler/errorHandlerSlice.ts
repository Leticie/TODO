import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: boolean = false;

export const errorHandlerSlice = createSlice({
  name: "errorHandler",
  initialState,
  reducers: {
    handleError: (state, action: PayloadAction<boolean>) => {
      return state = action.payload;
    },

  },
});

export const { handleError } = errorHandlerSlice.actions;

export default errorHandlerSlice.reducer;