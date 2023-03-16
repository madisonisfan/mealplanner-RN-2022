import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Icon } from "@rneui/themed";

const MealplanItemTesting = ({ recipe, mealType }) => {
  const { image, name, totaltime, calories } = recipe;

  return (
    <View style={styles.mainView}>
      <View style={styles.leftView}>
        <Text style={styles.mealtypeTitle}>{mealType}</Text>
        <View style={styles.iconView}>
          <Icon
            name="pencil"
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
      </View>
      <View
        style={{
          borderRadius: 8,
          borderWidth: 1,
          flexGrow: 1,
        }}
      >
        <ImageBackground
          //style={styles.imageBG}
          style={{ flex: 1 }}
          source={image}
        >
          <View
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.recipeName}>{name}</Text>
            <Text style={styles.recipeInfoText}>{totaltime} total </Text>
            <Text style={styles.recipeInfoText}>{calories} calories</Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    height: 100,
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
  leftView: {
    width: "35%",
    justifyContent: "center",
    alignItems: "center",
  },
  iconView: {
    flexDirection: "row",
  },
  mealtypeTitle: {
    fontSize: 18,
    fontWeight: "500",
  },
  imageBG: {
    //borderWidth: 1,
    // borderRadius: 8,
  },
  recipeName: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
  recipeInfoText: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
  },
});
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

export default MealplanItemTesting;
