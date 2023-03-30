import { createSlice } from "@reduxjs/toolkit";
import { USERMEALPLAN } from "../../shared/mealplan";
import { MEALTYPES } from "../../shared/mealTypes";

const initialState = {
  mealplanArray: USERMEALPLAN,
};

const mealplanSlice = createSlice({
  name: "mealplan",
  initialState,
  reducers: {
    addRecipeToMealplan: (state, action) => {
      const { mealplanId, mealType, recipeId } = action.payload;
      let mealplan = state.mealplanArray[mealplanId];
      mealplan[`${mealType.toLowerCase()}`].push(recipeId);
    },
  },
});

export const selectDayByIndex = (index) => (state) => {
  return state.mealplan.mealplanArray[index];
};

export const selectFirstDay = (state) => {
  return state.mealplan.mealplanArray[0];
};

export const selectAllDays = (state) => {
  return state.mealplan.mealplanArray;
};

export const { addRecipeToMealplan } = mealplanSlice.actions;
export const mealplanReducer = mealplanSlice.reducer;
