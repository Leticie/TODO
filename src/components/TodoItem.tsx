import { Grid, Typography } from "@mui/material";
import { TodoItemMoreButton } from "./TodoItemMoreButton";
import { TaskState } from "../types/types";
import { getTodoItemStyles } from "../styles/TodoItemStyles";

interface TodoItemI {
  todoItem: TaskState;
}

export const TodoItem = ({ todoItem }: TodoItemI) => {
  const styles = getTodoItemStyles(todoItem.completed);

  return (
    <Grid
      container
      sx={styles.container}
    >
      <Grid container item alignItems="center">
        <Grid item xs={11}>
          <Typography
            variant="body1"
            color={todoItem.completed ? "#7a7a7a" : "black"}
          >
            {todoItem.text}
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <TodoItemMoreButton todoItem={todoItem} />
        </Grid>
      </Grid>
    </Grid>
  );
};
