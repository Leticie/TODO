import { Checkbox, Grid, Typography } from "@mui/material";
import { TodoItemMoreButton } from "./TodoItemMoreButton";

export const TodoItem = () => {
  return (
    <Grid
      container
      sx={{ background: "#EFF5FE ", padding: 1, border: 1 }}
    >
      <Grid container item alignItems="center" justifyContent="space-between">
        <Checkbox />
        <Typography variant="h6" component="h4">
          Hello
        </Typography>
        <TodoItemMoreButton />
      </Grid>
    </Grid>
  );
};
