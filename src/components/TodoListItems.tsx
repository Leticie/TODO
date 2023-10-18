import { TodoItem } from "./TodoItem";
import { RootState } from "../redux/store";
import { apiSlice } from "../redux/features/api/apiSlice";
import { useSelector } from "react-redux";

export const TodoListItems = () => {
  const storedTodos = useSelector((state: RootState) => state.tasks);
  const tasks = apiSlice.useGetTasksQuery();
  return (
    <>
      {storedTodos.map((todoItem) => (
        <TodoItem todoItem={todoItem} />
      ))}
    </>
  );
};
