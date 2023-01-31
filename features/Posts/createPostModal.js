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
      <TextInput
        style={styles.content}
        multiline
        onChangeText={setPostContent}
        value={postContent}
        placeholder="post..."
        placeholderTextColor={"grey"}
      />
    </View>
  );
};

/* KEEP

the header is currently being madde in the main component, in the Stack.Screen. 
But not sure if i can have the post button by doing so, so may have to come back to this

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

*/

const styles = StyleSheet.create({
  mainView: {
    //paddingTop: Constants.statusBarHeight,
    //backgroundColor: "#1f1e1e",
  },
  /*
  headerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingHorizontal: 10,
  },*/
  content: {
    //backgroundColor: "#1f1e1e",
    // borderWidth: 1,
    //borderTopColor: "grey",
    //color: "white",
    //height: "100%",
    padding: 10,
    fontSize: 20,
  },
});

export default CreatePostModal;
