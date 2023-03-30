import { View, Text, StyleSheet } from "react-native";
import { Icon } from "@rneui/themed";

const MealplanTypeHeader = ({ navigation, mealType, mealplanId }) => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.mealtypeText}>{mealType}</Text>
      <Icon
        name="plus"
        color="black"
        type="font-awesome"
        onPress={() =>
          navigation.navigate("MealplanOptionsModal", {
            mealplanId,
            mealType,
            navigation,
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flexDirection: "row",
    marginHorizontal: 11,
    marginTop: 10,
    justifyContent: "space-between",
  },
  mealtypeText: {
    fontSize: 20,
    fontWeight: "500",
    paddingRight: 10,
    paddingBottom: 10,
  },
});

export default MealplanTypeHeader;
