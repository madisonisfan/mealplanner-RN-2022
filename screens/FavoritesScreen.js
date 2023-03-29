import { View, Text, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { toggleFavorite } from "../features/Favorites/favoritesSlice";
import { selectAllFavorites } from "../features/Favorites/favoritesSlice";

import { selectAllRecipes } from "../features/Recipes/recipesSlice";
import RenderRecipe from "../features/Recipes/renderRecipe";
import RenderRecipeTwo from "../features/Recipes/renderRecipeTwo";

const Favorites = ({ navigation }) => {
  //const favorites = useSelector(selectAllFavorites);
  const favorites = useSelector((state) => state.users.usersArray[0].favorites);
  //const allUsers = useSelector((state) => state.users.usersArray);
  const recipes = useSelector(selectAllRecipes);

  //console.log(`FAVORITES`, allUsers[0].favorites);

  if (favorites.length === 0) {
    return (
      <View>
        <Text>No recipes saved</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{ flexDirection: "row", marginTop: 10 }} flexWrap>
        {recipes
          .filter((recipe) => favorites.includes(recipe._id))
          .map((recipe) => {
            return (
              <RenderRecipeTwo
                recipe={recipe}
                key={recipe._id}
                //favorites={[]}
              />
            );
          })}
      </View>
    </ScrollView>
  );
};
export default Favorites;

/*<ScrollView style={{ borderWidth: 1, borderColor: "red" }}>
     
    </ScrollView>
      <View style={{ flexDirection: "row", marginTop: 10 }} flexWrap>
        {recipes.map((recipe) => {
          console.log(`recipe`, recipe);
          return (
            <RenderRecipeTwo
              //key={index}
              recipe={recipe}
              navigate={navigation.navigate}
            />
          );
        })}
      </View>

      */
/*
<FlatList
      data={recipes.filter((recipe) => favorites.includes(recipe.id))}
      renderItem={renderFavorite}
    />
*/
