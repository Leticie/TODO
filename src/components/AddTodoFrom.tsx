import { Button, Grid, TextField } from "@mui/material";

export const AddTodoForm = () => {
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
        <TextField label="Name" variant="outlined" fullWidth />
      </Grid>
      <Grid item alignSelf="center">
        <Button sx={{ width: 100 }} variant="contained">
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};
