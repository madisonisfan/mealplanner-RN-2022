import { createSlice } from "@reduxjs/toolkit";
import { POSTS } from "../../shared/posts";

const initialState = {
  postsArray: POSTS,
};

const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {},
});

export const postsReducer = postsSlice.reducer;

export const selectAllPosts = (state) => {
  console.log(`select all posts`);
  console.log(`state.posts`, state.posts);
  return state.posts.postsArray;
};
