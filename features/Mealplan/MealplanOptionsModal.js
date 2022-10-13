import { View, Text, StyleSheet, FlatList } from "react-native";
import Constants from "expo-constants";

import { Button } from "react-native-elements";
import { selectAllFavorites } from "../Favorites/favoritesSlice";
import { selectAllRecipes } from "../Recipes/recipesSlice";
import { useSelector } from "react-redux";
import FavoriteScreen from "../../screens/FavoritesScreen";

const MealplanOptionsModal = ({ toggleModal }) => {
  const favorites = useSelector(selectAllFavorites);
  const recipes = useSelector(selectAllRecipes);

  const renderFavorite = ({ item: recipe }) => {
    return (
      <View style={{ flexDirection: "row" }}>
        <Image src={recipe.image} />
        <Text>{recipe.name}</Text>
        <Button title="+" />
      </View>
    );
  };

  return (
    <FlatList
      data={recipes.filter((recipe) => favorites.includes(recipe.id))}
      renderItem={renderFavorite}
      listHeaderComponent={<Text style={styles.pageTitle}>Choose meal</Text>}
      ListHeaderComponentStyle={styles.mainView}
      ListFooterComponent={
        <Button
          title="Cancel"
          onPress={() => toggleModal(false)}
          style={{ marginTop: 100 }}
        />
      }
    />
  );
};

const styles = StyleSheet.create({
  mainView: {
    paddingTop: Constants.statusBarHeight,
  },
  pageTitle: {
    textAlign: "center",
    fontSize: 25,
  },
});

export default MealplanOptionsModal;
