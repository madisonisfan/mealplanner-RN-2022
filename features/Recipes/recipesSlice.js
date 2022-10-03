import { RECIPES } from "../../shared/recipes";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipesArray: RECIPES,
};

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  //reducers: [],
});

export const recipeReducer = recipesSlice.reducer;

export const selectRecipeById = (id) => (state) => {
  console.log(`id passed`, id);
  return state.recipes.recipesArray.find(
    (recipe) => recipe.id === parseInt(id)
  );
};

export const selectAllRecipes = (state) => {
  return state.recipes.recipesArray;
};

export const selectRecipesByType = (type) => (state) => {
  return state.recipes.recipesArray.filter(
    (recipe) => recipe.mealType === type
  );

  /*return type === "all"
    ? state.recipes.recipesArray
    : state.recipes.recipesArray.filter((recipe) => recipe.mealType === type);*/
};
