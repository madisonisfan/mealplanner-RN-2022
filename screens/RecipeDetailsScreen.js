import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { Card } from "react-native-elements";
import { useSelector } from "react-redux";
import { selectRecipeById } from "../features/Recipes/recipesSlice";

//<Image source={recipe.image} style={{ resizeMode: "contain" }} />
const RecipeDetails = ({ route }) => {
  const { recipe } = route.params;
  /*const { recipeId } = route.params;
  console.log(`params `, route.params);
  console.log(`details of `, parseInt(recipeId));
  const recipe = useSelector(selectRecipeById(recipeId));*/

  return (
    <ScrollView style={styles.mainView}>
      <Text style={styles.recipeName}>{recipe.name}</Text>
      <Text style={styles.description}>{recipe.description}</Text>
      <Image
        source={recipe.image}
        style={{ flex: 1, width: null, height: 200 }}
      />
      <Card containerStyle={styles.card}>
        <View
          style={{
            flexDirection: "row",
            //justifyContent: "space-evenly",
            marginBottom: 20,
          }}
        >
          <View style={{ marginRight: 50, marginLeft: 50 }}>
            <Text style={styles.label}>Prep Time:</Text>
            <Text>{recipe.preptime}</Text>
          </View>
          <View>
            <Text style={styles.label}>Cook Time:</Text>
            <Text>{recipe.cooktime}</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ marginRight: 50, marginLeft: 50 }}>
            <Text style={styles.label}>Total Time:</Text>
            <Text>{recipe.totaltime}</Text>
          </View>
          <View>
            <Text style={styles.label}>Servings:</Text>
            <Text>{recipe.servings}</Text>
          </View>
        </View>
      </Card>
      <Text style={styles.title}>Ingredients</Text>
      {recipe.ingredients.map((ingredient, index) => (
        <View key={index}>
          <Text style={styles.ingredient}>- {ingredient}</Text>
        </View>
      ))}
      <Text style={styles.title}>Instructions</Text>
      {recipe.directions.map((direction, index) => (
        <View key={index}>
          <Text style={styles.direction}>
            {index + 1}. {direction}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  direction: {
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 17,
  },
  ingredient: {
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 17,
  },
  card: {
    justifyContent: "center",
    margin: 0,
  },

  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
    paddingBottom: 10,
  },
  mainView: {
    padding: 20,
    backgroundColor: "white",
  },
  recipeName: { fontSize: 25, fontWeight: "bold", marginBottom: 10 },

  description: {
    fontSize: 17,
    marginBottom: 10,
  },
});

export default RecipeDetails;
