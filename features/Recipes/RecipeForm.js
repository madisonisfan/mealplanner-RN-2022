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
import Constants from "expo-constants";
import { addRecipe } from "./recipesSlice";
import { useDispatch } from "react-redux";
import { Input, Button, Icon, ListItem } from "@rneui/themed";

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

  //Cant use clear method instead
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
      <View style={styles.inputContainerView}>
        <Text style={styles.inputLabel}>Recipe Name</Text>
        <TextInput
          // containerStyle={styles.inputContainer}
          //autofocus={true}
          placeholderTextColor="grey"
          style={styles.input}
          placeholder="recipe name"
          maxLength={20}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Text style={styles.inputLabel}>Recipe Description</Text>
        <TextInput
          multiline={true}
          numberOfLines={3}
          rows={3}
          maxLength={100}
          placeholder="brief description"
          placeholderTextColor="grey"
          style={styles.descriptionBox}
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
        <Text style={styles.inputLabel}>Preptime</Text>
        <TextInput
          placeholder="preptime in minutes"
          placeholderTextColor="grey"
          keyboardType="numeric"
          style={styles.input}
          value={preptime}
          onChangeText={(text) => setPreptime(text)}
        />

        <Text style={styles.inputLabel}>Cooktime</Text>
        <TextInput
          placeholder="cooktime in minutes"
          placeholderTextColor="grey"
          keyboardType="numeric"
          style={styles.input}
          value={cooktime}
          onChangeText={(text) => setCooktime(text)}
        />
        <Text style={styles.inputLabel}>Servings</Text>
        <TextInput
          placeholder="servings"
          value={servings}
          placeholderTextColor="grey"
          keyboardType="numeric"
          style={styles.input}
          onChangeText={(text) => setServings(text)}
        />
        <Text style={styles.inputLabel}>Ingredients</Text>
        <View style={styles.inputView}>
          {ingredients.map((i, index) => {
            return (
              <ListItem key={index} containerStyle={{ padding: 0 }}>
                <ListItem.Content
                  style={{ paddingTop: 5, justifyContent: "center" }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Icon
                      name="circle"
                      type="font-awesome"
                      size={10}
                      iconStyle={{ paddingRight: 3 }}
                    />
                    <Text style={{ fontSize: 20 }}>{i}</Text>
                  </View>
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
              titleStyle={{
                color: "black",
                fontSize: 20,
                fontWeight: "medium",
              }}
              type="clear"
              //color="black"
              onPress={() => {
                setIngredients([...ingredients, currentIngredient]);
                setCI("");
              }}
            />
          </View>
        </View>
        <Text style={styles.inputLabel}>Directions</Text>
        <View style={styles.inputView}>
          {directions.map((d, index) => {
            return (
              <ListItem key={index} containerStyle={{ padding: 0 }}>
                <ListItem.Content style={{ paddingTop: 5 }}>
                  <ListItem.Title style={{ fontSize: 20 }}>
                    <Icon name="circle" type="font-awesome" /> {index + 1}. {d}
                  </ListItem.Title>
                </ListItem.Content>
              </ListItem>
            );
          })}

          <View style={styles.largeInputContainer}>
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
              titleStyle={{
                color: "black",
                fontSize: 20,
                fontWeight: "medium",
              }}
              containerStyle={{ padding: 0 }}
              type="clear"
              onPress={() => {
                setDirections([...directions, currentDirection]);
                setCD("");
              }}
            />
          </View>
        </View>
      </View>
      <Button
        title="Submit"
        radius={9}
        titleStyle={{ color: "black", fontWeight: "500" }}
        buttonStyle={styles.bottomButton}
        onPress={() => {
          handleRecipeSubmit();
          toggle(false);
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,

    paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
  },
  inputContainerView: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  bottomButton: {
    backgroundColor: "white",
    borderWidth: "1px",
    borderColor: "black",
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
  },

  inputView: {
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 7,
    paddingLeft: 5,
    fontSize: 17,
    marginBottom: 10,
  },
  input: {
    color: "black",
    fontSize: 17,
    borderWidth: 1,
    backgroundColor: "white",
    //backgroundColor: "#D9D9D9",
    borderRadius: 7,
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginBottom: 20,
  },
  descriptionBox: {
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
  },
  inputLabel: {
    fontSize: 17,
    paddingBottom: 3,
    fontWeight: "600",
  },
  largeInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    //backgroundColor: "white",
    fontSize: 17,
  },
  largeInput: {
    fontSize: 17,
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
