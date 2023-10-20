import { Grid } from "@mui/material";
import { MenuBar } from "./MenuBar";
import { TodoListTableContent } from "./TodoListTableContent";
import { getTodoListTableStyles } from "../styles/TodoListTableStyles";

export const TodoListTable = () => {
  const styles = getTodoListTableStyles();

  return (
    <Grid container flexDirection="column" sx={styles.container}>
      <Grid item>
        <MenuBar />
      </Grid>
      <Grid item>
        <TodoListTableContent />
      </Grid>
    </Grid>
  );
};
