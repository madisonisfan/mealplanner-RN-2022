import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useState } from "react";
import { Button } from "react-native-elements";
import { useSelector } from "react-redux";
import {
  selectFirstDay,
  selectAllDays,
  selectDayByIndex,
} from "../features/Mealplan/mealplanSlice";
import { selectAllRecipes } from "../features/Recipes/recipesSlice";

import MealplanItem from "../features/Mealplan/MealplanItem";
import { Icon, Card } from "@rneui/themed";

const Mealplan = ({ navigation }) => {
  const allDays = useSelector(selectAllDays);
  const firstDay = useSelector(selectFirstDay);

  const [currentIndex, setIndex] = useState(0);
  const currentDay = useSelector(selectDayByIndex(currentIndex));

  const recipes = useSelector(selectAllRecipes);
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  console.log(`navigation in mealplan`, navigation);

  return (
    <>
      <ScrollView horizontal style={{ backgroundColor: "#1f1e1e" }}>
        {days.map((day, index) => {
          return (
            <Button
              onPress={() => {
                console.log(`button pressed, ${index}, ${day}`);
                setIndex(index);
              }}
              key={index}
              title={day}
              type="clear"
              titleStyle={{
                color: "white",
                //textDecorationLine: "underline",
                textDecorationLine:
                  index === currentIndex ? "underline" : "none",
                textDecorationColor: "#f0faeb",
                //textDecorationThickness: "3px",
              }}
              containerStyle={{ borderBottom: "solid 1px blue" }}
            />
          );
        })}
      </ScrollView>
      <ScrollView contentContainerStyle={{ paddingBottom: 10, paddingTop: 20 }}>
        {/*<Text style={styles.date}>{currentDay.date}</Text>*/}

        <MealplanTitle
          navigation={navigation}
          mealplanId={currentDay.id}
          mealType={"Breakfast"}
        />
        {/*
          EACH MEAL HAS AN ARRAY OF IDS
          SECTION NEEDS THIS ARRAY 
          MEALPLAN SECTION WILL THEN RENDER MEALPLAN ITEM
          */}
        {currentDay.breakfast.map((recipeId) => {
          return (
            <MealplanItem
              navigation={navigation}
              recipe={recipes.find((recipe) => recipe.id === recipeId)}
              mealplanId={currentDay.id}
              mealType={"Breakfast"}
            />
          );
        })}

        <MealplanTitle
          navigation={navigation}
          mealplanId={currentDay.id}
          mealType={"Lunch"}
        />

        {currentDay.lunch.map((recipeId) => {
          return (
            <MealplanItem
              navigation={navigation}
              recipe={recipes.find((recipe) => recipe.id === recipeId)}
              mealplanId={currentDay.id}
              mealType={"Lunch"}
            />
          );
        })}

        <MealplanTitle
          navigation={navigation}
          mealplanId={currentDay.id}
          mealType={"Dinner"}
        />
        {currentDay.dinner.map((recipeId) => {
          return (
            <MealplanItem
              navigation={navigation}
              recipe={recipes.find((recipe) => recipe.id === recipeId)}
              mealplanId={currentDay.id}
              mealType={"Dinner"}
            />
          );
        })}

        <MealplanTitle
          navigation={navigation}
          mealplanId={currentDay.id}
          mealType={"Snacks"}
        />
        {currentDay.breakfast.map((recipeId) => {
          return (
            <MealplanItem
              navigation={navigation}
              recipe={recipes.find((recipe) => recipe.id === recipeId)}
              mealplanId={currentDay.id}
              mealType={"Snacks"}
            />
          );
        })}

        <MealplanTitle
          navigation={navigation}
          mealplanId={currentDay.id}
          mealType={"Drinks"}
        />
        {currentDay.drinks.map((recipeId) => {
          return (
            <MealplanItem
              navigation={navigation}
              recipe={recipes.find((recipe) => recipe.id === recipeId)}
              mealplanId={currentDay.id}
              mealType={"Drinks"}
            />
          );
        })}
      </ScrollView>
    </>
  );
};

const MealplanTitle = ({ navigation, mealType, mealplanId }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginHorizontal: 11,
        marginTop: 10,
        justifyContent: "space-between",
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "500",
          paddingRight: 10,
          paddingBottom: 10,
        }}
      >
        {mealType}
      </Text>
      <Icon
        name="plus"
        color="black"
        type="font-awesome"
        onPress={() =>
          navigation.navigate("MealplanOptionsModal", {
            mealplanId,
            mealType,
            navigation,
          })
        }
      />
    </View>
  );
};

const AddRecipe = () => {
  return (
    <View style={styles.emptyContainer}>
      <Button title="+" />
    </View>
  );
};

const styles = StyleSheet.create({
  emptyContainer: {
    //justifyContent: "center",
    height: "100%",

    /*
    width: "50%",
    backgroundColor: "grey",
    //margin: 1,
    marginTop: margi
    marginVertical: 1,
    borderWidth: 0,
    borderRadius: 7,*/
  },

  mealtypeTitle: {
    fontSize: 20,
    marginTop: 15,
    marginLeft: 15,
    fontWeight: "500",
    //color: "white",
  },
  date: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 24,
    fontWeight: "500",
    //color: "white",
  },
  dayButton: {},
});

export default Mealplan;
