import { View, Text, StyleSheet } from "react-native";
import { Button, Icon } from "@rneui/themed";

const DirectionsSectionForm = ({
  closeIngredientModal,
  handlePresentDirectionsModalPress,
  directions,
}) => {
  return (
    <>
      <View style={styles.headerView}>
        <Text style={styles.inputLabel}>Directions</Text>
        <Button
          type="outline"
          onPress={() => {
            closeIngredientModal();
            handlePresentDirectionsModalPress();
          }}
          title="+ Add"
          titleStyle={styles.addButtonTitleStyle}
          buttonStyle={styles.addButtonStyle}
          color="black"
          style={{ padding: 0 }}
        />
      </View>
      <View style={styles.largeInputSurroundingView}>
        {directions.length === 0 && (
          <Text style={styles.directionItem}>No directions added</Text>
        )}
        {directions.map((direction, index) => {
          return (
            <View
              key={index}
              style={{
                flexDirection: "row",
              }}
            >
              <Text style={styles.directionNum}> {index + 1}.</Text>
              <Text style={styles.directionItem}>{direction}</Text>
            </View>
          );
        })}
      </View>
    </>
  );
};

export default DirectionsSectionForm;

const styles = StyleSheet.create({
  headerView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  largeInputSurroundingView: {
    //View around lists and input boxes for ingredients and directions
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 7,
    padding: 10,
    //paddingLeft: 5,
    fontSize: 17,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  inputLabel: {
    //label above input box
    fontSize: 18,
    paddingBottom: 3,
    fontWeight: "600",
  },
  addButtonStyle: {
    borderColor: "black",
    paddingVertical: 3,
    backgroundColor: "white",
  },
  addButtonTitleStyle: { color: "black", fontSize: 17 },
  directionItem: {
    fontSize: 17,
    paddingLeft: 3,
  },
  directionNum: {
    fontSize: 17,
    width: 20,
  },
});
