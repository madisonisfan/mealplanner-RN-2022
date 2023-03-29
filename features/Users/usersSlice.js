import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../shared/baseUrl";

const initialState = {
  usersArray: [],
  isLoading: true,
  errMsg: "",
};

const userId = "6423b3f146c37541574900bd";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  console.log(`fetch users`);
  const response = await fetch(baseUrl + "users");
  if (!response.ok) {
    return Promise.reject("Unable to fetch, status: ", response.status);
  }
  const data = await response.json();
  console.log(`fetch users, DATA: `, data);
  return data;
});

/*
export const editUser = createAsyncThunk("users/editUser", async (newData) => {
  const response = await fetch(baseUrl + "users/" + userId);
  if (!response.ok) {
    return Promise.reject("Unable to fetch, status: ", response.status);
  }
});
*/
/*
export const handleFavorites = createAsyncThunk(
  "users/putFavorites",
  async (recipeID) => {
    const response = await fetch(baseUrl + "users/" + userId);
    if (!response.ok) {
      return Promise.reject("Unable to edit user, status: ", response.status);
    }


  }
);
*/

export const putFavorites = createAsyncThunk(
  "users/putFavorites",
  async (favorites) => {
    console.log(`PUT FAVORITES`, favorites);
    const response = await fetch(baseUrl + "users/" + userId, {
      method: "PUT",
      body: JSON.stringify({ favorites: favorites }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      return Promise.reject("Unable to edit user, status: ", response.status);
    }

    let data = await response.json();
    return data;
  }
);

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
      console.log("action.payload", action.payload);
      state.isLoading = false;
      state.errMsg = "";
      state.usersArray = action.payload;

      console.log(`fetch users state, `, state.usersArray[0]);
    },
  },
});

export const usersReducers = usersSlice.reducer;
