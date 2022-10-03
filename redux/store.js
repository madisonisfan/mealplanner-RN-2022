import { configureStore } from "@reduxjs/toolkit";
import { recipeReducer } from "../features/Recipes/recipesSlice";

export const store = configureStore({
  reducer: {
    recipes: recipeReducer,
  },
});
