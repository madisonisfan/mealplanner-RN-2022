import { View, Text, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { toggleFavorite } from "../features/Favorites/favoritesSlice";
import { selectAllFavorites } from "../features/Favorites/favoritesSlice";
import { selectAllRecipes } from "../features/Recipes/recipesSlice";
import RenderRecipe from "../features/Recipes/RenderRecipe";
import { StyleSheet } from "react-native";

const Favorites = ({ navigation }) => {
  const favorites = useSelector(selectAllFavorites);
  const recipes = useSelector(selectAllRecipes);

  if (favorites.length === 0) {
    return (
      <View style={styles.emptyView}>
        <Text style={styles.emptyText}>No Meals Saved Yet!</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.mainView} flexWrap>
        {recipes
          .filter((r) => favorites.includes(r.id))
          .map((recipe) => {
            return <RenderRecipe recipe={recipe} />;
          })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flexDirection: "row",
    marginTop: 10,
  },
  emptyView: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 20,
    fontWeight: 500,
  },
});

export default Favorites;
