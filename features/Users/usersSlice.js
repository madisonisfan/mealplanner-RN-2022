import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../shared/baseUrl";

const initialState = {
  usersArray: [],
  isLoading: true,
  errMsg: "",
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch(baseUrl + "users");

  if (!response.ok) {
    return Promise.reject("Unable to fetch, status: ", response.status);
  }
  const data = await response.json();
  return data;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchUsers.rejected]: (state, action) => {
      state.isLoading = false;
      errMsg = action.error ? action.error.message : "Error: User Fetch failed";
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.usersArray = action.payload;
    },
  },
});

export const usersReducers = usersSlice.reducer;
