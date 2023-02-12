import { Text, View, StyleSheet, FlatList, Modal, Switch } from "react-native";
import { Card, ListItem } from "react-native-elements";
import RenderRecipe from "../features/Recipes/renderRecipe";
import RenderRecipeTwo from "../features/Recipes/renderRecipeTwo";
import { RECIPES } from "../shared/recipes";
//import { Picker } from "@react-native-picker/picker";
import Favorites from "./FavoritesScreen";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  selectAllRecipes,
  selectRecipeByType,
} from "../features/Recipes/recipesSlice";
import RecipeForm from "../features/Recipes/RecipeForm";
import { ScrollView } from "react-native-gesture-handler";
import { Icon, Button } from "@rneui/themed";

import DropDownPicker from "react-native-dropdown-picker";

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
  const [favoritesEnabled, toggleFavorites] = useState(false);
  const [dropdownOpen, setDropdown] = useState(false);
  // const recipes = useSelector(selectAllRecipes);
  const recipes = useSelector((state) => state.recipes);
  const mealtypes = [
    { label: "All Recipes", value: "all" },
    { label: "Breakfast", value: "breakfast" },
    { label: "Lunch/Dinner", value: "lunchDinner" },
    { label: "Drinks", value: "drinks" },
    { label: "Snacks", value: "snacks" },
  ];
  console.log(`recipes, in recipe page`, recipes.recipesArray);
  console.log(`isLoading: `, recipes.isLoading);
  console.log(`errMess: `, recipes.errMess);

  //const recipes = useSelector(selectRecipeByType(selectedRecipeType));

  if (recipes.isLoading) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
  if (recipes.errMess) {
    return (
      <View>
        <Text>{campsites.errMess}</Text>
      </View>
    );
  }

  /*
  const renderRecipe = ({ item: recipe }) => {
    return (
      <RenderRecipeTwo
        recipe={recipe}
        navigate={navigation.navigate}
        toAdd={false}
      />
    );
  };*/

  return (
    <>
      <ScrollView
        style={styles.mainView}
        contentContainerstyle={styles.containerStyle}
      >
        <Icon
          size={40}
          color="#04A804"
          containerStyle={{
            position: "absolute",
            right: 10,
            marginTop: 10,
            //width: 50,
          }}
          name="bookmark"
          onPress={() => {
            navigation.navigate("SavedRecipes");
          }}
        />

        <DropDownPicker
          textStyle={{
            fontSize: 17,
          }}
          labelStyle={{
            fontSize: 17,
          }}
          containerStyle={{
            width: 175,
            marginRight: "auto",
            marginLeft: "auto",
            marginTop: 10,
          }}
          style={{
            width: 175,
            marginRight: "auto",
            marginLeft: "auto",
          }}
          open={dropdownOpen}
          value={selectedRecipeType}
          items={mealtypes}
          setOpen={setDropdown}
          setValue={setType}
        />

        <View style={{ flexDirection: "row", marginTop: 10 }} flexWrap>
          {recipes.recipesArray.map((recipe, index) => {
            console.log(`recipe`, recipe);
            return (
              <RenderRecipeTwo
                //key={recipe.id}
                key={index}
                recipe={recipe}
                navigate={navigation.navigate}
              />
            );
          })}
        </View>
      </ScrollView>

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
          navigation.navigate("RecipeForm");
          //toggleRecipeForm(!isRecipeFormOpen);
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  containerStyle: {
    paddingTop: 10,
    paddingHorizontal: 10,
    //paddingBottom: 20,
  },
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

/*
 <Modal visible={isRecipeFormOpen}>
            <RecipeForm toggle={toggleRecipeForm} />
          </Modal>
*/

export default MainRecipesTwo;

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

/*

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
        </View>

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

*/

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
