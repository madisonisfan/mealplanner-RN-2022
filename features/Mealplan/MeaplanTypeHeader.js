import { View, Text } from "react-native";
import { Icon } from "@rneui/themed";

const MealplanTypeHeader = ({ navigation, mealType, mealplanId }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginHorizontal: 11,
        marginTop: 10,
        justifyContent: "space-between",
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "500",
          paddingRight: 10,
          paddingBottom: 10,
        }}
      >
        {mealType}
      </Text>
      <Icon
        name="plus"
        color="black"
        type="font-awesome"
        onPress={() =>
          navigation.navigate("MealplanOptionsModal", {
            mealplanId,
            mealType,
            navigation,
          })
        }
      />
    </View>
  );
};

export default MealplanTypeHeader;
