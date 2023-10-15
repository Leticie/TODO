import { Grid } from "@mui/material";
import { MenuBar } from "./MenuBar";
import { TodoListItems } from "./TodoListItems";

export const TodoListOverview = () => {
  return (
    <Grid container flexDirection="column">
      <Grid item>
        <MenuBar />
      </Grid>
      <Grid item>
        <TodoListItems />
      </Grid>
    </Grid>
  );
};
