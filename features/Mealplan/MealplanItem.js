import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";
import { Card, Button } from "react-native-elements";
import { useState } from "react";
import { Icon } from "@rneui/themed";

import MealplanOptionsModal from "./MealplanOptionsModal";

const MealplanItem = ({ recipe, navigate, mealplanId, mealType }) => {
  const [isOptionsOpen, toggleOptions] = useState(false);
  const [isCompleted, toggleIsCompleted] = useState(false);

  if (recipe) {
    return (
      <>
        <TouchableOpacity onPress={() => navigate("RecipeDetails", { recipe })}>
          <Card containerStyle={styles.card}>
            <View style={styles.cardView}>
              <View style={styles.imageView}>
                <Card.Image source={recipe.image} style={styles.image} />
              </View>

              <View style={styles.contentView}>
                <View style={styles.textView}>
                  <Text style={styles.recipeName}>{recipe.name}</Text>
                </View>

                <View style={styles.iconView}>
                  <Icon name="pencil" type="font-awesome" />
                  <Icon
                    color="grey"
                    name={isCompleted ? "check-circle" : "check-circle-o"}
                    type="font-awesome"
                    size={30}
                    onPress={() => toggleIsCompleted(!isCompleted)}
                  />
                </View>
              </View>
            </View>
          </Card>
        </TouchableOpacity>
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
    borderRadius: 7,
    borderWidth: 0,
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
  image: {
    borderBottomLeftRadius: 7,
    borderTopLeftRadius: 7,
  },
  contentView: {
    flex: 2,
    padding: 10,
  },
  textView: { justifyContent: "center", flexGrow: 1 },
  recipeName: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "500",
  },

  iconView: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
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
