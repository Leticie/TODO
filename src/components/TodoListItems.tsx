import { TodoItem } from "./TodoItem";
import { RootState } from "../redux/store";
import { apiSlice } from "../redux/features/api/apiSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addTasks } from "../redux/features/tasks/tasksSlice";
import { useAppSelector } from "../hooks";
import { Typography } from "@mui/material";

export const TodoListItems = () => {
  const storedTodos = useAppSelector((state: RootState) => state.tasks);
  const tasks = apiSlice.useGetTasksQuery();

  const completedTodos = storedTodos.filter(
    (todo) => todo.completed
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (tasks.data === undefined) {
      return;
    }
    dispatch(addTasks(tasks.data));
  }, [tasks.data, dispatch]);

  return (
    <>
      {storedTodos.map((todoItem) => (
        <TodoItem key={todoItem.id} todoItem={todoItem} />
      ))}
      <Typography variant="h6" align="center" sx={{marginTop: 2}}>Completed: {completedTodos.length}</Typography>
    </>
  );
};
