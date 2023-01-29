import { View, Text, StyleSheet } from "react-native";
import { Avatar, Button, Icon } from "@rneui/themed";
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";

const RenderPost = ({ post }) => {
  const { id, author, date, postType, postContent } = post;

  const submitComment = () => {
    console.log(`submit comment`);
  };

  const submitLike = () => {
    console.log(`submit comment`);
  };

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
          titleStyle={{ color: "grey", fontSize: 15 }}
          onPress={() => submitLike()}
        >
          <Icon
            name="thumbs-o-up"
            type="font-awesome"
            color="grey"
            iconStyle={{ paddingRight: 5 }}
            size={20}
          />
          Like
        </Button>
        <Button
          type="clear"
          title="Comment"
          titleStyle={{ color: "grey", fontSize: 15 }}
          buttonStyle={styles.bottomButton}
          onPress={() => submitComment()}
        >
          <Icon
            name="comment-o"
            type="font-awesome"
            color="grey"
            size={20}
            iconStyle={{ paddingRight: 7 }}
          />
          Comment
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
    paddingHorizontal: 5,
    paddingTop: 10,
    //paddingBottom: 0,
  },
  textView: {
    paddingLeft: 10,
  },
  name: {
    fontSize: 17,
    paddingRight: 10,
    fontWeight: "500",
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
    borderTopColor: "rgb(207, 207, 207)",
    borderTopWidth: 1,
    paddingVertical: 4,
  },
  bottomButton: {
    backgroundColor: "white",
    padding: 0,
  },
});

export default RenderPost;
