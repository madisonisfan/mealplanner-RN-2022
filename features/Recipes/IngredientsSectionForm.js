import { View, Text, StyleSheet } from "react-native";
import { Button, Icon } from "@rneui/themed";

const IngredientsSectionForm = ({
  closeDirectionModal,
  handlePresentIngredientModalPress,
  ingredients,
}) => {
  return (
    <>
      <View style={styles.headerView}>
        <Text style={styles.inputLabel}>Ingredients</Text>
        <Button
          type="outline"
          onPress={() => {
            closeDirectionModal();
            handlePresentIngredientModalPress();
          }}
          title="+ Add"
          titleStyle={styles.addButtonTitleStyle}
          buttonStyle={styles.addButtonStyle}
          color="black"
          style={{ padding: 0 }}
        />
      </View>
      <View style={styles.largeInputSurroundingView}>
        {ingredients.length === 0 && (
          <Text style={styles.ingredientItem}>No ingredients added</Text>
        )}
        {ingredients.map((ingredient, index) => {
          return (
            <View
              key={index}
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 2,
              }}
            >
              <Icon
                name="circle"
                type="font-awesome"
                size={10}
                iconStyle={{ paddingRight: 3 }}
              />

              <Text style={styles.ingredientItem}>{ingredient}</Text>
            </View>
          );
        })}
      </View>
    </>
  );
};

export default IngredientsSectionForm;

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
  ingredientItem: {
    fontSize: 17,
    paddingHorizontal: 3,
  },
});
