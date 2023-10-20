import { TaskState } from "../types/types";

export const getStateWithModifiedTask = (
  state: TaskState[],
  taskToUpdate: TaskState
) => {
  const newState = [...state];
  const index = newState.findIndex((todo) => {
    return todo.id === taskToUpdate.id;
  });
  if (index !== -1) {
    newState[index] = taskToUpdate;
  }
  return newState;
};

export const getStateWithRemovedTask = (
  state: TaskState[],
  taskToRemove: TaskState
) => {
  const stateWithoutTask = state.filter((todo) => {
    return todo.id !== taskToRemove.id;
  });
  return stateWithoutTask;
};
