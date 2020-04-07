import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

interface RoutesProps {}

const Stack = createStackNavigator();

const Routes: React.FC<RoutesProps> = ({}) => {
  return (
    //   basic structure for router 
    <NavigationContainer>
      <Stack.Navigator> 
        <Stack.Screen name="login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

const Login = () => {
  return (
    <View>
      <Text>I am a login screen</Text>
    </View>
  );
};
