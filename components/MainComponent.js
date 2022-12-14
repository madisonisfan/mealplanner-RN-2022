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
        options={{
          title: "Recipes",
          headerStyle: {
            backgroundColor: "#1f1e1e",
          },
          //headerTintColor: "white",
          headerTitleStyle: {
            color: "white",
            fontSize: 23,
          },
        }}
      />
      <Stack.Screen
        name="RecipeDetails"
        component={RecipeDetails}
        /*options={({ route }) => ({
          title: route.params.recipe.name,
        })}*/
        options={{
          title: "Recipe Details",
          headerStyle: {
            backgroundColor: "#1f1e1e",
          },
          //headerTintColor: "white",
          headerTitleStyle: {
            color: "white",
            fontSize: 23,
          },
        }}
      />
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{
          headerStyle: {
            backgroundColor: "#1f1e1e",
          },
          //headerTintColor: "white",
          headerTitleStyle: {
            color: "white",
            fontSize: 23,
          },
        }}
      />
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
        options={{
          title: "Mealplan",
          headerStyle: {
            backgroundColor: "#1f1e1e",
          },
          //headerTintColor: "white",
          headerTitleStyle: {
            color: "white",
            fontSize: 23,
          },
        }}
      />
      <Stack.Screen
        name="RecipeDetails"
        component={RecipeDetails}
        /*options={({ route }) => ({
          title: route.params.recipe.name,
        })}*/
        options={{
          title: "Recipe Details",
          headerStyle: {
            backgroundColor: "#1f1e1e",
          },
          //headerTintColor: "white",
          headerTitleStyle: {
            color: "white",
            fontSize: 23,
          },
        }}
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
      <Stack.Screen
        name="Blog"
        component={Blog}
        options={{
          title: "Blog",
          headerStyle: {
            backgroundColor: "#1f1e1e",
          },
          //headerTintColor: "white",
          headerTitleStyle: {
            color: "white",
            fontSize: 23,
          },
        }}
      />
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
        options={{
          title: "Profile",
          headerStyle: {
            backgroundColor: "#1f1e1e",
          },
          //headerTintColor: "white",
          headerTitleStyle: {
            color: "white",
            fontSize: 23,
          },
        }}
      />
    </Stack.Navigator>
  );
};

const Main = () => {
  //return <MainRecipes />;
  const Tab = createBottomTabNavigator();

  return (
    <View style={styles.mainContainer}>
      <Tab.Navigator screenOptions={{}}>
        <Tab.Screen
          name="Recipes"
          component={MainRecipesDirectory}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="list" color={color} type="font-awesome" />
            ),
            tabBarLabelStyle: {
              backgroundColor: "red",
              color: "blue",
            },
          }}
        />
        <Tab.Screen
          name="Mealplan"
          component={MealplanDirectory}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="cutlery" color={color} type="font-awesome" />
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
