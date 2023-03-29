import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Main from "./MainComponent";
import { NavigationContainer } from "@react-navigation/native";
import { fetchRecipes } from "../features/Recipes/recipesSlice";
import { fetchUsers } from "../features/Users/usersSlice";

const AppInner = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchRecipes());
  }, [dispatch]);

  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
};

export default AppInner;
