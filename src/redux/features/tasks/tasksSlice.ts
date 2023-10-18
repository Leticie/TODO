import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TaskState } from "../../../types/types";

const initialState: TaskState[] = [];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskState>) => {
      state.unshift(action.payload); // FIX THIS VIA RETURN (immutable)
    },
    addTasks: (state, action: PayloadAction<TaskState[]>) => {
      return action.payload;
    },
    finishTask: (state, action: PayloadAction<TaskState>) => {
      const index = state.findIndex((todo) => {
        return todo.id === action.payload.id;
      });
      if (index !== -1) {
        state[index] = action.payload;
      }
      return state;
    },
    removeTask: (state, action: PayloadAction<TaskState>) => {
      const stateWithoutTask = state.filter((todo) => {
        console.log(action.payload)
        return todo.id !== action.payload?.id;
      });
      console.log(stateWithoutTask)
      return stateWithoutTask;
    },
    renameTask: (state, action: PayloadAction<TaskState>) => {
      const index = state.findIndex((todo) => {
        return todo.id === action.payload.id;
      });
      if (index !== -1) {
        state[index] = action.payload;
      }
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask, addTasks, finishTask, removeTask, renameTask} = tasksSlice.actions;

export default tasksSlice.reducer;
