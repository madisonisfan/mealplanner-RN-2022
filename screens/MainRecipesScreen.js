import { Text, View, StyleSheet, FlatList } from "react-native";
import { Card, ListItem } from "react-native-elements";
import RenderRecipe from "../features/Recipes/renderRecipe";
import { RECIPES } from "../shared/recipes";

/*
<Card containerStyle={styles.card}>
        <Card.Title>{recipe.name}</Card.Title>
        <View>
          <Text>{recipe.description}</Text>
        </View>
      </Card>
*/
const MainRecipes = () => {
  return (
    <FlatList
      data={RECIPES}
      keyExtractor={(recipe) => recipe.id.toString()}
      renderItem={RenderRecipe}
    />
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    //padding: 0,
    //paddingTop: 100,
    //alignItems: "center",
  },

  header: {
    // fontSize: 20,
  },
  recipeItem: {
    //alignItems: "center",
    //borderColor: "black",
    // flexGrow: 1,
    //width: 300,
    // flexDirection: "row",
    // flex: 1,
  },
});

export default MainRecipes;
