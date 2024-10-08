// src/services/api.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const myBaseQuery = fetchBaseQuery({
  baseUrl: "https://the-cage-sshop-800ff767dfb9.herokuapp.com/api/",
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

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: myBaseQuery,
  tagTypes: ["User", "Product", "Order"],
  endpoints: () => ({}),
});