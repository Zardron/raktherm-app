import { HomeStack, SettingStack } from "./StackNavigator";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#fff",
          borderRadius: 15,
          height: 90,
        },
        tabBarLabelStyle: {
          fontSize: 14,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => {
            let icon;

            {
              icon = focused ? (
                <Ionicons name="home" size={24} color="black" />
              ) : (
                <Ionicons name="home-outline" size={24} color="black" />
              );
            }

            // You can return any component that you like here!
            return icon;
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingStack}
        options={{
          tabBarIcon: ({ focused }) => {
            let icon;

            {
              icon = focused ? (
                <FontAwesome name="gear" size={24} color="black" />
              ) : (
                <EvilIcons name="gear" size={24} color="black" />
              );
            }

            // You can return any component that you like here!
            return icon;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
