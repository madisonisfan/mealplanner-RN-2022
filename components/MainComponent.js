import MainRecipes from "../screens/MainRecipesScreen";
import MainRecipesTwo from "../screens/MainRecipesScreenTwo";
import Blog from "../screens/BlogScreen";
import Mealplan from "../screens/MealplanScreen";
import Profile from "../screens/ProfileScreen";
import RecipeDetails from "../screens/RecipeDetailsScreen";
import Favorites from "../screens/FavoritesScreen";
import RecipeForm from "../features/Recipes/RecipeForm";
//import MealplanOptionsModal from "../features/Mealplan/MealplanOptionsModal";
import MealplanOptionsModalTwo from "../features/Mealplan/MealplanOptionsModalTwo";
import CreatePostModal from "../features/Posts/createPostModal";
import { Text, View, StyleSheet, Platform } from "react-native";
import Constants from "expo-constants";
import { createStackNavigator } from "@react-navigation/stack";
//import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const MainRecipesDirectory = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          //backgroundColor: "#3C3C3C",
          // backgroundColor: "#f0faeb",
          backgroundColor: "#e9f2d5",
        },
        headerStyle: {
          backgroundColor: "#1f1e1e",
        },
        headerTitleStyle: {
          color: "white",
          fontSize: 23,
        },
        headerTintColor: "grey",
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
      <Stack.Screen
        name="RecipeForm"
        component={RecipeForm}
        options={{
          presentation: "modal",
          title: "Add Recipe",
          headerBackTitle: "Cancel",
        }}
      />
      <Stack.Screen
        name="SavedRecipes"
        component={Favorites}
        options={{ title: "Saved Recipes" }}
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
          //backgroundColor: "#3C3C3C",
          //backgroundColor: "#f0faeb",
          backgroundColor: "#e9f2d5", //USING
          //backgroundColor: "rgba(73, 74, 74, 0.1)",
        },
        headerStyle: {
          backgroundColor: "#1f1e1e",
        },
        //headerTintColor: "white",
        headerTitleStyle: {
          color: "white",
          fontSize: 23,
        },

        headerTintColor: "grey",
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
      <Stack.Screen
        name="MealplanOptionsModalTwo"
        component={MealplanOptionsModalTwo}
        options={{
          presentation: "modal",
          title: "Choose Meal",
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
          // backgroundColor: "#3C3C3C",
          //backgroundColor: "#f0faeb",
          backgroundColor: "#e9f2d5",
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
        headerBackTitle: "Cancel",
        headerTintColor: "grey",
        /*headerBackStyling: {
          color: "grey",
        },*/
      }}
    >
      <Stack.Screen name="Blog" component={Blog} />
      <Stack.Screen
        name="CreatePostModal"
        component={CreatePostModal}
        options={{
          presentation: "modal",
          title: "Create post",
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
          //backgroundColor: "#3C3C3C",
          //backgroundColor: "#f0faeb",
          backgroundColor: "#e9f2d5",
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
  const Tab = createBottomTabNavigator();

  return (
    <View style={styles.mainContainer}>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#e9f2d5",
          inactiveTintColor: "white",
          style: {
            backgroundColor: "#1f1e1e",
          },
        }}
      >
        <Tab.Screen
          name="Recipes"
          component={MainRecipesDirectory}
          options={{
            tabBarStyle: {
              backgroundColor: "#1f1e1e",
            },
            tabBarIcon: ({ color }) => (
              //  <MaterialCommunityIcons name="home" color={color} size={30} />
              <FontAwesome5 name={"list"} color={color} size={23} />
            ),
            //tabBarActiveBackgroundColor: "red",
          }}
        />
        <Tab.Screen
          name="Mealplan"
          component={MealplanDirectory}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name={"utensils"} color={color} size={23} />
            ),
          }}
        />
        <Tab.Screen
          name="Blog"
          component={BlogDirectory}
          options={{
            tabBarIcon: ({ color }) => (
              // <Icon name="comment" color={color} type="font-awesome" />
              <FontAwesome5 name={"comment"} size={23} color={color} solid />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileDirectory}
          options={{
            tabBarIcon: ({ color }) => (
              // <Icon name="user" color={color} type="font-awesome" />
              <FontAwesome5 name={"user"} color={color} size={23} solid />
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
