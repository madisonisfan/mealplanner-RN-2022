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
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Icon } from "@rneui/themed";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const MainRecipesDirectory = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          //backgroundColor: "#3C3C3C",
          backgroundColor: "#f0faeb",
        },
        headerStyle: {
          backgroundColor: "#1f1e1e",
        },
        headerTitleStyle: {
          color: "white",
          fontSize: 23,
        },
        headerBackTitleStyle: {
          color: "grey",
        },
      }}
    >
      <Stack.Screen
        name="MainRecipes"
        component={MainRecipesTwo}
        options={{
          title: "Recipes",
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
        }}
      />
      <Stack.Screen name="Bookmarks" component={Favorites} options={{}} />
    </Stack.Navigator>
  );
};

const MealplanDirectory = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          //backgroundColor: "#3C3C3C",
          backgroundColor: "#f0faeb",
        },
        headerStyle: {
          backgroundColor: "#1f1e1e",
        },
        //headerTintColor: "white",
        headerTitleStyle: {
          color: "white",
          fontSize: 23,
        },

        headerBackTitleStyle: {
          color: "grey",
        },
      }}
    >
      <Stack.Screen name="Mealplan" component={Mealplan} />
      <Stack.Screen
        name="RecipeDetails"
        component={RecipeDetails}
        /*options={({ route }) => ({
          title: route.params.recipe.name,
        })}*/
        options={{}}
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
          // backgroundColor: "#3C3C3C",
          backgroundColor: "#f0faeb",
        },
        headerStyle: {
          backgroundColor: "#1f1e1e",
        },
        //headerTintColor: "white",
        headerTitleStyle: {
          color: "white",
          fontSize: 23,
        },
      }}
    >
      <Stack.Screen name="Blog" component={Blog} />
    </Stack.Navigator>
  );
};

const ProfileDirectory = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          //backgroundColor: "#3C3C3C",
          backgroundColor: "#f0faeb",
        },
        headerStyle: {
          backgroundColor: "#1f1e1e",
        },
        //headerTintColor: "white",
        headerTitleStyle: {
          color: "white",
          fontSize: 23,
        },
      }}
    >
      <Stack.Screen name="Profile" title="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

const Main = () => {
  //return <MainRecipes />;
  const Tab = createMaterialBottomTabNavigator();

  return (
    <View style={styles.mainContainer}>
      <Tab.Navigator
        activeColor="#f0faeb"
        inactiveColor="white"
        barStyle={{
          backgroundColor: "#1f1e1e",
        }}
      >
        <Tab.Screen
          name="Recipes"
          component={MainRecipesDirectory}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
            //tabBarActiveBackgroundColor: "red",
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
