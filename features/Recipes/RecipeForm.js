import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  FlatList,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { ListItem } from "@rneui/themed";
import Constants from "expo-constants";
import { addRecipe } from "./recipesSlice";
import { useDispatch } from "react-redux";
import { Input } from "@rneui/themed";
import { Button } from "@rneui/themed";

const RecipeForm = ({ toggle }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [cooktime, setCooktime] = useState(null);
  const [preptime, setPreptime] = useState(null);
  //const [totaltime, setTotaltime] = useState(null);
  const [servings, setServings] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [currentIngredient, setCI] = useState("");

  const [directions, setDirections] = useState([]);
  const [currentDirection, setCD] = useState("");
  const dispatch = useDispatch();

  const handleRecipeSubmit = () => {
    console.log(`handle submit`);

    const newRecipe = {
      name,
      description,
      cooktime,
      preptime,
      servings,
      ingredients,
      directions,
    };

    dispatch(addRecipe(newRecipe));
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setDescription("");
    setCooktime(null);
    setPreptime(null);
    setServings(null);
    setIngredients([]);
    setDirections([]);
  };

  return (
    <ScrollView style={styles.mainView}>
      <Text style={styles.title}>Add Recipe</Text>

      <TextInput
        // containerStyle={styles.inputContainer}
        placeholderTextColor="grey"
        style={styles.input}
        placeholder="Recipe Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        placeholder="Description"
        placeholderTextColor="grey"
        style={styles.input}
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <TextInput
        placeholder="Preptime"
        placeholderTextColor="grey"
        style={styles.input}
        value={preptime}
        onChangeText={(text) => setPreptime(text)}
      />
      <TextInput
        placeholder="Cooktime"
        placeholderTextColor="grey"
        style={styles.input}
        value={cooktime}
        onChangeText={(text) => setCooktime(text)}
      />
      <TextInput
        placeholder="Servings"
        value={servings}
        placeholderTextColor="grey"
        style={styles.input}
        onChangeText={(text) => setServings(text)}
      />

      <Text style={styles.formTitle}>Ingredients</Text>
      <View style={styles.inputView}>
        {ingredients.map((i, index) => {
          return (
            <ListItem key={index} containerStyle={{ padding: 0 }}>
              <ListItem.Content style={{ paddingTop: 5 }}>
                <ListItem.Title style={{ fontSize: 20 }}>- {i}</ListItem.Title>
              </ListItem.Content>
            </ListItem>
          );
        })}
        <View style={styles.largeInputContainer}>
          <TextInput
            style={styles.largeInput}
            //containerStyle={{ width: "80%" }}
            placeholder="Add Ingredient"
            placeholderTextColor="grey"
            value={currentIngredient}
            onChangeText={(text) => setCI(text)}
          />
          <Button
            title="+"
            titleStyle={{ color: "black" }}
            type="clear"
            //color="black"
            onPress={() => {
              setIngredients([...ingredients, currentIngredient]);
              setCI("");
            }}
          />
        </View>
      </View>

      <Text style={styles.formTitle}>Directions</Text>
      <View style={styles.inputView}>
        {directions.map((d, index) => {
          return (
            <ListItem key={index} containerStyle={{ padding: 0 }}>
              <ListItem.Content style={{ paddingTop: 5 }}>
                <ListItem.Title style={{ fontSize: 20 }}>
                  {index + 1}. {d}
                </ListItem.Title>
              </ListItem.Content>
            </ListItem>
          );
        })}

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TextInput
            style={styles.largeInput}
            //containerStyle={{ width: "80%" }}
            placeholder="Add Direction"
            placeholderTextColor="grey"
            value={currentDirection}
            onChangeText={(text) => setCD(text)}
          />
          <Button
            title="+"
            titleStyle={{ color: "black" }}
            type="clear"
            onPress={() => {
              setDirections([...directions, currentDirection]);
              setCD("");
            }}
          />
        </View>
      </View>

      <Button
        title="Submit"
        style={styles.bottomButton}
        titleStyle={{ color: "black", fontWeight: "500" }}
        buttonStyle={{ backgroundColor: "white", border: "black" }}
        onPress={() => {
          handleRecipeSubmit();
          toggle(false);
        }}
      />

      <Button
        title="Cancel"
        style={styles.bottomButton}
        buttonStyle={{ backgroundColor: "red" }}
        onPress={() => {
          resetForm();
          toggle(false);
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 10,
    backgroundColor: "#D9D9D9",
    //paddingTop: 50,
    //paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
  },
  bottomButton: {
    marginHorizontal: 30,
    marginTop: 10,
  },
  formTitle: {
    fontSize: 20,
    //paddingLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    color: "black",
  },
  inputView: {
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 7,
    borderColor: "white",
    paddingLeft: 5,
    fontSize: 20,
  },
  input: {
    color: "black",
    fontSize: 20,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "white",
    borderRadius: 7,
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginBottom: 10,
  },
  largeInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    //color: "black",
    fontSize: 20,
  },
  largeInput: {
    fontSize: 20,
  },

  title: {
    fontSize: 25,
    textAlign: "left",
    fontWeight: "600",
    paddingBottom: 20,
  },
});

export default RecipeForm;

/*

   /*
      <TextInput
        style={styles.textbox}
        multiline
        numberOfLines={10}
        placeholder="Directions"
        value={directions}
        onChangeText={(text) => setDirections(text)}
      />

<TextInput
        multiline
        maxLength={150}
        numberOfLines={20}
        style={styles.textbox}
        placeholder="Ingredients"
        value={ingredients}
        onChangeText={(text) => setIngredients(text)}
      />


      */
