import * as React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import { SafeAreaView, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import NotificationScreen from "./screens/NotificationScreen";
import DrawerNavigator from "./DrawerNavigator";

const Drawer = createDrawerNavigator();

const navOptionHandler = () => ({
  headerShown: false,
});

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Newsfeed"
          drawerContent={() => <DrawerNavigator />}
        >
          <Drawer.Screen
            name="Newsfeed"
            component={TabNavigator}
            options={navOptionHandler}
          />
          <Drawer.Screen
            name="Notification"
            component={NotificationScreen}
            options={navOptionHandler}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#008053",
  },
  shadowOffset: {
    width: 0,
    height: 10,
  },
  shadowOpacity: 0.5,
  shadowRadius: 3.5,
  elevation: 5,
});
