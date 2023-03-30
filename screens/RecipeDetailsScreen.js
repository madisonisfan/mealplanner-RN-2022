import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { Card } from "react-native-elements";
import { useSelector } from "react-redux";
import { selectRecipeById } from "../features/Recipes/recipesSlice";

//<Image source={recipe.image} style={{ resizeMode: "contain" }} />
const RecipeDetails = ({ route }) => {
  const { recipe } = route.params;
  const {
    name,
    description,
    servings,
    preptime,
    cooktime,
    totaltime,
    ingredients,
    directions,
    image,
  } = recipe;

  const getTimeValue = (timeInMinutes) => {
    //console.log(`timeInMinutes: `, timeInMinutes);
    if (timeInMinutes < 60) {
      return `${timeInMinutes}${" "}mins`;
    } else {
      const hours = Math.trunc(timeInMinutes / 60);
      const mins = timeInMinutes % 60;

      if (hours === 1) {
        return `1 hr ${mins} mins`;
      } else {
        return `${hours} hr ${mins} mins`;
      }
    }
  };

  return (
    <ScrollView
      style={styles.mainView}
      contentContainerStyle={{ paddingVertical: 10 }}
    >
      <Text style={styles.recipeName}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
      <Image source={image} style={{ flex: 1, width: null, height: 200 }} />
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
            <Text>{getTimeValue(preptime)}</Text>
          </View>
          <View>
            <Text style={styles.label}>Cook Time:</Text>
            <Text>{getTimeValue(cooktime)}</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ marginRight: 50, marginLeft: 50 }}>
            <Text style={styles.label}>Total Time:</Text>
            <Text>{getTimeValue(totaltime)}</Text>
          </View>
          <View>
            <Text style={styles.label}>Servings:</Text>
            <Text>{servings}</Text>
          </View>
        </View>
      </Card>
      <Text style={styles.title}>Ingredients</Text>
      {ingredients.map((ingredient, index) => (
        <View key={index}>
          <Text style={styles.ingredient}>- {ingredient}</Text>
        </View>
      ))}
      <Text style={styles.title}>Instructions</Text>
      {directions.map((direction, index) => (
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
    paddingHorizontal: 20,
    //backgroundColor: "white",
  },
  recipeName: { fontSize: 25, fontWeight: "bold", marginBottom: 10 },

  description: {
    fontSize: 17,
    marginBottom: 10,
  },
});

export default RecipeDetails;
