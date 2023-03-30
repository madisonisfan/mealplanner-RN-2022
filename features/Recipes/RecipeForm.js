import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  FlatList,
  ScrollView,
} from "react-native";
import { useState, useCallback, useMemo, useRef } from "react";
import Constants from "expo-constants";
import { addRecipe } from "./recipesSlice";
import { useDispatch } from "react-redux";
import { Input, Button, Icon, ListItem } from "@rneui/themed";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import IngredientModal from "./RecipeIngredientModal";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import DirectionModal from "./RecipeDirectionModal";
import IngredientsSectionForm from "./IngredientsSectionForm";
import DirectionsSectionForm from "./DirectionsSectionForm";

const RecipeForm = ({ navigation }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [cooktime, setCooktime] = useState(null);
  const [preptime, setPreptime] = useState(null);
  const [servings, setServings] = useState(null);
  const [calories, setCalories] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [directions, setDirections] = useState([]);

  const dispatch = useDispatch();

  // INGRREDIENTS: bottom sheet modal
  //const bottomSheetModalRef = useRef < BottomSheetModal > null;
  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ["25%", "50%"], []);
  const handlePresentIngredientModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  // DIRECTIONS: bottom sheet modal
  const bottomSheetModalRefDirections = useRef(null);
  const snapPointsDirections = useMemo(() => ["25%", "50%"], []);
  const handlePresentDirectionsModalPress = useCallback(() => {
    bottomSheetModalRefDirections.current?.present();
  }, []);
  const handleSheetChangesDirections = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const closeDirectionModal = () => {
    bottomSheetModalRefDirections.current?.close();
  };

  const closeIngredientModal = () => {
    bottomSheetModalRef.current?.close();
  };

  const addIngredient = (ingredient) => {
    console.log("adding ingredient ");
    setIngredients([...ingredients, ingredient]);
    bottomSheetModalRef.current.close();
  };

  const addDirection = (direction) => {
    setDirections([...directions, direction]);
    bottomSheetModalRefDirections.current.close();
  };

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
    <>
      <BottomSheetModalProvider>
        <ScrollView
          style={styles.mainView}
          contentContainerStyle={styles.inputContainerView}
        >
          <Text style={styles.inputLabel}>Recipe Name</Text>
          <TextInput
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
          <Text style={styles.inputLabel}>Calories</Text>
          <TextInput
            placeholder="calories per serving"
            value={calories}
            placeholderTextColor="grey"
            keyboardType="numeric"
            style={styles.input}
            onChangeText={(text) => setCalories(text)}
          />

          <IngredientsSectionForm
            ingredients={ingredients}
            closeDirectionModal={closeDirectionModal}
            handlePresentIngredientModalPress={
              handlePresentIngredientModalPress
            }
          />
          <DirectionsSectionForm
            directions={directions}
            closeIngredientModal={closeIngredientModal}
            handlePresentDirectionsModalPress={
              handlePresentDirectionsModalPress
            }
          />

          <Button
            title="Submit"
            radius={9}
            titleStyle={{ color: "black", fontWeight: "500" }}
            buttonStyle={styles.submitButton}
            onPress={() => {
              handleRecipeSubmit();
              navigation.navigate("MainRecipes");
              //toggle(false);
            }}
          />
        </ScrollView>

        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          backgroundStyle={
            {
              //backgroundColor: "#f0f0f0",
            }
          }
        >
          <IngredientModal addIngredient={addIngredient} />
        </BottomSheetModal>
        <BottomSheetModal
          ref={bottomSheetModalRefDirections}
          index={1}
          snapPoints={snapPointsDirections}
          onChange={handleSheetChangesDirections}
          backgroundStyle={
            {
              //backgroundColor: "#f0f0f0",
            }
          }
        >
          <DirectionModal addDirection={addDirection} />
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </>
  );
};

const styles = StyleSheet.create({
  mainView: {
    //surrounds everything
    flex: 1,
    // paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
  },
  inputContainerView: {
    //inside mainView, includes everything except submit button??
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  submitButton: {
    backgroundColor: "white",
    borderWidth: "1px",
    borderColor: "black",
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
  },

  input: {
    //applied to all small textInputs
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

  //INGREDIENTS & DIRECTIONS
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
  largeInputContainer: {
    //surrounds the input section of the large inputs
    flexDirection: "row",
    //justifyContent: "space-between",
  },
  largeInput: {
    fontSize: 17,
  },
  ingredientItem: {
    fontSize: 17,
    paddingHorizontal: 3,
  },
  directionItem: {
    fontSize: 17,
    paddingLeft: 3,
  },
  directionNum: {
    fontSize: 17,
    width: 20,
  },
  directionItemView: {
    //flexDirection: "row",
  },
  itemView: {},
  addButtonStyle: {
    borderColor: "black",
    paddingVertical: 3,
    backgroundColor: "white",
  },
  addButtonTitleStyle: { color: "black", fontSize: 17 },
  headerView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
  },
});

export default RecipeForm;

/*
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
                onPress={handlePresentModalPress}
              />

              {
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
              }
            </View>

*/

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

/*

 <View style={styles.headerView}>
            <Text style={styles.inputLabel}>Directions</Text>

            <Button
              type="outline"
              onPress={() => {
                bottomSheetModalRef.current?.close();
                handlePresentModalPressDirections();
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
      */
