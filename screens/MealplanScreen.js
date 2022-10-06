import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useState } from "react";
import { Button } from "react-native-elements";
import { useSelector } from "react-redux";
import {
  selectFirstDay,
  selectAllDays,
  selectDayByIndex,
} from "../features/Mealplan/mealplanSlice";
import { selectAllRecipes } from "../features/Recipes/recipesSlice";
import RenderRecipe from "../features/Recipes/renderRecipe";

const Mealplan = ({ navigation }) => {
  const allDays = useSelector(selectAllDays);
  const firstDay = useSelector(selectFirstDay);

  const [index, setIndex] = useState(0);
  const currentDay = useSelector(selectDayByIndex(index));

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

  return (
    <>
      <ScrollView horizontal style={{ backgroundColor: "white" }}>
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
              titleStyle={{ color: "black" }}
            />
          );
        })}
      </ScrollView>
      <ScrollView>
        <Text style={styles.date}>{currentDay.date}</Text>
        <Text style={styles.mealtypeTitle}>Breakfast</Text>
        <RenderRecipe
          navigate={navigation.navigate}
          recipe={recipes.find(
            (recipe) => recipe.id === currentDay.breakfast[0]
          )}
        />

        <Text style={styles.mealtypeTitle}>Lunch</Text>
        <RenderRecipe
          navigate={navigation.navigate}
          recipe={recipes.find((recipe) => recipe.id === currentDay.lunch[0])}
        />
        <Text style={styles.mealtypeTitle}>Dinner</Text>
        <RenderRecipe
          navigate={navigation.navigate}
          recipe={recipes.find((recipe) => recipe.id === currentDay.dinner[0])}
        />
        <Text style={styles.mealtypeTitle}>Snacks</Text>
        <RenderRecipe
          navigate={navigation.navigate}
          recipe={recipes.find((recipe) => recipe.id === currentDay.snacks[0])}
        />
        <Text style={styles.mealtypeTitle}>Drinks</Text>
        <RenderRecipe
          navigate={navigation.navigate}
          recipe={recipes.find((recipe) => recipe.id === currentDay.drinks[0])}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  mealtypeTitle: {
    fontSize: 20,
    marginTop: 15,
    marginLeft: 15,
  },
  date: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 20,
  },
  dayButton: {},
});

export default Mealplan;
