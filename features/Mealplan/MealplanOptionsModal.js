import { View, Text, StyleSheet, FlatList } from "react-native";
import Constants from "expo-constants";
import { selectAllFavorites } from "../Favorites/favoritesSlice";
import { selectAllRecipes } from "../Recipes/recipesSlice";
import { useSelector, useDispatch } from "react-redux";
import { Image, Card, Icon, Button } from "@rneui/themed";
import { addRecipeToDate } from "./mealplanSlice";
import FavoriteScreen from "../../screens/FavoritesScreen";

const MealplanOptionsModal = ({
  toggleModal,
  mealplanId,
  mealType,
  navigation,
}) => {
  const favorites = useSelector(selectAllFavorites);
  const recipes = useSelector(selectAllRecipes);
  const dispatch = useDispatch();

  const handleAddingRecipe = (recipeId, mealplanId) => {
    console.log(`add recipe: ${recipeId} to mealplan: ${mealplanId}`);
    const newMealplanItem = {
      mealplanId,
      mealType,
      recipeId,
    };
    dispatch(addRecipeToDate(newMealplanItem));
  };

  const renderFavorite = ({ item: recipe }) => {
    return (
      <Card
        containerStyle={styles.cardContainer}
        wrapperStyle={styles.cardInner}
      >
        <Card.Image source={recipe.image} style={styles.image} />

        <View style={styles.contentView}>
          <Text style={styles.recipeName}>{recipe.name}</Text>
          <Button
            type="clear"
            icon={
              <Icon size={23} name="plus" color="black" type="font-awesome" />
            }
          />
        </View>
      </Card>
    );
  };

  return (
    <FlatList
      contentContainerStyle={styles.mainView}
      data={recipes.filter((recipe) => favorites.includes(recipe.id))}
      renderItem={renderFavorite}
      style={{ flex: 1 }}
      ListEmptyComponent={
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "500",
            }}
          >
            No Recipes Saved Yet.
          </Text>
        </View>
      }
      //ListHeaderComponent={<Text style={styles.pageTitle}>Choose meal</Text>}
      //ListHeaderComponentStyle={styles.mainView}
      ListFooterComponent={
        favorites.length !== 0 && (
          <Button
            raised
            radius={10}
            title="Done"
            color="white"
            titleStyle={{
              color: "black",
            }}
            containerStyle={{
              //width: 100,
              marginHorizontal: "30%",
            }}
            buttonStyle={{
              borderWidth: "1px",
              borderColor: "black",
            }}
            onPress={() => navigation.goBack()}
          />
        )
      }
      ListFooterComponentStyle={styles.footerStyle}
    />
  );
};

/*
 <Button
          raised
          radius={10}
          title="Done"
          color="white"
          titleStyle={{
            color: "black",
          }}
          containerStyle={{
            //width: 100,
            marginHorizontal: "30%",
          }}
          buttonStyle={{
            borderWidth: "1px",
            borderColor: "black",
          }}
          onPress={() => navigation.goBack()}
        />
*/

const styles = StyleSheet.create({
  mainView: {
    //paddingTop: Constants.statusBarHeight,
    flex: 1,
    // paddingHorizontal: 10,
    backgroundColor: "#f0faeb",
  },

  recipeView: {
    flexDirection: "row",
    paddingTop: 20,
    alignItems: "center",
    //justifyContent: "space-between",
  },
  recipeName: {
    flex: 3,
    fontSize: 20,
  },

  pageTitle: {
    textAlign: "center",
    fontSize: 25,
  },
  footerStyle: {
    justifyContent: "flex-end",
    paddingBottom: 30,

    flex: 1,
  },
  cardContainer: {
    padding: 0,
    height: 100,
    borderRadius: 7,
    borderWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  cardInner: {
    flexDirection: "row",
  },
  image: {
    // borderBottomLeftRadius: 7,
    //borderTopLeftRadius: 7,
    borderRadius: 7,
    width: 150,
    height: 100,
    //width: 150,
  },

  contentView: {
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});

export default MealplanOptionsModal;
