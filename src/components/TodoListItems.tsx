import { Typography } from "@mui/material";
import { TodoItem } from "./TodoItem";

export const TodoListItems = () => {
  return (
    <>
      <TodoItem />
      <Typography>You have no todos yet</Typography>
    </>
  );
};
