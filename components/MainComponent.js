import MainRecipes from "../screens/MainRecipesScreen";
import Blog from "../screens/BlogScreen";
import Profile from "../screens/MealplanScreen";
import Mealplan from "../screens/ProfileScreen";
import { Text, View, StyleSheet, Platform } from "react-native";
import Constants from "expo-constants";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const MainRecipesDirectory = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainRecipes"
        component={MainRecipes}
        options={{ title: "Recipes" }}
      />
    </Stack.Navigator>
  );
};

const MealplanDirectory = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Mealplan"
        component={Mealplan}
        options={{ title: "Mealplan" }}
      />
    </Stack.Navigator>
  );
};

const BlogDirectory = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Blog" component={Blog} options={{ title: "Blog" }} />
    </Stack.Navigator>
  );
};

const ProfileDirectory = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
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
        <Tab.Screen name="Recipes" component={MainRecipesDirectory} />
        <Tab.Screen name="Mealplan" component={MealplanDirectory} />
        <Tab.Screen name="Blog" component={BlogDirectory} />
        <Tab.Screen name="Profile" component={ProfileDirectory} />
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
