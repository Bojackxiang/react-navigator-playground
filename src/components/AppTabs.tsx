import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button, Text } from "react-native";
import { AppParamList } from "../components/AppParams";
import Center from "./Center";
import { AuthContext } from "./AuthProvider";
import { Ionicons } from '@expo/vector-icons';

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
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "ios-list-box" : "ios-list";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Search" component={Search} />
    </Tabs.Navigator>
  );
};

export default AppTabs;

const Home = () => {
  const userContext = React.useContext(AuthContext);
  return (
    <Center>
      <Text>Home</Text>
      <Text>{userContext.user?.username}</Text>
      <Button
        title="logout"
        onPress={() => {
          userContext.logout();
        }}
      />
    </Center>
  );
};

const Search = () => {
  return (
    <Center>
      <Text>Search</Text>
    </Center>
  );
};
