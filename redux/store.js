import { configureStore } from "@reduxjs/toolkit";
import { favoritesReducer } from "../features/Favorites/favoritesSlice";
import { recipesReducer } from "../features/Recipes/recipesSlice";
import { mealplanReducer } from "../features/Mealplan/mealplanSlice";
import { postsReducer } from "../features/Posts/postSlice";
import {
  persistStore,
  persistCombineReducers,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const config = {
  key: "root",
  storage: AsyncStorage,
  debug: true,
};

export const store = configureStore({
  reducer: persistCombineReducers(config, {
    recipes: recipesReducer,
    mealplanReducer: mealplanReducer,
    postsReducer,
    favorites: favoritesReducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
