import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TaskState } from "../../../types/types";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080" }),
  tagTypes: ["Tasks"],
  endpoints: (builder) => ({
    getTasks: builder.query<TaskState[], void>({
      query: () => "/tasks",
    }),
    postTask: builder.mutation<TaskState, string>({
      query(text) {
        return {
          url: "/tasks",
          method: "POST",
          body: { text },
        };
      },
      invalidatesTags: [{ type: "Tasks", id: "LIST" }],
    }),
    deleteTask: builder.mutation<TaskState, TaskState>({
      query(task) {
        return {
          url: `/tasks/${task.id}`,
          method: "DELETE",
          body: task,
        };
      },
      invalidatesTags: [{ type: "Tasks", id: "LIST" }],
    }),
    updateTextTask: builder.mutation<TaskState, {taskId: string, updatedText: string}>({
      query(params) {
        return {
          url: `/tasks/${params.taskId}`,
          method: "POST",
          body: { "text": params.updatedText },
        };
      },
      invalidatesTags: [{ type: "Tasks", id: "LIST" }],
    }),
    completeTask: builder.mutation<TaskState, string>({
      query(id) {
        return {
          url: `/tasks/${id}/complete`,
          method: "POST",
          body: { id },
        };
      },
      invalidatesTags: [{ type: "Tasks", id: "LIST" }],
    }),
    incompleteTask: builder.mutation<TaskState, string>({
      query(id) {
        return {
          url: `/tasks/${id}/incomplete`,
          method: "POST",
          body: { id },
        };
      },
      invalidatesTags: [{ type: "Tasks", id: "LIST" }],
    }),
  }),
});

export const {
  useGetTasksQuery,
  usePostTaskMutation,
  useDeleteTaskMutation,
  useUpdateTextTaskMutation,
  useCompleteTaskMutation,
  useIncompleteTaskMutation,
} = apiSlice;
