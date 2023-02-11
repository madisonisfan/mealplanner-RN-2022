import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//import { baseUrl } from "../../shared/baseUrl";
import { db } from "../../firebase.config";
import { collection, getDocs } from "firebase/firestore";

//import { mapImageURL } from "../../utils/mapImageURL";

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async () => {
    const querySnapshot = await getDocs(collection(db, "recipes"));
    const recipes = [];
    querySnapshot.forEach((doc) => {
      console.log(`doc`, doc);
      recipes.push(doc.data());
    });
    console.log(`after fetching recipes: `, recipes.recipesArray);
    return recipes;
  }
);

const recipesSlice = createSlice({
  name: "recipes",
  initialState: { isLoading: true, errMess: null, recipesArray: [] },
  reducers: {},
  extraReducers: {
    [fetchRecipes.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchRecipes.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMsg = "";
      state.recipesArray = action.payload; //mapImageURL(action.payload);
    },
    [fetchRecipes.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMsg = action.error ? action.error.message : "Fetch failed";
    },
  },
});

export const recipesReducer = recipesSlice.reducer;

/*

*/
/*
// post a new comment for a campsite
export const postComment = createAsyncThunk(
  "recipes/postComment",
  async (comment) => {
    const bearer = "Bearer " + localStorage.getItem("token");

    const response = await fetch(
      baseUrl + "recipes/" + comment.campsiteId + "/comments",
      {
        method: "POST",
        headers: {
          Authorization: bearer,
          "Content-Type": "application/json",
        },
        credentials: "same-origin",
        body: JSON.stringify(comment),
      }
    );
    if (!response.ok) {
      return Promise.reject(response.status);
    }
    let data = await response.json();

    // Add campsiteId to returned comment data for storing in application state
    data = { ...data, campsiteId: comment.campsiteId };
    return data;
  }
);

const initialState = {
  recipesArray: [],
  isLoading: true,
  errMsg: "",
};
*/

/*
export const selectAllRecipes = (state) => {
  return state.recipes.recipesArray;
};

export const selectRecipeById = (id) => (state) => {
  return state.recipes.recipesArray.find((recipe) => recipe._id === id);
};

export const selectFeaturedRecipe = (state) => {
  return {
    featuredItem: state.recipes.recipesArray.find((recipe) => recipe.featured),
    isLoading: state.recipes.isLoading,
    errMsg: state.recipes.errMsg,
  };
};*/

// Comments by campsite
