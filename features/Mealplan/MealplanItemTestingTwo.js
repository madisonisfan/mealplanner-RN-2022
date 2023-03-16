import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Icon } from "@rneui/themed";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

// <FontAwesome5 name={"list"} color={color} size={23} />

const MealplanItemTestingTwo = ({ recipe, mealType }) => {
  console.log(`RECIPE for ${mealType}`, recipe);

  if (recipe) {
    const { image, name, totaltime, calories, servings } = recipe;
    return (
      <View style={styles.mainView}>
        <View style={styles.leftView}>
          <ImageBackground style={styles.imageBG} source={image}>
            <View style={styles.blackOverlay}>
              <Text style={styles.recipeName}>{name}</Text>
            </View>
            <Icon
              name="minus"
              color="white"
              type="font-awesome"
              containerStyle={{
                position: "absolute",
                bottom: 3,
                left: 8,
              }}
            />
          </ImageBackground>
        </View>
        <View style={styles.rightView}>
          <Text style={styles.recipeInfoText}>Total Time: {totaltime}</Text>
          <Text style={styles.recipeInfoText}> {calories} calories</Text>
          <Text style={styles.recipeInfoText}> {servings} servings</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.noRecipeView}>
      <View style={styles.leftView}>
        <Text style={styles.mealtypeTitle}> {mealType}</Text>
      </View>
      <View style={styles.rightEmptyView}>
        {/* <Text style={styles.addRecipeText}>Add Recipe</Text>*/}
        <Icon
          name="plus"
          color="white"
          type="font-awesome"
          onPress={() => navigation.navigate("MealplanOptionsModal")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    height: 100,
    flexDirection: "row",
    backgroundColor: "#e9f2d5",
    //width: "100%",
    marginHorizontal: 11,
    marginVertical: 10,
    borderRadius: 7,
    borderWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },

  iconView: {
    flexDirection: "row",
    position: "absolute",
    left: 10,
    bottom: 5,
  },

  //RIGHT
  rightView: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "rgba(31, 30, 30, 0.5)",
    backgroundColor: "white",
    borderBottomRightRadius: 7,
    borderTopRightRadius: 7,
    borderWidth: 0,
  },
  mealtypeTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "black",
  },
  recipeInfoText: {
    color: "black",
    fontSize: 14,
    fontWeight: "600",
  },

  //LEFT
  leftView: {
    width: "55%",
    backgroundColor: "rgba(31, 30, 30, 0.5)",
    borderRadius: 7,
    borderWidth: 0,
  },
  imageBG: {
    flex: 1,
    borderRadius: 7,
    borderWidth: 0,
    overflow: "hidden",
  },
  blackOverlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    borderWidth: 0,
  },
  recipeName: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },

  //NO RECIPE
  noRecipeView: {
    height: 50,
    flexDirection: "row",
    backgroundColor: "white",
    //width: "100%",
    marginHorizontal: 11,
    marginVertical: 10,
    borderRadius: 7,
    borderWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  rightEmptyView: {
    borderRadius: 8,
    borderWidth: 0,
    flexGrow: 1,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    justifyContent: "center",
  },
  addRecipeText: {
    fontSize: 18,
    fontWeight: "500",
  },
});

{
  /*
<View style={styles.iconView}>
          <Icon
            name="pencil-square-o"
            type="font-awesome"
            color="black"
            size={23}
            onPress={() => navigation.navigate("MealplanOptionsModal")}
          />
          <Icon
            color="black"
            name="check-circle-o"
            // name={isCompleted ? "check-circle" : "check-circle-o"}
            type="font-awesome"
            size={25}
            //onPress={() => toggleIsCompleted(!isCompleted)}
          />
        </View>
      
            */
}

{
  /*
 <Text style={styles.recipeName}>{name}</Text>
    */
}

{
  /*
//<ImageBackground style={styles.imageBG} source={image}>
        <Text>tec</Text>
      </ImageBackground>

    */
}

export default MealplanItemTestingTwo;
