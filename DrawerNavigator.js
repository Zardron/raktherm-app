import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const DrawerNavigator = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{}}>
      <TouchableOpacity>
        <Text onPress={() => navigation.navigate("Home")}>Home Screen!</Text>
        <Text onPress={() => navigation.navigate("Notification")}>
          Notification
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default DrawerNavigator;
