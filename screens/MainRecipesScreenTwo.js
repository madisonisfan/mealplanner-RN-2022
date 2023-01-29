import { Text, View, StyleSheet, FlatList, Modal, Switch } from "react-native";
import { Card, ListItem } from "react-native-elements";
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
import { Icon } from "@rneui/themed";
import { Button } from "@rneui/themed";

const recipeTypes = {
  all: "All Recipes",
  breakfast: "Breakfast",
  lunchDinner: "Lunch/Dinner",
  snacks: "Snacks",
  drinks: "Drinks",
};

/*
<Button
        type="outline"
        title="F"
        containerStyle={{
          position: "absolute",
          width: 75,
          borderWidth: 1,
          borderColor: "red",
        }}
        titleStyle={{ color: "black" }}
        buttonStyle={styles.button}
        onPress={() => {
          console.log(`pressed favs`);
          navigation.navigate("Favorites");
        }}
      />

      <Button
        buttonStyle={styles.button}
        containerStyle={{
          position: "absolute",
          right: 0,
          marginRight: 10,
          //marginTop: 10,
          borderRadius: 10,
        }}
        titleStyle={{ color: "black" }}
        type="outline"
        title="+"
        onPress={() => {
          console.log(`pressed`);
          toggleRecipeForm(!isRecipeFormOpen);
        }}
      />


*/

const MainRecipesTwo = ({ navigation }) => {
  const [selectedRecipeType, setType] = useState("all");
  const [isTypeModalOpen, toggleTypeModal] = useState(false);
  const [isRecipeFormOpen, toggleRecipeForm] = useState(false);
  const [favoritesEnabled, toggleFavorites] = useState(false);
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
    <View style={{ flex: 1 }}>
      <ScrollView style={{ paddingTop: 20 }}>
        <Icon
          size={40}
          color="#04A804"
          containerStyle={{
            position: "absolute",
            right: 10,
            //width: 50,
          }}
          name="bookmark"
          onPress={() => {
            console.log(`pressed favs`);
            navigation.navigate("Bookmarks");
          }}
        />

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            //marginTop: 300,
            marginLeft: "auto",
            marginRight: "auto",
            width: 125,
          }}
        >
          <Button
            // type="solid"
            containerStyle={{
              backgroundColor: "white",
              border: "black",
              borderWidth: "1px",
              borderRadius: "5px",
              //width: 150,
              //paddingLeft: 55,
              //paddingRight: 55,
              //paddingTop: 15,
              //paddingBottom: 10,
            }}
            titleStyle={{ color: "black" }}
            onPress={() => toggleTypeModal(!isTypeModalOpen)}
            buttonStyle={{ backgroundColor: "white", paddingHorizontal: 17 }}
          >
            {recipeTypes[selectedRecipeType]}
            <Icon
              name="chevron-down"
              type="font-awesome"
              size={15}
              iconStyle={{ paddingLeft: 10 }}
            />
          </Button>
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
        <View style={{ flexDirection: "row", marginTop: 10 }} flexWrap>
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
      <View>
        <Icon
          raised
          reverse
          name="plus"
          type="font-awesome"
          color="white"
          iconStyle={{ color: "black" }}
          containerStyle={{
            position: "absolute",
            right: 10,
            bottom: 3,
            alignSelf: "flex-end",
          }}
          onPress={() => {
            console.log(`pressed`);
            toggleRecipeForm(!isRecipeFormOpen);
          }}
        />
      </View>
    </View>
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

/*
<Icon
        reverse
        name="plus"
        type="font-awesome"
        color="white"
        iconStyle={{ color: "black" }}
        containerStyle={{
          position: "fixed",
          //right: 0,
          bottom: 0,
          //marginRight: 10,
          borderWidth: 1,
          borderColor: "blue",
        }}
        onPress={() => {
          console.log(`pressed`);
          toggleRecipeForm(!isRecipeFormOpen);
        }}
      />


*/
