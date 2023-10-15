import { Checkbox, Grid, Typography } from "@mui/material";
import { TodoItemMoreButton } from "./TodoItemMoreButton";

interface TodoItemI {
  name: string;
  completed: boolean;
}

export const TodoItem = ({ name, completed }: TodoItemI) => {
  return (
    <Grid
      container
      sx={{ background: completed ? "green" : "yellow", padding: 1, border: 1, borderTop: 0 }}
    >
      <Grid container item alignItems="center" justifyContent="space-between">
        <Checkbox />
        <Typography variant="h6" component="h4">
          {name}
        </Typography>
        <TodoItemMoreButton />
      </Grid>
    </Grid>
  );
};
