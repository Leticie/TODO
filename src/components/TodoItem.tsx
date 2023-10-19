import { Grid, Typography } from "@mui/material";
import { TodoItemMoreButton } from "./TodoItemMoreButton";
import { TaskState } from "../types/types";

interface TodoItemI {
  todoItem: TaskState;
}

export const TodoItem = ({ todoItem }: TodoItemI) => {
  return (
    <Grid
      container
      sx={{
        background: todoItem.completed ? "#f0f4ff" : "#f2da52",
        padding: 1,
        borderBottom: 1,
        borderColor: "#9d9d9e",
      }}
    >
      <Grid container item alignItems="center" justifyContent="space-between">
        <Grid item>
          <Typography
            variant="body1"
            color={todoItem.completed ? "grey" : "black"}
          >
            {todoItem.text}
          </Typography>
        </Grid>
        <Grid item>
          <TodoItemMoreButton todoItem={todoItem} />
        </Grid>
      </Grid>
    </Grid>
  );
};
