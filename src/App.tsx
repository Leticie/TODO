import { Container } from "@mui/material";
import { AppHeader } from "./components/AppHeader";
import { TodoListOverview } from "./components/TodoListOverview";
import { AddTodoForm } from "./components/AddTodoFrom";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { apiSlice } from "./redux/features/api/apiSlice";

function App() {
  return (
    <ApiProvider api={apiSlice}>
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
    </ApiProvider>
  );
}

export default App;
