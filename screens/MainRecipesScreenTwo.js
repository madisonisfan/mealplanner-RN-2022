import { Text, View, StyleSheet, FlatList, Modal } from "react-native";
import { Card, ListItem, Button } from "react-native-elements";
import RenderRecipe from "../features/Recipes/renderRecipe";
import RenderRecipeTwo from "../features/Recipes/renderRecipeTwo";
import { RECIPES } from "../shared/recipes";
import { Picker } from "@react-native-picker/picker";
import Favorites from "./FavoritesScreen";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  selectAllRecipes,
  selectRecipeByType,
} from "../features/Recipes/recipesSlice";
import RecipeForm from "../features/Recipes/RecipeForm";
import { ScrollView } from "react-native-gesture-handler";

const recipeTypes = {
  all: "All Recipes",
  breakfast: "Breakfast",
  lunchDinner: "Lunch/Dinner",
  snacks: "Snacks",
  drinks: "Drinks",
};

const MainRecipesTwo = ({ navigation }) => {
  const [selectedRecipeType, setType] = useState("all");
  const [isTypeModalOpen, toggleTypeModal] = useState(false);
  const [isRecipeFormOpen, toggleRecipeForm] = useState(false);
  const recipes = useSelector(selectAllRecipes);
  //const recipes = useSelector(selectRecipeByType(selectedRecipeType));

  const renderRecipe = ({ item: recipe }) => {
    return (
      <RenderRecipeTwo
        recipe={recipe}
        navigate={navigation.navigate}
        toAdd={false}
      />
    );
  };

  return (
    <ScrollView>
      <View>
        <View style={styles.buttonView}>
          <Button
            type="outline"
            title="My Favorites"
            titleStyle={{ color: "black", fontWeight: "thin" }}
            buttonStyle={styles.button}
            onPress={() => navigation.navigate("Favorites")}
          />
          <Button
            buttonStyle={styles.button}
            titleStyle={{ color: "black" }}
            type="outline"
            title="Add Recipe"
            onPress={() => toggleRecipeForm(!isRecipeFormOpen)}
          />
        </View>
        <Button
          title={recipeTypes[selectedRecipeType]}
          containerStyle={{
            paddingLeft: 55,
            paddingRight: 55,
            paddingTop: 15,
            paddingBottom: 10,
          }}
          onPress={() => toggleTypeModal(!isTypeModalOpen)}
          buttonStyle={{}}
        />
        <Modal visible={isTypeModalOpen}>
          <View>
            <Picker
              mode="dropdown"
              selectedValue={selectedRecipeType}
              onValueChange={(type, index) => setType(type)}
              style={{
                color: "blue",
              }}
            >
              <Picker.Item label="All Recipes" value="all" />
              <Picker.Item label="Breakfast" value="breakfast" />
              <Picker.Item label="Lunch/Dinner" value="lunchDinner" />
              <Picker.Item label="Drinks" value="drinks" />
              <Picker.Item label="Snacks" value="snacks" />
            </Picker>
            <Button
              title="Done"
              onPress={() => toggleTypeModal(!isTypeModalOpen)}
            />
          </View>
        </Modal>
        <Modal visible={isRecipeFormOpen}>
          <RecipeForm toggle={toggleRecipeForm} />
        </Modal>
      </View>
      <View style={{ flexDirection: "row" }} flexWrap>
        {recipes.map((recipe) => {
          console.log(`recipe`, recipe);
          return (
            <RenderRecipeTwo
              //key={index}
              recipe={recipe}
              navigate={navigation.navigate}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 15,
  },
  button: {
    borderColor: "black",
    color: "black",
    backgroundColor: "white",
  },
});

export default MainRecipesTwo;

/*

          <Picker
            mode="dropdown"
            selectedValue={selectedRecipeType}
            onValueChange={(type, index) => setType(type)}
            style={{
              color: "blue",
            }}
          >
            <Picker.Item label="All Recipes" value="All" />
            <Picker.Item label="Breakfast" value="Breakfast" />
            <Picker.Item label="Lunch/Dinner" value="LunchDinner" />
            <Picker.Item label="Drinks" value="Drinks" />
            <Picker.Item label="Snacks" value="Snacks" />
          </Picker>

*/
