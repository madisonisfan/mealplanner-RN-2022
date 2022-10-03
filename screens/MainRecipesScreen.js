import { Text, View, StyleSheet, FlatList, Modal } from "react-native";
import { Card, ListItem, Button } from "react-native-elements";
import RenderRecipe from "../features/Recipes/renderRecipe";
import { RECIPES } from "../shared/recipes";
import { Picker } from "@react-native-picker/picker";
import Favorites from "./FavoritesScreen";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  selectAllRecipes,
  selectRecipeByType,
} from "../features/Recipes/recipesSlice";

const recipeTypes = {
  all: "All Recipes",
  breakfast: "Breakfast",
  lunchDinner: "Lunch/Dinner",
  snacks: "Snacks",
  drinks: "Drinks",
};

const MainRecipes = ({ navigation }) => {
  const [selectedRecipeType, setType] = useState("all");
  const [isTypeModalOpen, toggleTypeModal] = useState(false);
  const [isRecipeFormOpen, toggleRecipeForm] = useState(false);
  const recipes = useSelector(selectAllRecipes);
  //const recipes = useSelector(selectRecipeByType(selectedRecipeType));

  const renderRecipe = ({ item: recipe }) => {
    return <RenderRecipe recipe={recipe} navigation={navigation} />;
  };

  return (
    <FlatList
      data={recipes}
      /*
      data={
        selectedRecipeType === "all"
          ? selectAllRecipes
          : selectRecipeByType(selectRecipeByType)
      }*/
      //data={RECIPES}
      keyExtractor={(recipe) => recipe.id.toString()}
      renderItem={renderRecipe}
      ListHeaderComponent={
        <View>
          <View style={styles.buttonView}>
            <Button
              type="outline"
              title="My Favorites"
              titleStyle={{ color: "black" }}
              buttonStyle={styles.button}
              onPress={() => navigation.navigate("Favorites")}
            />
            <Button
              buttonStyle={styles.button}
              titleStyle={{ color: "black" }}
              type="outline"
              title="Add Recipe"
            />
          </View>
          <Button
            title={recipeTypes[selectedRecipeType]}
            containerStyle={{
              paddingLeft: 55,
              paddingRight: 55,
              paddingTop: 15,
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
            <View></View>
          </Modal>
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  button: {
    borderColor: "black",
    color: "black",
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 15,
  },
  mainContainer: {
    //padding: 0,
    //paddingTop: 100,
    //alignItems: "center",
  },

  header: {
    // fontSize: 20,
  },
  recipeItem: {
    //alignItems: "center",
    //borderColor: "black",
    // flexGrow: 1,
    //width: 300,
    // flexDirection: "row",
    // flex: 1,
  },
});

export default MainRecipes;

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
