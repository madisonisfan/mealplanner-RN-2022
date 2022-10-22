import { View, Text, StyleSheet } from "react-native";
import { Avatar } from "@rneui/themed";
import { Icon } from "@rneui/themed";

const RenderPost = ({ post }) => {
  const { id, author, date, postType, postContent } = post;

  return (
    <View style={styles.mainView}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ justifyContent: "center" }}>
          <Avatar
            size={"medium"}
            rounded
            title="P"
            containerStyle={{ backgroundColor: "#BDBDBD" }}
          />
        </View>
        <View style={styles.textView}>
          <View style={styles.headerView}>
            <Text style={styles.name}>{author}</Text>
            <Text>{postType}</Text>
          </View>
          <Text>{date}</Text>
        </View>
      </View>
      <View style={styles.postConent}>
        <Text>{postContent}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    width: "100%",
    backgroundColor: "white",
    marginBottom: 10,
    // flexDirection: "row",
    padding: 5,
  },
  textView: {
    paddingLeft: 10,
  },
  name: {
    fontSize: 20,
    paddingRight: 10,
  },
  headerView: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  postConent: {
    marginTop: 10,
  },
});

export default RenderPost;
