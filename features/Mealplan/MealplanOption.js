import { TouchableOpacity, StyleSheet } from "react-native";
import { Card } from "@rneui/themed";

const RenderMealplanOption = ({ recipe }) => {
  console.log(`RENDER MEALPLAN OPTOIN`, recipe);
  return (
    <>
      <TouchableOpacity
        // onPress={() => navigate("RecipeDetails", { recipe })}
        style={styles.parentContainer}
        //onPress={() => toggleDetails(true)}
        key={recipe.id}
      >
        <Card containerStyle={styles.card}>
          <Card.Image source={recipe.image} style={styles.image} />
          <Card.Title style={styles.name}>{recipe.name}</Card.Title>
        </Card>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    width: "50%",
    padding: 10,
    //borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },

  card: {
    margin: 1,
    padding: 0,
    borderWidth: 0,
    borderRadius: 7,
  },
  image: {
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
  iconFilled: {
    padding: 0,
    color: "#04A804",
  },
  iconEmpty: {
    padding: 0,
    color: "#02B102",
  },

  textView: {
    flex: 1,

    //justifyContent: "center",
  },
  name: {
    //flex: 1,
    marginTop: "auto",
    marginBottom: "auto",
    paddingVertical: 10,
    // paddingVertical: 8,
  },
});
export default RenderMealplanOption;
