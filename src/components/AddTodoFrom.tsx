import { Button, Grid, TextField } from "@mui/material";
import { useAppDispatch } from "../hooks";
import { useState } from "react";
import { addTask } from "../redux/features/tasks/tasksSlice";

export const AddTodoForm = () => {
  const [name, setName] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    dispatch(
      addTask({ id: name, text: name, completed: false, createdDate: +new Date() })
    );
    setName("")
  };

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
          value={name}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setName(event.target.value);
          }}
        />
      </Grid>
      <Grid item alignSelf="center">
        <Button sx={{ width: 100 }} variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};
