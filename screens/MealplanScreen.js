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
import MealplanItem from "../features/Mealplan/MealplanItem";
import MealplanItemTwo from "../features/Mealplan/MealplanItemTwo";

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
                textDecorationThickness: "3px",
              }}
              containerStyle={{ borderBottom: "solid 1px blue" }}
            />
          );
        })}
      </ScrollView>
      <ScrollView contentContainerStyle={{ paddingBottom: 10 }}>
        <Text style={styles.date}>{currentDay.date}</Text>
        <Text style={styles.mealtypeTitle}>Breakfast</Text>

        <MealplanItem
          navigation={navigation}
          recipe={recipes.find((recipe) => recipe.id === currentDay.breakfast)}
          mealplanId={currentDay.id}
          mealType={"breakfast"}
        />

        <Text style={styles.mealtypeTitle}>Lunch</Text>
        <MealplanItem
          navigate={navigation.navigate}
          recipe={recipes.find((recipe) => recipe.id === currentDay.lunch)}
          mealplanId={currentDay.id}
          mealType={"lunch"}
        />
        <Text style={styles.mealtypeTitle}>Dinner</Text>
        <MealplanItem
          navigate={navigation.navigate}
          recipe={recipes.find((recipe) => recipe.id === currentDay.dinner)}
          mealplanId={currentDay.id}
          mealType={"dinner"}
        />
        <Text style={styles.mealtypeTitle}>Snacks</Text>
        <MealplanItem
          navigate={navigation.navigate}
          recipe={recipes.find((recipe) => recipe.id === currentDay.snacks)}
          mealplanId={currentDay.id}
          mealType={"snacks"}
        />
        <Text style={styles.mealtypeTitle}>Drinks</Text>
        <MealplanItem
          navigate={navigation.navigate}
          recipe={recipes.find((recipe) => recipe.id === currentDay.drinks)}
          mealplanId={currentDay.id}
          mealType={"drinks"}
        />
      </ScrollView>
    </>
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
    fontWeight: "400",
    //color: "white",
  },
  date: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 20,
    //color: "white",
  },
  dayButton: {},
});

export default Mealplan;
