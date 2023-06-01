import { View, Text } from "react-native";
import React from "react";

const FeedDetails = ({ route }) => {
  const data = route.params?.post;

  console.log(data);
  return (
    <View>
      <Text>FeedDetails</Text>
    </View>
  );
};

export default FeedDetails;
