import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../shared/baseUrl";

const initialState = {
  recipesArray: [],
  isLoading: true,
  errMsg: "",
};

export const postRecipe = createAsyncThunk(
  "recipes/postRecipe",
  async (recipe) => {
    console.log(`POST RECIPE: `, recipe);
    const response = await fetch(baseUrl + "recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipe),
    });

    console.log(`recipe to post`, recipe);

    if (!response.ok) {
      console.log(`RESPONSE NOT OKAY`);
      return Promise.reject(response.status);
    }

    let data = await response.json();
    // Add recipeId to returned comment data for storing in application state
    //data = { ...data, recipeId: recipe.id };
    console.log(`data`, data);
    return data;
  }
);

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async () => {
    console.log(`fetch recipes`);
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
  reducers: {},
  extraReducers: {
    [fetchRecipes.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchRecipes.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMsg = "";
      // state.recipesArray = mapImageURL(action.payload);
      state.recipesArray = action.payload;
    },
    [fetchRecipes.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMsg = action.error
        ? action.error.message
        : "Recipe fetch failed";
    },
    [postRecipe.fulfilled]: (state, action) => {
      state.recipesArray.push(action.payload);
    },
    [postRecipe.rejected]: (state, action) => {
      alert(
        "Your recipe could not be posted\nError: " +
          (action.error ? action.error.message : "Fetch failed")
      );
    },
  },
});

export const recipeReducer = recipesSlice.reducer;
//export const { addRecipe } = recipesSlice.actions;

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

/*
    addRecipe: (state, action) => {
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
*/
