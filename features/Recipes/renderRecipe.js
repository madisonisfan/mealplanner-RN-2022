import { Text, View, StyleSheet, FlatList, Image } from "react-native";
import { Card, ListItem, Icon } from "react-native-elements";
import { RECIPES } from "../../shared/recipes";

const RenderRecipe = ({ item: recipe }) => {
  return (
    <Card containerStyle={styles.card}>
      <View style={styles.cardView}>
        <View style={styles.imageView}>
          <Card.Image source={recipe.image} />
        </View>
        <View style={styles.textView}>
          <Text style={styles.recipeName}>{recipe.name}</Text>
          <Icon name="star" type="font-awesome" iconStyle={{ flex: "1" }} />
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 0,
  },
  cardView: {
    flexDirection: "row",
  },
  imageView: {
    flex: 3,
    // backgroundColor: "grey",
  },
  textView: {
    justifyContent: "center",
    alignItems: "center",
    flex: 2,
    padding: 10,
  },
  recipeName: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "500",
    flex: 2,
  },
});

export default RenderRecipe;
