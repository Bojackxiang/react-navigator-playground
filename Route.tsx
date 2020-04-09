import React, { lazy } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const TopTabs = createMaterialTopTabNavigator();

const Route = ({}) => {
  return (
    <NavigationContainer>
      <TopTabs.Navigator
        lazy={true}
        tabBarOptions={{
          // setting the style of the whole navigator
          indicatorContainerStyle: { backgroundColor: "pink" },
          // setting style of single style
          // !! caition: can over write the active tint color 
          labelStyle: {
            padding: 5,
            borderRadius: 5,
            backgroundColor: "lightgrey",
            overflow: "hidden",
          },
          // whether can scroll
          scrollEnabled: true,
          // line at the bottom of the tab
          indicatorStyle: {
              display: "none"
          },
          // Label and icon color of the active tab.
          activeTintColor: 'red',
          // Label and icon color of the inactive tab.
          inactiveTintColor: "black",
          // change the style of the tab
          tabStyle: {
            width: 'auto'
          }
        }}
      >
        <TopTabs.Screen name="Tab1 hello world" component={Tab1} />
        <TopTabs.Screen name="Tab2" component={Tab2} />
        <TopTabs.Screen name="Tab3" component={Tab3} />
        <TopTabs.Screen name="Tab4" component={Tab4} />
        <TopTabs.Screen name="Tab5" component={Tab5} />
      </TopTabs.Navigator>
    </NavigationContainer>
  );
};

export default Route;

const styles = StyleSheet.create({});

// ===========================================================
const Tab1 = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

const Tab2 = () => {
  return (
    <View>
      <Text>SettingsScreen</Text>
    </View>
  );
};

const Tab3 = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

const Tab4 = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

const Tab5 = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};
