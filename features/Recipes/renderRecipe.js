import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  Modal,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { Card, ListItem, Button } from "react-native-elements";
import { RECIPES } from "../../shared/recipes";
import FavoritesModal from "../Mealplan/MealplanOptionsModal";
import { useDispatch, useSelector } from "react-redux";
import { selectRecipeById } from "./recipesSlice";
import {
  toggleFavorite,
  selectAllFavorites,
} from "../Favorites/favoritesSlice";
import { favoritesReducer } from "../Favorites/favoritesSlice";
import { Icon } from "@rneui/themed";
import { useState } from "react";
import RecipeDetailsModal from "./recipeDetailsModal";

const RenderRecipe = ({ recipe, navigate }) => {
  // const recipe = useSelector(selectRecipeById(recipeId));
  const favorites = useSelector(selectAllFavorites);
  const dispatch = useDispatch();
  const [isFavModalOpen, toggleFavModal] = useState(false);
  const [isDetailsOpen, toggleDetails] = useState(false);

  if (recipe) {
    return (
      <>
        <TouchableOpacity
          onPress={() => navigate("RecipeDetails", { recipe })}
          //onPress={() => toggleDetails(true)}
        >
          <Card containerStyle={styles.card}>
            <View style={styles.cardView}>
              <View style={styles.imageView}>
                <Card.Image source={recipe.image} style={styles.image} />
              </View>
              <View style={styles.contentView}>
                <View style={styles.textView}>
                  <Text style={styles.recipeName}>{recipe.name}</Text>
                </View>
                <View style={styles.iconView}>
                  <Icon
                    iconStyle={styles.icon}
                    name={favorites.includes(recipe.id) ? "star" : "star-o"}
                    type="font-awesome"
                    onPress={() => {
                      dispatch(toggleFavorite(recipe.id));
                    }}
                  />
                </View>
              </View>
            </View>
          </Card>
        </TouchableOpacity>

        <Modal visible={isDetailsOpen} swipeDirection={["up"]}>
          <RecipeDetailsModal recipe={recipe} toggleModal={toggleDetails} />
        </Modal>
      </>
    );
  }

  return (
    <>
      <View></View>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 0,
    //margin: 30,
    borderWidth: 0,
    borderColor: "green",
    borderRadius: 20,
  },

  cardView: {
    flexDirection: "row",
    padding: 0,
    // borderWidth: 2,
    //borderColor: "blue",

    //margin: 10,
  },
  imageView: {
    flex: 3,

    // backgroundColor: "grey",
    borderWidth: 0,
    borderBottomStartRadius: 20,
  },
  contentView: {
    //flexDirection: "column",
    //justifyContent: "flex-end",
    //alignItems: "flex-end",
    flex: 2,
    padding: 10,
  },
  textView: {
    //flex: 2,
    justifyContent: "center",
    //borderColor: "green",
    //borderWidth: 1,
    flexGrow: 1,
  },
  recipeName: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "500",
  },
  iconView: {},
  image: {
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
  },
});

export default RenderRecipe;

/*
              <Button
                buttonStyle={{ paddingTop: 0, paddingBottom: 0, marginTop: 5 }}
                type="outline"
                title="Details"
                onPress={() => navigate("RecipeDetails", { recipe })}
              />*/
