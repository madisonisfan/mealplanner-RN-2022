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
import { Input, Button } from "react-native-elements";
import { ListItem } from "@rneui/themed";
import Constants from "expo-constants";
import { addRecipe } from "./recipesSlice";
import { useDispatch } from "react-redux";

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

      <View style={styles.inputView}>
        <Input
          style={styles.input}
          placeholder="Recipe Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Description"
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
        <Input
          placeholder="Preptime"
          value={preptime}
          onChangeText={(text) => setPreptime(text)}
        />
        <Input
          placeholder="Cooktime"
          value={cooktime}
          onChangeText={(text) => setCooktime(text)}
        />
        <Input
          placeholder="Servings"
          value={servings}
          onChangeText={(text) => setServings(text)}
        />
      </View>

      <Text style={styles.formTitle}>Ingredients</Text>
      <View style={styles.inputView}>
        {ingredients.map((i, index) => {
          return (
            <ListItem key={index} containerStyle={{ padding: 0 }}>
              <ListItem.Content style={{ paddingTop: 5 }}>
                <ListItem.Title>- {i}</ListItem.Title>
              </ListItem.Content>
            </ListItem>
          );
        })}
        <View style={{ flexDirection: "row" }}>
          <Input
            containerStyle={{ width: "80%" }}
            placeholder="Add Ingredient"
            value={currentIngredient}
            onChangeText={(text) => setCI(text)}
          />
          <Button
            title="Add"
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
                <ListItem.Title>
                  {index + 1}. {d}
                </ListItem.Title>
              </ListItem.Content>
            </ListItem>
          );
        })}

        <View style={{ flexDirection: "row" }}>
          <Input
            containerStyle={{ width: "80%" }}
            placeholder="Add Direction"
            value={currentDirection}
            onChangeText={(text) => setCD(text)}
          />
          <Button
            title="Add"
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
  bottomButton: {
    marginHorizontal: 30,
    marginTop: 10,
  },
  formTitle: {
    fontSize: 18,
    paddingLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    color: "white",
  },
  inputView: {
    backgroundColor: "white",
    paddingTop: 10,
    paddingLeft: 0,
  },
  input: {
    paddingLeft: 0,
  },

  title: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "600",
    paddingBottom: 20,
  },
  textbox: {
    //height: 30,
    //borderColor: "black",
    // borderWidth: 1,
  },
  mainView: {
    flex: 1,

    paddingTop: Constants.statusBarHeight,
    backgroundColor: "grey",
    //paddingTop: 50,
    //paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
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
