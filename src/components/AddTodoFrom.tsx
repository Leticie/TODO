import { Button, Grid, TextField } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { apiSlice } from "../redux/features/api/apiSlice";
import { useAppDispatch } from "../hooks";
import { addTask } from "../redux/features/tasks/tasksSlice";

export const AddTodoForm = () => {
  const [postTask, { data, error }] = apiSlice.usePostTaskMutation();
  const [input, setInput] = useState<string>("");

  const dispatch = useAppDispatch();

  const handleSubmit = useCallback(() => {
    postTask(input);
    setInput("");
  }, [postTask, input]);

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
      sx={{ marginY: 4 }}
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
          sx={{ width: 100 }}
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
