import { View, Text, FlatList, Modal } from "react-native";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "../features/Posts/postSlice";
import RenderPost from "../features/Posts/renderPost";
import CreatePostModal from "../features/Posts/createPostModal";
import { Icon } from "@rneui/themed";

const Blog = ({ navigation }) => {
  const posts = useSelector(selectAllPosts);
  //const posts = useSelector((state) => selectAllPosts(state));
  const [isCreateModalOpen, toggleCreateModal] = useState(false);

  const renderPost = ({ item: post }) => {
    return <RenderPost post={post} />;
  };

  return (
    <>
      <View style={{ height: "100%" }}>
        <FlatList
          data={posts}
          renderItem={renderPost}
          keyExtractor={(item) => item.id}
        />
        <View>
          <Icon
            raised
            reverse
            name="plus"
            type="font-awesome"
            color="white"
            iconStyle={{ color: "black" }}
            containerStyle={{
              position: "absolute",
              right: 10,
              bottom: 3,
              alignSelf: "flex-end",
            }}
            onPress={() => {
              console.log(`pressed`);
              toggleCreateModal(true);
            }}
          />
        </View>
      </View>
      <Modal visible={isCreateModalOpen}>
        <CreatePostModal toggleModal={toggleCreateModal} />
      </Modal>
    </>
  );
};

export default Blog;
