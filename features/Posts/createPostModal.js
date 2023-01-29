import { View, Text, StyleSheet, TextInput } from "react-native";
import { Button } from "@rneui/themed";
import Constants from "expo-constants";
import { useState } from "react";
import { addPost } from "./postSlice";

const CreatePostModal = ({ toggleModal }) => {
  const [postType, setPostType] = useState("");
  const [postContent, setPostContent] = useState("");

  const submitPost = () => {
    console.log(`submit post`);
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.headerView}>
        <Button
          title="Cancel"
          onPress={() => toggleModal(false)}
          buttonStyle={{ backgroundColor: "#1f1e1e" }}
        />
        <Button
          title="Post"
          onPress={() => {
            toggleModal(false);
            submitPost();
          }}
          titleStyle={{ color: "white" }}
          buttonStyle={{
            borderRadius: 10,
            backgroundColor: "black",
          }}
        />
      </View>

      <View style={{ width: "100%" }}>
        <TextInput
          style={styles.content}
          multiline
          onChangeText={setPostContent}
          value={postContent}
          placeholder="post..."
          placeholderTextColor={"grey"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#1f1e1e",
  },
  headerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  content: {
    backgroundColor: "#1f1e1e",
    borderWidth: 1,
    borderTopColor: "grey",
    color: "white",
    height: "100%",
    padding: 10,
    fontSize: 20,
  },
});

export default CreatePostModal;
