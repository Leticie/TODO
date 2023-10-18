import { Checkbox, Grid, Typography } from "@mui/material";
import { TodoItemMoreButton } from "./TodoItemMoreButton";
import { TaskState } from "../types/types";

interface TodoItemI {
  todoItem: TaskState;
}


export const TodoItem = ({todoItem}: TodoItemI) => {
  return (
    <Grid
      container
      sx={{ background: todoItem.completed ? "green" : "yellow", padding: 1, border: 1, borderTop: 0 }}
    >
      <Grid container item alignItems="center" justifyContent="space-between">
        <Checkbox />
        <Typography variant="h6" component="h4">
          {todoItem.text}
        </Typography>
        <TodoItemMoreButton todoItem={todoItem}/>
      </Grid>
    </Grid>
  );
};
