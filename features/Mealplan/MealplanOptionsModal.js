import { View, Text, StyleSheet, FlatList } from "react-native";
import Constants from "expo-constants";
import { Button } from "@rneui/themed";
import { selectAllFavorites } from "../Favorites/favoritesSlice";
import { selectAllRecipes } from "../Recipes/recipesSlice";
import { useSelector, useDispatch } from "react-redux";
import { Image } from "@rneui/themed";
import { addRecipeToDate } from "./mealplanSlice";
import FavoriteScreen from "../../screens/FavoritesScreen";

const MealplanOptionsModal = ({ toggleModal, mealplanId, mealType }) => {
  const favorites = useSelector(selectAllFavorites);
  const recipes = useSelector(selectAllRecipes);
  const dispatch = useDispatch();

  const handleAddingRecipe = (recipeId, mealplanId) => {
    console.log(`add recipe: ${recipeId} to mealplan: ${mealplanId}`);
    const newMealplanItem = {
      mealplanId,
      mealType,
      recipeId,
    };
    dispatch(addRecipeToDate(newMealplanItem));
  };

  const renderFavorite = ({ item: recipe }) => {
    return (
      <View style={styles.recipeView}>
        <Image source={recipe.image} />
        <Text style={styles.recipeName}>{recipe.name}</Text>
        <Button
          style={{ flex: 1, justifyContent: "flex-end" }}
          title="+"
          onPress={() => {
            handleAddingRecipe(recipe.id, mealplanId);
            toggleModal(false);
          }}
        />
      </View>
    );
  };

  return (
    <FlatList
      contentContainerStyle={styles.mainView}
      data={recipes.filter((recipe) => favorites.includes(recipe.id))}
      renderItem={renderFavorite}
      style={{ flex: 1 }}
      ListEmptyComponent={<Text>No Favorites To Add.</Text>}
      ListHeaderComponent={<Text style={styles.pageTitle}>Choose meal</Text>}
      //ListHeaderComponentStyle={styles.mainView}
      ListFooterComponent={
        <Button title="Done" onPress={() => toggleModal(false)} />
      }
      ListFooterComponentStyle={styles.footerStyle}
    />
  );
};

const styles = StyleSheet.create({
  mainView: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    paddingHorizontal: 10,
  },
  recipeView: {
    flexDirection: "row",
    paddingTop: 20,
    alignItems: "center",
    //justifyContent: "space-between",
  },
  recipeName: {
    flex: 3,
    fontSize: 20,
  },

  pageTitle: {
    textAlign: "center",
    fontSize: 25,
  },
  footerStyle: {
    justifyContent: "flex-end",
    paddingBottom: 30,

    flex: 1,
  },
});

export default MealplanOptionsModal;
