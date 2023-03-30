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
import MealplanItemSection from "../features/Mealplan/MeaplanItemSection";

const Mealplan = ({ navigation }) => {
  const [currentIndex, setIndex] = useState(0);
  //const currentDay = useSelector(selectDayByIndex(currentIndex));
  //const recipes = useSelector(selectAllRecipes);
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
                setIndex(index);
              }}
              key={index}
              title={day}
              type="clear"
              titleStyle={{
                color: "white",
                textDecorationLine:
                  index === currentIndex ? "underline" : "none",
                textDecorationColor: "#f0faeb",
              }}
              containerStyle={{ borderBottom: "solid 1px blue" }}
            />
          );
        })}
      </ScrollView>
      <ScrollView contentContainerStyle={{ paddingBottom: 10, paddingTop: 20 }}>
        <MealplanItemSection
          navigation={navigation}
          mealType={"Breakfast"}
          currentIndex={currentIndex}
        />
        <MealplanItemSection
          navigation={navigation}
          mealType={"Lunch"}
          currentIndex={currentIndex}
        />
        <MealplanItemSection
          navigation={navigation}
          mealType={"Dinner"}
          currentIndex={currentIndex}
        />
        <MealplanItemSection
          navigation={navigation}
          mealType={"Snacks"}
          currentIndex={currentIndex}
        />
        <MealplanItemSection
          navigation={navigation}
          mealType={"Drinks"}
          currentIndex={currentIndex}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  emptyContainer: {
    height: "100%",
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
});

export default Mealplan;
