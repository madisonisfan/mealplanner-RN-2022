import DropDownPicker from "react-native-dropdown-picker";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import { Button } from "@rneui/themed";

const units = [
  { label: "cup", value: "cup" },
  { label: "teaspoon", value: "teaspoon" },
  { label: "tablespoon", value: "tablespoon" },
  { label: "ounce", value: "ounce" },
  { label: "pint", value: "pint" },
  { label: "milliliter", value: "milliliter" },
  { label: "quart", value: "quart" },
  { label: "gallon", value: "gallon" },
];

const wholeValues = [
  { label: "0", value: "0" },
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
  { label: "6", value: "6" },
  { label: "7", value: "7" },
  { label: "8", value: "8" },
  { label: "9", value: "9" },
];

const fractionValues = [
  { label: "0", value: "0" },
  { label: "1/4", value: "1/4" },
  { label: "1/2", value: "1/2" },
  { label: "3/4", value: "3/4" },
  { label: "1/3", value: "1/3" },
  { label: "2/3", value: "2/3" },
];

const IngredientModal = ({ addIngredient }) => {
  const [ingredientName, setIngredientName] = useState("");
  const [selectedUnit, setUnit] = useState("cup");
  const [isUnitDropdownOpen, setUnitDropdown] = useState(false);
  const [selectedWhole, setWhole] = useState("1");
  const [isWholeDropdownOpen, setWholeDropdown] = useState(false);
  const [selectedFraction, setFraction] = useState("0");
  const [isFractionDropdownOpen, setFractionDropdown] = useState(false);

  const formIngredient = () => {
    const ingredientObject = {
      name: ingredientName,
      wholeValue: selectedWhole,
      fractionValue: selectedFraction,
      unit: selectedUnit,
    };
    addIngredient(ingredientObject);
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
          //containerStyle={{ width: "80%" }}
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
            // zIndex={1000}
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
            // dropDownDirection="TOP"

            //dropDownContainerStyle={{ zIndex: 1000 }}
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
