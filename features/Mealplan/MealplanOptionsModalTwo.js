import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { selectAllFavorites } from "../Favorites/favoritesSlice";
import { selectAllRecipes } from "../Recipes/recipesSlice";
import { useSelector, useDispatch } from "react-redux";
import { Image, Card, Icon, Button } from "@rneui/themed";
import { addRecipeToDate } from "./mealplanSlice";
import FavoriteScreen from "../../screens/FavoritesScreen";
import { render } from "react-dom";
import RenderMealplanOption from "./MealplanOption";

const MealplanOptionsModalTwo = ({ route }) => {
  const { mealplanId, mealType, navigation } = route.params;
  const favorites = useSelector(selectAllFavorites);
  const recipes = useSelector(selectAllRecipes);

  const getFavoriteRecipes = () => {
    console.log(``);
    return recipes.filter((recipe) => favorites.includes(recipe.id));
  };

  console.log(`FAVORITES: `, getFavoriteRecipes());

  return (
    <>
      <ScrollView
        style={styles.mainView}
        contentContainerstyle={styles.containerStyle}
      >
        <View style={{ flexDirection: "row", marginTop: 10 }} flexWrap>
          {recipes
            .filter((recipe) => favorites.includes(recipe.id))
            .map((recipe, index) => {
              console.log(`recipe from map`, recipe);

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

export default MealplanOptionsModalTwo;

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
});

/*

const renderFavorite = ({ item: recipe }) => {
    return (
      <Card
        containerStyle={styles.cardContainer}
        wrapperStyle={styles.cardInner}
      >
        <Card.Image source={recipe.image} style={styles.image} />

        <View style={styles.contentView}>
          <Text style={styles.recipeName}>{recipe.name}</Text>
          <Button
            type="clear"
            icon={
              <Icon size={23} name="plus" color="black" type="font-awesome" />
            }
            onPress={() => {
              //add functionalty to add/switch recipe
              navigation.goBack();
            }}
          />
        </View>
      </Card>
    );
  };

*/
