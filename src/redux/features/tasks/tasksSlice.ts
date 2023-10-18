import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TaskState } from "../../../types/types";

const initialState: TaskState[] = [];

export const tasksSlice = createSlice({
  name: "Tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskState>) => {
      state.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask } = tasksSlice.actions;

export default tasksSlice.reducer;
