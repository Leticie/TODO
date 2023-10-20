import { RootState } from "../redux/store";
import { useAppSelector } from "../hooks";
import { Dialog, DialogTitle } from "@mui/material";
import { useDispatch } from "react-redux";
import { handleError } from "../redux/features/errorHandler/errorHandlerSlice";

export const ErrorHandlerDialog = () => {
  const errorHandler = useAppSelector((state: RootState) => state.errorHandler);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(handleError(false));
  };

  return (
    <Dialog open={errorHandler} onClose={handleClose}>
      <DialogTitle>Something went wrong, please reload the page</DialogTitle>
    </Dialog>
  );
};
