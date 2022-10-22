import { createSlice } from "@reduxjs/toolkit";
import { POSTS } from "../../shared/posts";

const initialState = {
  postsArray: POSTS,
};

const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    addPost: (state, action) => {
      const newPost = {
        id: state.postsArray.length + 1,
        date: new Date(Date.now()).toISOString(),
        ...action.payload,
      };

      console.log(`new post`, newPost);
      state.postsArray.push(newPost);
    },
  },
});

export const postsReducer = postsSlice.reducer;
export const { addPost } = postsSlice.actions;

export const selectAllPosts = (state) => {
  console.log(`select all posts`);
  console.log(`state.posts`, state.posts);
  return state.posts.postsArray;
};
