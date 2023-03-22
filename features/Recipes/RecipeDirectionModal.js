import DropDownPicker from "react-native-dropdown-picker";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import { Button } from "@rneui/themed";

const DirectionModal = ({ addDirection }) => {
  const [direction, setDirection] = useState("");

  const clear = () => {
    setDirection("");
  };

  return (
    <View style={styles.modalView}>
      <Text style={styles.inputLabel}>Enter Direction below</Text>
      <TextInput
        multiline={true}
        numberOfLines={4}
        rows={4}
        maxLength={200}
        placeholderTextColor="grey"
        style={styles.textBox}
        value={direction}
        onChangeText={(text) => setDirection(text)}
      />
      <View style={{ alignItems: "center" }}>
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
          onPress={() => addDirection(direction)}
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
          onPress={clear}
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
    marginBottom: 20,
  },
  textBox: {
    color: "black",
    fontSize: 17,
    borderWidth: 1,
    backgroundColor: "white",
    //backgroundColor: "#D9D9D9",
    borderRadius: 7,
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginBottom: 20,
    height: 75,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default DirectionModal;
