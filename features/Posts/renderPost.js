import { View, Text, StyleSheet } from "react-native";
import { Avatar, Button, Icon, Image } from "@rneui/themed";

import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const RenderPost = ({ post }) => {
  const {
    id,
    author,
    date,
    postType,
    postContent,
    avatar_url,
    images,
    likes,
    comments,
  } = post;

  const submitComment = () => {
    console.log(`submit comment`);
  };

  const submitLike = () => {
    console.log(`submit comment`);
  };

  console.log(`images`, images[0]);

  return (
    <View style={styles.mainView}>
      <View style={{ flexDirection: "row", paddingHorizontal: 10 }}>
        <View style={{ justifyContent: "center" }}>
          <Avatar
            size={"small"}
            source={{
              uri: avatar_url,
            }}
            rounded
            // title="P"
            //containerStyle={{ backgroundColor: "#BDBDBD" }}
          />
        </View>
        <View style={styles.textView}>
          <View style={styles.headerView}>
            <Text style={styles.name}>{author}</Text>
            {postType === "question" && (
              <Text style={styles.postType}>Question</Text>
            )}
          </View>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
      <View style={styles.postContent}>
        <Text style={styles.postText}>{postContent}</Text>
      </View>

      {images.length !== 0 && (
        <Image
          resizeMode="cover"
          containerStyle={{
            aspectRatio: 1.7,
            // width: "100%",
            // padding: 0,
          }}
          style={{}}
          // containerStyle={{}}
          source={{
            uri: images[0],
          }}
          //source={require("../../assets/images/food/pasta.jpg")}
        />
      )}

      <View style={styles.bottomButtonView}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Button
            type="clear"
            // title="Like"
            buttonStyle={styles.bottomButton}
            titleStyle={{ color: "#545151", fontSize: 15, fontWeight: "500" }}
            onPress={() => submitLike()}
          >
            <Icon
              name="thumbs-o-up"
              type="font-awesome"
              color="#545151"
              iconStyle={{ paddingRight: 5 }}
              size={20}
            />
            Like
          </Button>
          <Text
            style={{
              color: "#545151",
              fontSize: 15,
              fontWeight: "500",
            }}
          >
            {likes}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Button
            type="clear"
            title="Comment"
            titleStyle={{ color: "#545151", fontSize: 15, fontWeight: "500" }}
            buttonStyle={styles.bottomButton}
            onPress={() => submitComment()}
          >
            <Icon
              name="comment-o"
              type="font-awesome"
              color="#545151"
              size={20}
              iconStyle={{ paddingRight: 7 }}
            />
            Comment
          </Button>
          <Text
            style={{
              color: "#545151",
              fontSize: 15,
              fontWeight: "500",
            }}
          >
            {" "}
            {comments.length}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    width: "100%",
    backgroundColor: "white",
    // marginBottom: 10,
    // flexDirection: "row",
    // paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: "#c5c6c7",
    borderBottomWidth: "5px",

    //paddingBottom: 0,
  },
  textView: {
    paddingLeft: 10,
  },
  name: {
    fontSize: 16,
    paddingRight: 10,
    fontWeight: "500",
  },
  headerView: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  postContent: {
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  postText: {
    fontSize: 16,
  },
  date: {
    color: "grey",
    paddingTop: 2,
    fontSize: 14,
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
    paddingTop: 10,
  },
  bottomButton: {
    backgroundColor: "white",
    padding: 0,
  },
});

export default RenderPost;
