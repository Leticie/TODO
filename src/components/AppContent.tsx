import { Container, Typography } from "@mui/material";
import { AddTodoForm } from "./AddTodoFrom";
import { TodoListTable } from "./TodoListTable";
import { getAppContentStyles } from "../styles/AppContentStyles";
import { ErrorHandlerDialog } from "./ErroHandlerDialog";

export const AppContent = () => {
  const styles = getAppContentStyles()

  return (
    <Container sx={styles.container}>
      <ErrorHandlerDialog />
      <Typography variant="h1" component="h1" align="center">
        Todo list
      </Typography>
      <AddTodoForm />
      <TodoListTable />
    </Container>
  );
};
