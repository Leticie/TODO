import { TodoItem } from "./TodoItem";
import { RootState } from "../redux/store";
import { apiSlice } from "../redux/features/api/apiSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addTasks } from "../redux/features/tasks/tasksSlice";
import { useAppSelector } from "../hooks";
import { Typography, CircularProgress, Grid } from "@mui/material";
import { TaskState } from "../types/types";

export const TodoListItems = () => {
  const storedTodos = useAppSelector((state: RootState) => state.tasks);
  const filter = useAppSelector((state: RootState) => state.filter);
  const tasks = apiSlice.useGetTasksQuery();

  const getFilteredStoredTodos = (storedTodos: TaskState[], filter: string) => {
    if (filter === "all") {
      return storedTodos;
    }
    if (filter === "completed") {
      return storedTodos.filter((todo) => {
        return !todo.completed;
      });
    }
    return storedTodos.filter((todo) => {
      return todo.completed;
    });
  };

  const filteredStoredTodos = getFilteredStoredTodos(storedTodos, filter);

  const completedTodosTotal = storedTodos.filter((todo) => todo.completed);

  const dispatch = useDispatch();

  useEffect(() => {
    if (tasks.data === undefined) {
      return;
    }
    dispatch(addTasks(tasks.data));
  }, [tasks.data, dispatch]);

  return (
    <Grid container justifyContent="center">
      {tasks.isLoading ? (
        <CircularProgress sx={{ marginTop: 5 }} />
      ) : (
        <>
          {filteredStoredTodos.map((todoItem) => (
            <TodoItem key={todoItem.id} todoItem={todoItem} />
          ))}
          <Typography variant="h6" align="center" sx={{ marginTop: 2 }}>
            Completed: {completedTodosTotal.length}
          </Typography>
        </>
      )}
    </Grid>
  );
};
