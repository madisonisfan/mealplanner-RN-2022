import { View, Text, StyleSheet } from "react-native";
import { Button } from "@rneui/themed";
import { Icon } from "@rneui/themed";

const EmptyMealplanItem = () => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.text}>No Meals Added Yet</Text>
    </View>
  );
};

//<Icon name="circle-plus" type="font-awesome" />

const styles = StyleSheet.create({
  mainView: {
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginHorizontal: 11,
    marginVertical: 10,
    borderRadius: 7,
    borderWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  text: {
    color: "black",
    fontSize: 14,
    fontWeight: "600",
  },
});

export default EmptyMealplanItem;
