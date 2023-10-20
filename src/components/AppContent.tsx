import { Container, Typography } from "@mui/material";
import { AddTodoForm } from "./AddTodoFrom";
import { TodoListOverview } from "./TodoListOverview";

export const AppContent = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h1" component="h1" align="center">
        Todo list
      </Typography>
      <AddTodoForm />
      <TodoListOverview />
    </Container>
  );
};
