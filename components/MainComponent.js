import MainRecipes from "../screens/MainRecipesScreen";
import MainRecipesTwo from "../screens/MainRecipesScreenTwo";
import Blog from "../screens/BlogScreen";
import Mealplan from "../screens/MealplanScreen";
import Profile from "../screens/ProfileScreen";
import RecipeDetails from "../screens/RecipeDetailsScreen";
import Favorites from "../screens/FavoritesScreen";
import RecipeForm from "../features/Recipes/RecipeForm";
import MealplanOptionsModal from "../features/Mealplan/MealplanOptionsModal";
import CreatePostModal from "../features/Posts/createPostModal";
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
        name="MealplanOptionsModal"
        component={MealplanOptionsModal}
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
