import { Button, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { apiSlice } from "../redux/features/api/apiSlice";
import { useAppDispatch } from "../hooks";
import { addTask } from "../redux/features/tasks/tasksSlice";
import { getAddTodoFormStyles } from "../styles/AddTodoFormStyles";

export const AddTodoForm = () => {
  const [postTask, { data }] = apiSlice.usePostTaskMutation();
  const [input, setInput] = useState<string>("");

  const dispatch = useAppDispatch();

  const styles = getAddTodoFormStyles()

  const handleSubmit = () => {
    postTask(input);
    setInput("");
  };

  useEffect(() => {
    if (data === undefined) {
      return
    }
    dispatch(addTask(data));
  }, [data, dispatch]);

  return (
    <Grid
      container
      item
      spacing={2}
      flexDirection="row"
      justifyContent="center"
      sx={styles.container}
    >
      <Grid item>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
      </Grid>
      <Grid item alignSelf="center">
        <Button
          sx={styles.button}
          variant="contained"
          onClick={handleSubmit}
          disabled={!input.length}
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};
