import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    toggleFavorite: (favorites, action) => {
      //favorites is just instead of writing state.
      console.log(`toggle fav, reducer`);
      if (favorites.includes(action.payload)) {
        return favorites.filter((favorite) => favorite !== action.payload);
      } else {
        favorites.push(action.payload);
      }
    },
  },
});

export const selectAllFavorites = (state) => {
  //console.log(`favorites`, state.favorites);
  return state.favorites;
};

export const { toggleFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
