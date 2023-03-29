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
import { ListItem, Button } from "react-native-elements";
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
import { Card } from "@rneui/themed";
import { mapImageURL } from "../../utils/mapImageUrl";
import { addFavorites, putFavorites } from "../Users/usersSlice";

const RenderRecipeTwo = ({ recipe, navigate }) => {
  // const recipe = useSelector(selectRecipeById(recipeId));
  //const favorites = useSelector(selectAllFavorites);
  const user = useSelector((state) => state.users.usersArray[0]);
  const dispatch = useDispatch();
  const [isFavModalOpen, toggleFavModal] = useState(false);
  const [isDetailsOpen, toggleDetails] = useState(false);
  console.log(`recipe being displayed: `, recipe);
  console.log(`USER`, user);

  /*
  const handleSavingRecipe = () => {
    dispatch(hadnle);
  };*/

  const handleSavingRecipe = () => {
    console.log("HANDLE SAVING: ", recipe._id);
    let newFavorites = user.favorites.concat(recipe._id);
    console.log("new favorites", newFavorites);

    /*
    let tempFavorites = [...users[0].favorites, recipe.id];
    let newFavorites = [];

    if (user.favorites.includes(recipe.id)) {
      newFavorites = tempFavorites.filter((recipeId) => recipeId !== recipe.id);
    } else {
      newFavorites = tempFavorites.concat(recipe.id);
    }*/

    dispatch(putFavorites(newFavorites));
  };

  if (recipe) {
    return (
      <>
        <TouchableOpacity
          onPress={() => navigate("RecipeDetails", { recipe })}
          style={styles.parentContainer}
          //onPress={() => toggleDetails(true)}
        >
          <Card containerStyle={styles.card}>
            <Card.Image
              source={mapImageURL(recipe.image)}
              style={styles.image}
            />
            <Card.Title style={styles.name}>{recipe.name}</Card.Title>

            <View
              style={{
                //width: 100,
                //height: 100,
                //backgroundColor: "red",
                position: "absolute",
                top: -3,
                right: 15,
                padding: 0,
              }}
            >
              <Icon
                // reverse
                size={35}
                // color="rgb(99, 97, 90, 0.5)"

                iconStyle={
                  styles.iconEmpty
                  /*
                  user.favorites.includes(recipe._id)
                    ? styles.iconFilled
                    : styles.iconEmpty*/
                }
                name={
                  "bookmark"
                  /*
                  user.favorites.includes(recipe._id)
                    ? "bookmark"
                    : "bookmark-o"*/
                }
                type="font-awesome"
                onPress={() => {
                  //dispatch(toggleFavorite(recipe.id));
                  handleSavingRecipe();
                }}
              />
            </View>
          </Card>
        </TouchableOpacity>
      </>
    );
  }

  return (
    <View style={{ height: 100, backgroundColor: "blue" }}>
      <Text>no recipe</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    width: "50%",
    padding: 10,
    //borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },

  card: {
    margin: 1,
    padding: 0,
    borderWidth: 0,
    borderRadius: 7,
  },
  image: {
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
  iconFilled: {
    padding: 0,
    color: "#04A804",
  },
  iconEmpty: {
    padding: 0,
    color: "#02B102",
  },

  textView: {
    flex: 1,

    //justifyContent: "center",
  },
  name: {
    //flex: 1,
    marginTop: "auto",
    marginBottom: "auto",
    paddingVertical: 10,
    // paddingVertical: 8,
  },
});

/*

<Icon
                // reverse
                size={35}
                // color="rgb(99, 97, 90, 0.5)"

                iconStyle={styles.icon}
                name={favorites.includes(recipe.id) ? "bookmark" : "bookmark-o"}
                type="font-awesome"
                onPress={() => {
                  dispatch(toggleFavorite(recipe.id));
                }}
              />

              */

export default RenderRecipeTwo;

/*
                <Button
                  buttonStyle={{ paddingTop: 0, paddingBottom: 0, marginTop: 5 }}
                  type="outline"
                  title="Details"
                  onPress={() => navigate("RecipeDetails", { recipe })}
                />*/
