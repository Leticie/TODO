import { TodoItem } from "./TodoItem";
import { RootState } from "../redux/store";
import { apiSlice } from "../redux/features/api/apiSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addTasks } from "../redux/features/tasks/tasksSlice";
import { useAppSelector } from "../hooks";

export const TodoListItems = () => {
  const storedTodos = useAppSelector((state: RootState) => state.tasks);
  const tasks = apiSlice.useGetTasksQuery();

  console.log(tasks.data, "be")
  console.log(storedTodos, "stored")

  const dispatch = useDispatch();

  useEffect(() => {
    if (tasks.data === undefined) {
      return 
    }
    dispatch(addTasks(tasks.data));
  }, [tasks.data, dispatch]);

  return (
    <>
      {storedTodos.map((todoItem) => (
        <TodoItem key={todoItem.id} todoItem={todoItem} />
      ))}
    </>
  );
};
