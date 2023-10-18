import { TodoItem } from "./TodoItem";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { apiSlice } from "../redux/features/api/apiSlice";

export const TodoListItems = () => {
  const storedTodos = useSelector((state: RootState) => state.tasks);
  const tasks = apiSlice.useGetTasksQuery();
  console.log(storedTodos); //FIX MAP
  return (
    <>
      {tasks.data?.map((todoItem) => (
        <TodoItem todoItem={todoItem} />
      ))}
    </>
  );
};
