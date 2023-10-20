import { TodoItem } from "./TodoItem";
import { RootState } from "../redux/store";
import { apiSlice } from "../redux/features/api/apiSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addTasks } from "../redux/features/tasks/tasksSlice";
import { useAppSelector } from "../hooks";
import { Typography, CircularProgress, Grid } from "@mui/material";
import {
  getCompletedTodosTotal,
  getFilteredStoredTodos,
} from "../helpers/todoListItemsHelpers";
import { getTodoListContentStyles } from "../styles/TodoListTableContentStyles";
import { handleError } from "../redux/features/errorHandler/errorHandlerSlice";

export const TodoListTableContent = () => {
  const storedTodos = useAppSelector((state: RootState) => state.tasks);
  const filter = useAppSelector((state: RootState) => state.filter);
  const tasks = apiSlice.useGetTasksQuery();

  const styles = getTodoListContentStyles();

  const dispatch = useDispatch();

  const filteredStoredTodos = getFilteredStoredTodos(storedTodos, filter);
  const completedTodosTotal = getCompletedTodosTotal(storedTodos);

  useEffect(() => {
    if (tasks.isError) {
      dispatch(handleError(true));
    }
    if (tasks.data === undefined) {
      return;
    }
    dispatch(addTasks(tasks.data));
  }, [tasks.data, tasks.isError, dispatch]);

  return (
    <Grid container justifyContent="center">
      {tasks.isLoading ? (
        <CircularProgress sx={styles.spinner} />
      ) : (
        <>
          {filteredStoredTodos.map((todoItem) => (
            <TodoItem key={todoItem.id} todoItem={todoItem} />
          ))}
          <Typography variant="button" align="center" sx={styles.text}>
            Completed: {completedTodosTotal.length}
          </Typography>
        </>
      )}
    </Grid>
  );
};
