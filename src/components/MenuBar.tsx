import { Box, Grid } from "@mui/material";
import { FilterButton } from "./FilterButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import { useAppSelector } from "../hooks";
import { RootState } from "../redux/store";
import { ALL } from "../constants/constants";
import { getMenuBarStyles } from "../styles/MenuBarStyles";

export const MenuBar = () => {
  const filter = useAppSelector((state: RootState) => state.filter);

  const styles = getMenuBarStyles();

  return (
    <Box sx={styles.container}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <FilterButton />
        </Grid>
        {filter !== ALL && (
          <Grid item>
            <CheckIcon sx={styles.icon} />
            <DeleteIcon sx={styles.icon} />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};
