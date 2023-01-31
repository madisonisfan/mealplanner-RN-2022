import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import { useState } from "react";
import { Icon, Card } from "@rneui/themed";

import MealplanOptionsModal from "./MealplanOptionsModal";

const MealplanItem = ({ recipe, navigation, mealplanId, mealType }) => {
  const [isOptionsOpen, toggleOptions] = useState(false);
  const [isCompleted, toggleIsCompleted] = useState(false);

  if (recipe) {
    return (
      <>
        <TouchableOpacity
          onPress={() => navigation.navigate("RecipeDetails", { recipe })}
        >
          <Card
            containerStyle={styles.cardContainer}
            wrapperStyle={styles.cardInner}
          >
            <Card.Image source={recipe.image} style={styles.image} />

            <View style={styles.contentView}>
              <Text style={styles.recipeName}>{recipe.name}</Text>

              <View style={styles.iconView}>
                <Icon
                  name="pencil"
                  type="font-awesome"
                  onPress={() => navigation.navigate("MealplanOptionsModal")}
                />
                <Icon
                  color="grey"
                  name={isCompleted ? "check-circle" : "check-circle-o"}
                  type="font-awesome"
                  size={30}
                  onPress={() => toggleIsCompleted(!isCompleted)}
                />
              </View>
            </View>
          </Card>
        </TouchableOpacity>
      </>
    );
  }

  return (
    <>
      <View>
        <Card>
          <View style={styles.noRecipeView}>
            <Text
              style={{
                fontSize: 17,
              }}
            >
              No Recipe Selected
            </Text>
            <Button
              type="clear"
              buttonStyle={{ padding: 0 }}
              icon={<Icon name="plus" color="grey" type="font-awesome" />}
              //onPress={() => toggleOptions(true)}
              onPress={() => navigation.navigate("MealplanOptionsModal")}
            />
          </View>
        </Card>
      </View>
    </>
  );
};

/*

<Modal visible={isOptionsOpen}>
        <MealplanOptionsModal
          toggleModal={toggleOptions}
          mealplanId={mealplanId}
          mealType={mealType}
        />
      </Modal>
        <Modal visible={isOptionsOpen}>
          <MealplanOptionsModal
            toggleModal={toggleOptions}
            mealplanId={mealplanId}
            mealType={mealType}
          />
        </Modal>*/

const styles = StyleSheet.create({
  cardContainer: {
    padding: 0,
    height: 100,
    borderRadius: 7,
    borderWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  cardInner: {
    flexDirection: "row",
  },

  cardView: {
    // height: 100,
  },
  imageView: {
    //flex: 1,
    // backgroundColor: "grey",
  },
  image: {
    // borderBottomLeftRadius: 7,
    //borderTopLeftRadius: 7,
    borderRadius: 7,
    width: 150,
    height: 100,
    //width: 150,
  },
  contentView: {
    //flex: 2,
    //padding: 10,
    justifyContent: "space-between",
    paddingHorizontal: 5,
    paddingVertical: 5,
    flexGrow: 1,
  },
  // textView: { justifyContent: "center", flexGrow: 1 },
  recipeName: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "500",
  },

  iconView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  noRecipeView: {
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
