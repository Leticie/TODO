import { Grid } from "@mui/material";
import { MenuBar } from "./MenuBar";
import { TodoListTableContent } from "./TodoListTableContent";

export const TodoListTable = () => {
  return (
    <Grid container flexDirection="column">
      <Grid item>
        <MenuBar />
      </Grid>
      <Grid item>
        <TodoListTableContent />
      </Grid>
    </Grid>
  );
};
