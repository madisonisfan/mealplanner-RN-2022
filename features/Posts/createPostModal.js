import { View, Text } from "react-native";
import { Button } from "@rneui/themed";

const CreatePostModal = ({ toggleModal }) => {
  return (
    <View>
      <Text>Create Post</Text>
      <Button title="close" onPress={() => toggleModal(false)} />
    </View>
  );
};

export default CreatePostModal;
