import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleFavorite,
  selectAllFavorites,
} from "../Favorites/favoritesSlice";
import { Icon, Card } from "@rneui/themed";

const RenderRecipe = ({ recipe, navigate }) => {
  const favorites = useSelector(selectAllFavorites);
  const dispatch = useDispatch();

  if (recipe) {
    return (
      <>
        <TouchableOpacity
          onPress={() => navigate("RecipeDetails", { recipe })}
          style={styles.parentContainer}
        >
          <Card containerStyle={styles.card}>
            <Card.Image source={recipe.image} style={styles.image} />
            <Card.Title style={styles.name}>{recipe.name}</Card.Title>
            <View style={styles.iconView}>
              <Icon
                size={35}
                iconStyle={
                  favorites.includes(recipe.id)
                    ? styles.iconFilled
                    : styles.iconEmpty
                }
                name={favorites.includes(recipe.id) ? "bookmark" : "bookmark-o"}
                type="font-awesome"
                onPress={() => {
                  dispatch(toggleFavorite(recipe.id));
                }}
              />
            </View>
          </Card>
        </TouchableOpacity>
      </>
    );
  }

  return (
    <View style={{ height: 100, backgroundColor: "blue" }}>
      <Text>no recipe</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    width: "50%",
    padding: 10,
    //borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },

  card: {
    margin: 1,
    padding: 0,
    borderWidth: 0,
    borderRadius: 7,
  },
  image: {
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
  iconView: {
    position: "absolute",
    top: -3,
    right: 15,
    padding: 0,
  },
  iconFilled: {
    padding: 0,
    color: "#04A804",
  },
  iconEmpty: {
    padding: 0,
    color: "#02B102",
  },

  textView: {
    flex: 1,

    //justifyContent: "center",
  },
  name: {
    //flex: 1,
    marginTop: "auto",
    marginBottom: "auto",
    paddingVertical: 10,
    // paddingVertical: 8,
  },
});

/*

<Icon
                // reverse
                size={35}
                // color="rgb(99, 97, 90, 0.5)"

                iconStyle={styles.icon}
                name={favorites.includes(recipe.id) ? "bookmark" : "bookmark-o"}
                type="font-awesome"
                onPress={() => {
                  dispatch(toggleFavorite(recipe.id));
                }}
              />

              */

export default RenderRecipe;

/*
                <Button
                  buttonStyle={{ paddingTop: 0, paddingBottom: 0, marginTop: 5 }}
                  type="outline"
                  title="Details"
                  onPress={() => navigate("RecipeDetails", { recipe })}
                />*/
