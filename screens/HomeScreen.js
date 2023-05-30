import React from "react";
import { Button, View, Text } from "native-base";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <Header headerTitle={"Home"} mainScreen={true} />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#e5e7ebd1",
        }}
      >
        <Text>Home Screen!</Text>
        <Button onPress={() => navigation.navigate("MegaProjects")}>
          MegaProjects
        </Button>
      </View>
    </>
  );
};

export default HomeScreen;
