import { Box, Grid } from "@mui/material";
import { SelectButtons } from "./SelectButtons";
import { FilterButton } from "./FilterButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";

export const MenuBar = () => {
  return (
    <Box sx={{ backgroundColor: "#B5D3FE", borderTopRightRadius: 3, borderTopLeftRadius: 3 }}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <SelectButtons />
        </Grid>
        <Grid item sx={{ marginRight: "auto" }}>
          <CheckIcon sx={{ margin: 1 }} />
          <DeleteIcon sx={{ margin: 1 }} />
        </Grid>
        <Grid item>
          <FilterButton />
        </Grid>
      </Grid>
    </Box>
  );
};
