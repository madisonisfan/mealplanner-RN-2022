import { View, Text, TextInput } from "react-native";
import { useState } from "react";
import { Input } from "react-native-elements";

const RecipeForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [cooktime, setCooktime] = useState(null);
  const [preptime, setPreptime] = useState(null);
  //const [totaltime, setTotaltime] = useState(null);
  const [servings, setServings] = useState(null);
  const [ingredients, setIngredients] = useState("");
  const [directions, setDirections] = useState("");

  const handleSubmittingRecipe = () => {};

  return (
    <View>
      <Input
        label="Recipe Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Input
        label="Description"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <Input
        label="Preptime"
        value={preptime}
        onChangeText={(text) => setPreptime(text)}
      />
      <Input
        label="Cooktime"
        value={cooktime}
        onChangeText={(text) => setCooktime(text)}
      />
      <Input
        label="Servings"
        value={servings}
        onChangeText={(text) => setServings(text)}
      />
      <TextInput
        multiline
        numberOfLines={10}
        label="Ingredients"
        value={ingredients}
        onChangeText={(text) => setIngredients(text)}
      />
      <TextInput
        multiline
        numberOfLines={10}
        label="Directions"
        value={directions}
        onChangeText={(text) => setDirectionss(text)}
      />
    </View>
  );
};

export default RecipeForm;
