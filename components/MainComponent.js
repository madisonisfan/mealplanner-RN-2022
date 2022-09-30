import MainRecipes from "../screens/MainRecipesScreen";
import { Text, View, StyleSheet, Platform } from "react-native";
import Constants from "expo-constants";

const Main = () => {
  //return <MainRecipes />;

  return (
    <View style={styles.mainContainer}>
      <MainRecipes />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
  },
});

export default Main;
