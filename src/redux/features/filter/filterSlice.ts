import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ALL } from "../../../constants/constants";

const initialState: string = ALL;

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateFilter: (state, action: PayloadAction<string>) => {
      return action.payload;
    },

  },
});

export const { updateFilter} = filterSlice.actions;

export default filterSlice.reducer;
