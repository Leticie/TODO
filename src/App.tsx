import { Container } from "@mui/material";
import { AppHeader } from "./components/AppHeader";
import { TodoListOverview } from "./components/TodoListOverview";
import { AddTodoForm } from "./components/AddTodoFrom";

function App() {
  return (
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <AppHeader />
        <AddTodoForm />
        <TodoListOverview />
      </Container>
  );
}

export default App;
