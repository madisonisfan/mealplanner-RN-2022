import { View, Text } from "react-native";
import { useSelector } from "react-redux";

const Profile = () => {
  const users = useSelector((state) => state.users.usersArray);

  return (
    <View>
      <Text>Profile</Text>
      <Text>{users[0].name}</Text>
    </View>
  );
};

export default Profile;
