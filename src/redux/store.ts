import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./features/tasks/tasksSlice";
import filterReducer from "./features/filter/filterSlice";
import errorHandlerReducer from "./features/errorHandler/errorHandlerSlice";
import { apiSlice } from "./features/api/apiSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filter: filterReducer,
    errorHandler: errorHandlerReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
