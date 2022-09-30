import { Text, View, StyleSheet, FlatList } from "react-native";
import { Card, ListItem } from "react-native-elements";
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
  const renderRecipe = ({ item: recipe }) => {
    return (
      <ListItem style={{}}>
        <ListItem.Content style={{ alignItems: "center" }}>
          <ListItem.Title>{recipe.name}</ListItem.Title>
          <ListItem.Subtitle>{recipe.description}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };

  return (
    <FlatList
      containerStyle={styles.mainContainer}
      data={RECIPES}
      keyExtractor={(recipe) => recipe.id.toString()}
      renderItem={renderRecipe}
    />
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 100,
    alignItems: "center",
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
