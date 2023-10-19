import { Box, Grid } from "@mui/material";
import { FilterButton } from "./FilterButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import { useAppSelector } from "../hooks";
import { RootState } from "../redux/store";
import { ALL } from "../constants/constants";

export const MenuBar = () => {
  const filter = useAppSelector((state: RootState) => state.filter);

  return (
    <Box
      sx={{
        backgroundColor: "#1976D2",
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        border: 1,
      }}
    >
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <FilterButton />
        </Grid>
        {filter !== ALL && (
          <Grid item >
            <CheckIcon sx={{ margin: 1, color: "white" }} />
            <DeleteIcon sx={{ margin: 1, color: "white" }} />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};
