import { View, Text, StyleSheet } from "react-native";
import { Avatar, Button, Icon } from "@rneui/themed";
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";

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
            <Text style={styles.postType}>{postType}</Text>
          </View>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
      <View style={styles.postConent}>
        <Text>{postContent}</Text>
      </View>
      <View style={styles.bottomButtonView}>
        <Button
          type="clear"
          // title="Like"
          buttonStyle={styles.bottomButton}
          titleStyle={{ color: "grey" }}
        >
          Like
          <Icon
            name="thumbs-o-up"
            type="font-awesome"
            color="grey"
            iconStyle={{ paddingLeft: 5 }}
          />
        </Button>
        <Button
          type="clear"
          title="Comment"
          titleStyle={{ color: "grey" }}
          buttonStyle={styles.bottomButton}
        >
          Comment
          <Icon
            name="comment-o"
            type="font-awesome"
            color="grey"
            iconStyle={{ paddingLeft: 5 }}
          />
        </Button>
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
  date: {
    color: "grey",
    paddingTop: 2,
    fontSize: 15,
  },
  postType: {
    color: "grey",
    fontSize: 15,
  },
  bottomButtonView: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    //paddingTop: 10,
    marginTop: 5,
    borderTopColor: "grey",
    borderTopWidth: 1,
    paddingVertical: 2,
  },
  bottomButton: {
    backgroundColor: "white",
    padding: 0,
  },
});

export default RenderPost;
