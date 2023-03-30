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
    addRecipeToDate: (state, action) => {
      console.log(`action`, action.payload);
      const { mealplanId, mealType, recipeId } = action.payload;
      console.log(`ACTION.PAYLOAD: `, action.payload);

      console.log(
        `Add recipe ${recipeId} for ${mealType} to mealplan ${mealplanId}`
      );
      let mealplan = state.mealplanArray[mealplanId];
      let type = MEALTYPES.find(
        (item) => item.displayName === mealType
      ).codeName;
      mealplan[`${type}`].push(recipeId);
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

export const { addRecipeToDate } = mealplanSlice.actions;
export const mealplanReducer = mealplanSlice.reducer;
