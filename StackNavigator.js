import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import MegaProjects from "./components/MegaProjects";
import UpdateProfile from "./components/UpdateProfile";
import NotificationScreen from "./screens/NotificationScreen";

const Stack = createStackNavigator();

const navOptionHandler = () => ({
  headerShown: false,
});

export const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={navOptionHandler}
      />
      <Stack.Screen
        name="MegaProjects"
        component={MegaProjects}
        options={navOptionHandler}
      />
    </Stack.Navigator>
  );
};

export const SettingStack = () => {
  return (
    <Stack.Navigator initialRouteName="SettingsScreen">
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={navOptionHandler}
      />
      <Stack.Screen
        name="UpdateProfile"
        component={UpdateProfile}
        options={navOptionHandler}
      />
    </Stack.Navigator>
  );
};
