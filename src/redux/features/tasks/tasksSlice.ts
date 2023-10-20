import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TaskState } from "../../../types/types";
import { getStateWithModifiedTask, getStateWithRemovedTask } from "../../../helpers/taskSliceHelpers";

const initialState: TaskState[] = [];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskState>) => {
      state.unshift(action.payload);
    },
    addTasks: (state, action: PayloadAction<TaskState[]>) => {
      return action.payload;
    },
    finishTask: (state, action: PayloadAction<TaskState>) => {
      const stateWithFinishedTask = getStateWithModifiedTask(state, action.payload);
      return stateWithFinishedTask;
    },
    removeTask: (state, action: PayloadAction<TaskState>) => {
      const stateWithoutTask = getStateWithRemovedTask(state, action.payload)
      return stateWithoutTask;
    },
    renameTask: (state, action: PayloadAction<TaskState>) => {
      const stateWithRenamedTask = getStateWithModifiedTask(state, action.payload)
      return stateWithRenamedTask
    },
  },
});

export const { addTask, addTasks, finishTask, removeTask, renameTask } =
  tasksSlice.actions;

export default tasksSlice.reducer;
