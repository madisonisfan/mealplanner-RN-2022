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
//import { RECIPES } from "../../shared/recipes";
//import FavoritesModal from "../Mealplan/MealplanOptionsModal";
//import { useDispatch, useSelector } from "react-redux";
//import { selectRecipeById } from "./recipesSlice";
/*import {
  toggleFavorite,
  selectAllFavorites,
} from "../Favorites/favoritesSlice";*/
//import { favoritesReducer } from "../Favorites/favoritesSlice";
//import { Icon } from "@rneui/themed";
import { useState } from "react";
import MealplanOptionsModal from "./MealplanOptionsModal";
import { Card } from "@rneui/themed";

const MealplanItemTwo = ({ recipe, navigate, meaplanId, mealType }) => {
  const [isOptionsOpen, toggleOptions] = useState(false);

  if (recipe) {
    return (
      <>
        <TouchableOpacity
          onPress={() => navigate("RecipeDetails", { recipe })}
          key={recipe.id}
          style={styles.parentContainer}
          //onPress={() => toggleDetails(true)}
        >
          <Card containerStyle={styles.card}>
            <Card.Image source={recipe.image} style={styles.image} />
            <View style={styles.textView}>
              <Card.Title style={styles.name}>{recipe.name}</Card.Title>
            </View>
          </Card>
        </TouchableOpacity>

        <Modal visible={isOptionsOpen}>
          <MealplanOptionsModal
            toggleModal={toggleOptions}
            mealplanId={meaplanId}
            mealType={mealType}
          />
        </Modal>
      </>
    );
  }

  return (
    <View>
      <Button title="+" />
    </View>
  );
};

const styles = StyleSheet.create({
  emptyContainer: {
    width: "50%",
    padding: 10,
    backgroundColor: "grey",
  },
  parentContainer: {
    width: "50%",
    padding: 10,

    //borderWidth: 1,
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
  textView: {
    flex: 1,
    //justifyContent: "center",
  },
  name: {
    flex: 1,

    marginTop: "auto",
    marginBottom: "auto",
    paddingVertical: 8,
  },
});

export default MealplanItemTwo;

/*
                  <Button
                    buttonStyle={{ paddingTop: 0, paddingBottom: 0, marginTop: 5 }}
                    type="outline"
                    title="Details"
                    onPress={() => navigate("RecipeDetails", { recipe })}
                  />*/
