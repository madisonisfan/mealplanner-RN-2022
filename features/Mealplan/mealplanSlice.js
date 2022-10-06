import { createSlice } from "@reduxjs/toolkit";
import { USERMEALPLAN } from "../../shared/mealplan";

const initialState = {
  mealplanArray: USERMEALPLAN,
};

const mealplanSlice = createSlice({
  name: "mealplan",
  initialState,
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

export const mealplanReducer = mealplanSlice.reducer;
