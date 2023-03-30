import DropDownPicker from "react-native-dropdown-picker";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import { Button } from "@rneui/themed";
import { units } from "../../shared/extra data/units";
import { wholeValues } from "../../shared/extra data/wholeValues";
import { fractionValues } from "../../shared/extra data/fractionValues";

const IngredientModal = ({ addIngredient }) => {
  const [ingredientName, setIngredientName] = useState("");
  const [selectedUnit, setUnit] = useState("cup");
  const [isUnitDropdownOpen, setUnitDropdown] = useState(false);
  const [selectedWhole, setWhole] = useState("1");
  const [isWholeDropdownOpen, setWholeDropdown] = useState(false);
  const [selectedFraction, setFraction] = useState("0");
  const [isFractionDropdownOpen, setFractionDropdown] = useState(false);

  const formIngredient = () => {
    const correctUnit = unitFormat();
    const ingredientStr = `${selectedWhole !== "0" ? selectedWhole : ""} ${
      selectedFraction !== "0" ? selectedFraction : ""
    } ${correctUnit} ${ingredientName}`;

    addIngredient(ingredientStr);
  };

  const unitFormat = () => {
    if (selectedWhole && selectedWhole > 1) return selectedUnit + "s";
    return selectedUnit;
  };

  const clearForm = () => {
    setIngredientName("");
    setUnit("cup");
    setFraction("0");
    setWhole("1");
  };

  return (
    <View style={styles.modalView}>
      <View style={{}}>
        <Text style={styles.inputLabel}>Ingredient Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingredient Name"
          placeholderTextColor="grey"
          value={ingredientName}
          onChangeText={(text) => setIngredientName(text)}
        />
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{}}>
          <Text style={styles.inputLabel}>Whole Value</Text>
          <DropDownPicker
            textStyle={styles.ddText}
            labelStyle={styles.ddLabel}
            containerStyle={styles.ddContainer}
            style={styles.ddStyle}
            open={isWholeDropdownOpen}
            value={selectedWhole}
            items={wholeValues}
            setOpen={setWholeDropdown}
            setValue={setWhole}
            closeAfterSelecting={true}
            dropDownContainerStyle={{ height: 125 }}
          />
        </View>

        <View>
          <Text style={styles.inputLabel}>Fraction</Text>
          <DropDownPicker
            textStyle={styles.ddText}
            labelStyle={styles.ddLabel}
            containerStyle={styles.ddContainer}
            style={styles.ddStyle}
            open={isFractionDropdownOpen}
            value={selectedFraction}
            items={fractionValues}
            setOpen={setFractionDropdown}
            setValue={setFraction}
            closeAfterSelecting={true}
            dropDownContainerStyle={{ height: 125 }}
          />
        </View>
        <View>
          <Text style={styles.inputLabel}>Unit</Text>
          <DropDownPicker
            textStyle={styles.ddText}
            labelStyle={styles.ddLabel}
            containerStyle={styles.ddContainer}
            style={styles.ddStyle}
            open={isUnitDropdownOpen}
            value={selectedUnit}
            items={units}
            setOpen={setUnitDropdown}
            setValue={setUnit}
            closeAfterSelecting={true}
            dropDownContainerStyle={{ height: 125 }}
          />
        </View>
      </View>

      <View style={{ alignItems: "center", zIndex: -1 }}>
        <Button
          title="Add"
          buttonStyle={{
            backgroundColor: "#1f1e1e",
          }}
          containerStyle={{
            width: "30%",
            marginTop: 30,
            borderRadius: 5,
          }}
          onPress={formIngredient}
        />
        <Button
          type="clear"
          title="Clear"
          titleStyle={{
            color: "black",
          }}
          containerStyle={{
            width: "30%",
            marginTop: 10,
          }}
          onPress={clearForm}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    paddingHorizontal: 10,
    paddingTop: 10,
    // backgroundColor: "rgba(204, 222, 209, 0.2)",
    height: "100%",
  },
  inputLabel: {
    color: "black",
    fontSize: 17,
    textAlign: "center",
    fontWeight: "500",
  },
  input: {
    marginTop: 10,
    color: "black",
    fontSize: 17,
    borderWidth: 1,
    backgroundColor: "white",
    //backgroundColor: "#D9D9D9",
    borderRadius: 7,
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  //DROP DOWN PICKER
  ddText: {
    fontSize: 17,
  },
  ddLabel: {
    fontSize: 17,
  },
  ddContainer: {
    width: 100,
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    zIndex: 1,
  },
  ddStyle: {
    width: 100,
    marginRight: "auto",
    marginLeft: "auto",
  },
});

export default IngredientModal;
