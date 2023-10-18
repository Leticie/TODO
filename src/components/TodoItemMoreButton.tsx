import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { TaskState } from "../types/types";
import { apiSlice } from "../redux/features/api/apiSlice";
import { TodoItemEditDialog } from "./TodoItemEditDialog";

interface TodoItemMoreButtonI {
  todoItem: TaskState;
}

export const TodoItemMoreButton = ({ todoItem }: TodoItemMoreButtonI) => {
  const [deleteTask] = apiSlice.useDeleteTaskMutation();
  const [completeTask] = apiSlice.useCompleteTaskMutation();
  const [incompleteTask] = apiSlice.useIncompleteTaskMutation();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [editDialogOpen, setEditDialogOpen] = useState(false);

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    deleteTask(todoItem);
    setAnchorEl(null);
  };

  const handleCompleteChange = () => {
    todoItem.completed
      ? incompleteTask(todoItem.id)
      : completeTask(todoItem.id);
    setAnchorEl(null);
  };

  const handleEdit = () => {
    setEditDialogOpen(true);
    setAnchorEl(null);
  };

  const completeOption = todoItem.completed ? "Incomplete" : "Complete";

  return (
    <>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleButtonClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleCompleteChange}>{completeOption}</MenuItem>
        <MenuItem onClick={handleEdit}>Edit</MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
      <TodoItemEditDialog open={editDialogOpen} setOpen={setEditDialogOpen} todoItem={todoItem}/>
    </>
  );
};
