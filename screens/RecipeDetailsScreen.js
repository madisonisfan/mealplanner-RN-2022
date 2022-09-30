import { View, Text, ScrollView, StyleSheet } from "react-native";

const RecipeDetails = ({ route }) => {
  const { recipe } = route.params;
  return (
    <ScrollView>
      <Text>{recipe.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    justifyContent: "center",
  },
  recipeName: {
    fontSize: 20,
  },
  recipeDescription: {
    fontSize: 15,
  },
});

export default RecipeDetails;
