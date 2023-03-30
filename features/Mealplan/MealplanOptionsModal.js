import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { selectAllFavorites } from "../Favorites/favoritesSlice";
import { selectAllRecipes } from "../Recipes/recipesSlice";
import { useSelector, useDispatch } from "react-redux";
import RenderMealplanOption from "./MealplanOption";

const MealplanOptionsModal = ({ route }) => {
  const { mealplanId, mealType, navigation } = route.params;
  const mealplan = useSelector((state) => state.mealplan.mealplanArray);
  const favorites = useSelector(selectAllFavorites);
  const recipes = useSelector(selectAllRecipes);

  const getFavoriteRecipes = () => {
    let currentDay = mealplan[mealplanId];
    let meals = currentDay[mealType.toLowerCase()];
    let favoriteOptions = favorites.filter((favId) => !meals.includes(favId));
    return recipes.filter((recipe) => favoriteOptions.includes(recipe.id));
  };

  if (getFavoriteRecipes().length === 0) {
    return (
      <View style={styles.emptyView}>
        <Text style={styles.emptyText}>No Meals Saved Yet!</Text>
      </View>
    );
  }

  return (
    <>
      <ScrollView
        style={styles.mainView}
        contentContainerstyle={styles.containerStyle}
      >
        <View style={{ flexDirection: "row", marginTop: 10 }} flexWrap>
          {getFavoriteRecipes().map((recipe, index) => {
            return (
              <RenderMealplanOption
                recipe={recipe}
                mealplanId={mealplanId}
                mealType={mealType}
                navigation={navigation}
              />
            );
          })}
        </View>
      </ScrollView>
    </>
  );
};

export default MealplanOptionsModal;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  containerStyle: {
    paddingTop: 10,
    paddingHorizontal: 10,
    //paddingBottom: 20,
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
  cardContainer: {
    padding: 0,
    height: 100,
    borderRadius: 7,
    borderWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  cardInner: {
    flexDirection: "row",
  },
  image: {
    // borderBottomLeftRadius: 7,
    //borderTopLeftRadius: 7,
    borderRadius: 7,
    width: 150,
    height: 100,
    //width: 150,
  },

  contentView: {
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
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
