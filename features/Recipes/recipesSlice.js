import { RECIPES } from "../../shared/recipes";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../shared/baseUrl";
import { mapImageURL } from "../../utils/mapImageUrl";

const initialState = {
  recipesArray: [],
  isLoading: true,
  errMsg: "",
};

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async () => {
    const response = await fetch(baseUrl + "recipes");
    if (!response.ok) {
      return Promise.reject("Unable to fetch, status: " + response.status);
    }
    const data = await response.json();
    return data;
  }
);

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
  extraReducers: {
    [fetchRecipes.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchRecipes.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMsg = "";
      state.recipesArray = mapImageURL(action.payload);
    },
    [fetchRecipes.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMsg = action.error
        ? action.error.message
        : "Recipe fetch failed";
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
