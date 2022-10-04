import { configureStore } from "@reduxjs/toolkit";
import { favoritesReducer } from "../features/Favorites/favoritesSlice";
import { recipeReducer } from "../features/Recipes/recipesSlice";

export const store = configureStore({
  reducer: {
    recipes: recipeReducer,
    favorites: favoritesReducer,
  },
});
