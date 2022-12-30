import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://localhost:5000",
  }),
  endpoints: (builder) => ({
    getColumns: builder.query({ query: () => "/api/kanban/get-columns" }),
  }),
});

export const { useGetColumnsQuery } = apiSlice;
