import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.data.map((user) => user));
});
