import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";
import { Card, Button } from "react-native-elements";
import { useState } from "react";
import MealplanOptionsModal from "./MealplanOptionsModal";

const MealplanItem = ({ recipe, navigate, mealplanId, mealType }) => {
  const [isOptionsOpen, toggleOptions] = useState(false);

  if (recipe) {
    return (
      <>
        <Card containerStyle={styles.card}>
          <TouchableOpacity
            onPress={() => navigate("RecipeDetails", { recipe })}
          >
            <View style={styles.cardView}>
              <View style={styles.imageView}>
                <Card.Image source={recipe.image} />
              </View>
              <View style={styles.textView}>
                <Text style={styles.recipeName}>{recipe.name}</Text>
                <Button
                  title="Edit"
                  onPress={() => {
                    toggleOptions(true);
                  }}
                />
              </View>
            </View>
          </TouchableOpacity>
        </Card>
        <Modal visible={isOptionsOpen}>
          <MealplanOptionsModal
            toggleModal={toggleOptions}
            mealplanId={mealplanId}
            mealType={mealType}
          />
        </Modal>
      </>
    );
  }

  return (
    <>
      <View>
        <Card>
          <View style={styles.noRecipeView}>
            <Text>No Recipe Selected</Text>
            <Button
              title="+"
              type="clear"
              buttonStyle={{ padding: 0 }}
              onPress={() => toggleOptions(true)}
            />
          </View>
        </Card>
      </View>
      <Modal visible={isOptionsOpen}>
        <MealplanOptionsModal
          toggleModal={toggleOptions}
          mealplanId={mealplanId}
          mealType={mealType}
        />
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 0,
  },
  noRecipeView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardView: {
    flexDirection: "row",
  },
  imageView: {
    flex: 3,
    // backgroundColor: "grey",
  },
  textView: {
    justifyContent: "center",
    alignItems: "center",
    flex: 2,
    padding: 10,
  },
  recipeName: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "500",
    flex: 2,
  },
});

export default MealplanItem;

/*


 <Button
                buttonStyle={{ paddingTop: 0, paddingBottom: 0, marginTop: 5 }}
                type="outline"
                title="Details"
                onPress={() => navigate("RecipeDetails", { recipe })}
              />

              */