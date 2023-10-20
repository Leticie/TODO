import { ALL, COMPLETED } from "../constants/constants";
import { TaskState } from "../types/types";

export const getFilteredStoredTodos = (
  storedTodos: TaskState[],
  filter: string
) => {
  if (filter === ALL) {
    return storedTodos;
  }
  if (filter === COMPLETED) {
    return storedTodos.filter((todo) => {
      return !todo.completed;
    });
  }
  return storedTodos.filter((todo) => {
    return todo.completed;
  });
};

export const getCompletedTodosTotal = (storedTodos: TaskState[]) => {
  return storedTodos.filter((todo) => todo.completed);
};
