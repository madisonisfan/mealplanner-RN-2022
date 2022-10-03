import { RECIPES } from "../../shared/recipes";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipesArray: RECIPES,
};

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    addRecipe: (state, action) => {
      console.log(`add comment action.payload`, action.payload);
      console.log(`add comemnet state.comments`, state.recipesArray);

      const newRecipe = {
        id: state.recipesArray.length + 1,
        date: new Date(Date.now()).toISOString(),
        totaltime: action.payload.preptime + action.payload.cooktime,
        ...action.payload,
        //image: require("../../assets/images/food1.jpg"),
      };

      console.log(`new recipe`, newRecipe);

      state.recipesArray.push(newRecipe);
    },
  },
});

export const recipeReducer = recipesSlice.reducer;
export const { addRecipe } = recipesSlice.actions;

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
