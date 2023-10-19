import MenuItem from "@mui/material/MenuItem";
import { Checkbox, Grid, IconButton, Menu } from "@mui/material";
import { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export const SelectButtons = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid
      container
      sx={{ border: 1, borderRadius: 1, marginLeft: 1, width: "auto", color: "#314e82" }}
      justifyContent="space-between"
    >
      <Grid item sx={{ borderRight: 1 }}>
        <Checkbox sx={{color: "white"}}/>
      </Grid>
      <Grid item>
        <IconButton
          onClick={handleButtonClick}
        >
          <ArrowDropDownIcon/>
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Select all</MenuItem>
          <MenuItem onClick={handleClose}>Select in progress</MenuItem>
          <MenuItem onClick={handleClose}>Select done</MenuItem>
        </Menu>
      </Grid>
    </Grid>
  );
};
