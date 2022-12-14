import { configureStore } from "@reduxjs/toolkit";
import { favoritesReducer } from "../features/Favorites/favoritesSlice";
import { recipeReducer } from "../features/Recipes/recipesSlice";
import { mealplanReducer } from "../features/Mealplan/mealplanSlice";
import { postsReducer } from "../features/Posts/postSlice";

export const store = configureStore({
  reducer: {
    recipes: recipeReducer,
    favorites: favoritesReducer,
    mealplan: mealplanReducer,
    posts: postsReducer,
  },
});
