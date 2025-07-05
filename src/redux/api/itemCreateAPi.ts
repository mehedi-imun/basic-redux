import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const itemsApi = createApi({
  reducerPath: "itemApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  tagTypes: ["item", "user", "counter"],
  endpoints: (builder) => ({
    getItems: builder.query({
      query: () => "items",
      providesTags: ["item"],
    }),
    addItem: builder.mutation({
      query: (body) => ({
        url: "items",
        method: "POST",
        body,
      }),
      invalidatesTags: ["item"],
    }),

    updateItem: builder.mutation({
      query: ({ id, body }) => ({
        url: `items/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags:["item"]
    }),
    
  }),
});

export const { useGetItemsQuery, useAddItemMutation, useUpdateItemMutation } = itemsApi;
