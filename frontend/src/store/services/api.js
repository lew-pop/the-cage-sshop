// src/services/api.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8000/api",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().userLogin.userInfo?.token;
    if (token) {
      console.log("API Token:", token); 
      headers.set("Authorization", `Bearer ${token}`);
    }
    headers.set("Content-type", "application/json");
    return headers;
  },
});

export const api = createApi({
  baseQuery: baseQuery,
  tagTypes: ["User", "Product", "Order"],

  endpoints: () => ({}),
});