import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button, Text } from "react-native";
import { AppParamList } from "../components/AppParams";
import Center from "./Center";
import { AuthContext } from "./AuthProvider";
import { AntDesign } from '@expo/vector-icons';
import HomeStack from "./HomeStack";
import SearchStack from "./SearchStack";

interface AppTabsProps {}

// see writing the navigator and the list as an template
const Tabs = createBottomTabNavigator<AppParamList>();

const AppTabs: React.FC<AppTabsProps> = ({}) => {
  return (
    // !since the navigation container is outside, so you dont need it here
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = 'home'
          } else if (route.name === "Search") {
            iconName = 'search1'
          }

          // You can return any component that you like here!
          return <AntDesign name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen name="Home" component={HomeStack} />
      <Tabs.Screen name="Search" component={SearchStack} />
    </Tabs.Navigator>
  );
};

export default AppTabs;


