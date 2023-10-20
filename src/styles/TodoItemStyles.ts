export const getTodoItemStyles = (completed: boolean) => ({
  container: {
    background: completed ? "#f0f4ff" : "#f2da52",
    padding: 1,
    borderBottom: 1,
    borderColor: "#9d9d9e",
  },
});
