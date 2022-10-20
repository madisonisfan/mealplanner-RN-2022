import { View, Text, StyleSheet } from "react-native";
import { Button } from "@rneui/themed";
import { Icon } from "@rneui/themed";

const EmptyMealplanItem = () => {
  return (
    <View style={styles.container}>
      <Button
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.button}
        titleStyle={styles.buttonTitle}
      >
        +
      </Button>
    </View>
  );
};

//<Icon name="circle-plus" type="font-awesome" />

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: "45%",
    padding: 10,
    margin: 10,
    borderRadius: 7,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    width: "30%",
    backgroundColor: "white",
    borderRadius: 20,
  },
  button: {
    backgroundColor: "white",
  },
  buttonTitle: {
    color: "black",
    fontWeight: "bold",
  },
});

export default EmptyMealplanItem;
