import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { TaskState } from "../types/types";
import { apiSlice } from "../redux/features/api/apiSlice";
import { useState } from "react";

interface TodoItemEditDialogI {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  todoItem: TaskState;
}

export const TodoItemEditDialog = ({
  open,
  setOpen,
  todoItem,
}: TodoItemEditDialogI) => {
  const [updateTextTask] = apiSlice.useUpdateTextTaskMutation();

  const [editedItemName, setEditedItemName] = useState<string>(todoItem?.text);

  const handleClose = () => {
    setOpen(false);
  };

  const handleEdit = () => {
    updateTextTask({taskId: todoItem.id, updatedText: editedItemName});
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Name"
          fullWidth
          variant="outlined"
          value={editedItemName}
          onChange={(event) => setEditedItemName(event.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleEdit}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};
