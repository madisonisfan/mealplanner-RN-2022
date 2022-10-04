import { View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { toggleFavorite } from "../features/Favorites/favoritesSlice";
import { selectAllFavorites } from "../features/Favorites/favoritesSlice";

import { selectAllRecipes } from "../features/Recipes/recipesSlice";
import RenderRecipe from "../features/Recipes/renderRecipe";

const Favorites = ({ navigation }) => {
  const favorites = useSelector(selectAllFavorites);
  const recipes = useSelector(selectAllRecipes);

  useSelector((state) => console.log(`state`, state));

  const renderFavorite = ({ item: recipe }) => {
    return <RenderRecipe recipe={recipe} navigate={navigation.navigate} />;
  };
  return (
    <FlatList
      data={recipes.filter((recipe) => favorites.includes(recipe.id))}
      renderItem={renderFavorite}
    />
  );
};
export default Favorites;
