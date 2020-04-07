import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button, Text } from "react-native";
import { AppParamList } from "../components/AppParams";
import Center from "./Center";
import { AuthContext } from "./AuthProvider";

interface AppTabsProps {}

// see writing the navigator and the list as an template
const Tabs = createBottomTabNavigator<AppParamList>();

const AppTabs: React.FC<AppTabsProps> = ({}) => {
  return (
    // !since the navigation container is outside, so you dont need it here
    <Tabs.Navigator>
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
