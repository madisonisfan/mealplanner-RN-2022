import MainRecipes from "../screens/MainRecipesScreen";
import MainRecipesTwo from "../screens/MainRecipesScreenTwo";
import Blog from "../screens/BlogScreen";
import Mealplan from "../screens/MealplanScreen";
import Profile from "../screens/ProfileScreen";
import RecipeDetails from "../screens/RecipeDetailsScreen";
import Favorites from "../screens/FavoritesScreen";
import { Text, View, StyleSheet, Platform } from "react-native";
import Constants from "expo-constants";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";

const MainRecipesDirectory = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: "#3C3C3C",
        },
      }}
    >
      <Stack.Screen
        name="MainRecipes"
        component={MainRecipesTwo}
        options={{ title: "Recipes" }}
      />
      <Stack.Screen
        name="RecipeDetails"
        component={RecipeDetails}
        /*options={({ route }) => ({
          title: route.params.recipe.name,
        })}*/
      />
      <Stack.Screen name="Favorites" component={Favorites} />
    </Stack.Navigator>
  );
};

const MealplanDirectory = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: "#3C3C3C",
        },
      }}
    >
      <Stack.Screen
        name="Mealplan"
        component={Mealplan}
        options={{ title: "Mealplan" }}
      />
      <Stack.Screen
        name="RecipeDetails"
        component={RecipeDetails}
        /*options={({ route }) => ({
          title: route.params.recipe.name,
        })}*/
      />
    </Stack.Navigator>
  );
};

const BlogDirectory = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: "#3C3C3C",
        },
      }}
    >
      <Stack.Screen name="Blog" component={Blog} options={{ title: "Blog" }} />
    </Stack.Navigator>
  );
};

const ProfileDirectory = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: "#3C3C3C",
        },
      }}
    >
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ title: "Profile" }}
      />
    </Stack.Navigator>
  );
};

const Main = () => {
  //return <MainRecipes />;
  const Tab = createBottomTabNavigator();

  return (
    <View style={styles.mainContainer}>
      <Tab.Navigator>
        <Tab.Screen
          name="Recipes"
          component={MainRecipesDirectory}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="list" color={color} type="font-awesome" />
            ),
          }}
        />
        <Tab.Screen
          name="Mealplan"
          component={MealplanDirectory}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="star" color={color} type="font-awesome" />
            ),
          }}
        />
        <Tab.Screen
          name="Blog"
          component={BlogDirectory}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="comment" color={color} type="font-awesome" />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileDirectory}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="user" color={color} type="font-awesome" />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
    flex: 1,
  },
});

export default Main;
