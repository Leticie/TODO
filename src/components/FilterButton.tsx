import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import { ALL, DONE, PROGRESS } from "../constants/constants";
import { useDispatch } from "react-redux";
import { updateFilter } from "../redux/features/filter/filterSlice";
import { getFilterButtonStyles } from "../styles/FilterButtonStyles";

export const FilterButton = () => {
  const [filter, setFilter] = useState<string>(ALL);

  const styles = getFilterButtonStyles()

  const dispatch = useDispatch();

  const handleFilterChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value);
    dispatch(updateFilter(event.target.value));
  };

  return (
    <FormControl sx={styles.container}>
      <Select
        value={filter}
        onChange={handleFilterChange}
        sx={styles.select}
      >
        <MenuItem value={ALL}>Show all</MenuItem>
        <MenuItem value={PROGRESS}>Show in progress</MenuItem>
        <MenuItem value={DONE}>Show done</MenuItem>
      </Select>
    </FormControl>
  );
};
