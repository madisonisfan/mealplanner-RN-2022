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
import RenderRecipe from "../features/Recipes/renderRecipe";
import MealplanItem from "../features/Mealplan/MealplanItem";
import MealplanItemTwo from "../features/Mealplan/MealplanItemTwo";
import MealplanItemTesting from "../features/Mealplan/MealplanItemTesting";
//import { Icon, Card } from "@rneui/themed";

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
                textDecorationThickness: "3px",
              }}
              containerStyle={{ borderBottom: "solid 1px blue" }}
            />
          );
        })}
      </ScrollView>
      <ScrollView contentContainerStyle={{ paddingBottom: 10, paddingTop: 20 }}>
        {/*<Text style={styles.date}>{currentDay.date}</Text>*/}

        <MealplanItemTesting
          navigation={navigation}
          recipe={recipes.find((recipe) => recipe.id === currentDay.breakfast)}
          mealplanId={currentDay.id}
          mealType={"Breakfast"}
        />

        <MealplanItemTesting
          navigation={navigation}
          recipe={recipes.find((recipe) => recipe.id === currentDay.lunch)}
          mealplanId={currentDay.id}
          mealType={"Lunch"}
        />

        <MealplanItemTesting
          navigation={navigation}
          recipe={recipes.find((recipe) => recipe.id === currentDay.dinner)}
          mealplanId={currentDay.id}
          mealType={"Dinner"}
        />

        <MealplanItemTesting
          navigation={navigation}
          recipe={recipes.find((recipe) => recipe.id === currentDay.snacks)}
          mealplanId={currentDay.id}
          mealType={"Snacks"}
        />

        <MealplanItemTesting
          navigation={navigation}
          recipe={recipes.find((recipe) => recipe.id === currentDay.drinks)}
          mealplanId={currentDay.id}
          mealType={"Drinks"}
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
