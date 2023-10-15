import { TodoItem } from "./TodoItem";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const TodoListItems = () => {
  const storedTodos = useSelector((state: RootState) => state.tasks);
  return (
    <>
      {storedTodos.map((todoItem) => (
        <TodoItem name={todoItem.text} completed={todoItem.completed}/>
      ))}
    </>
  );
};
