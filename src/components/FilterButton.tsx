import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import { ALL, DONE, PROGRESS } from "../constants/constants";

export const FilterButton = () => {
  const [filter, setFilter] = useState<string>(ALL);

  const handleFilterChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <Select value={filter} onChange={handleFilterChange}>
        <MenuItem value={ALL}>Show all</MenuItem>
        <MenuItem value={PROGRESS}>Show in progress</MenuItem>
        <MenuItem value={DONE}>Show done</MenuItem>
      </Select>
    </FormControl>
  );
};
