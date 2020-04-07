import React from "react";
import { View, Text, Button } from "react-native";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { NavigationContainer, RouteProp } from "@react-navigation/native";

import Center from "../components/Center";

import { AuthParamList, AuthNavProps } from "../components/AuthParamList";

interface RoutesProps {}

const Stack = createStackNavigator<AuthParamList>();

const Routes: React.FC<RoutesProps> = ({}) => {
  return (
    //   basic structure for router
    <NavigationContainer>
      <Stack.Navigator
        // screenOptions={{
        //   header: () => null,
        // }}
        initialRouteName="Login"
      >
        <Stack.Screen
          options={{ headerTitle: "Login Page" }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{ headerTitle: "Register Page" }}
          name="Register"
          component={Register}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

// -> when there is a screen, there is navigation can be passed in
const Login = ({
  navigation,
  route,
}: AuthNavProps<'Login'>) => {
  return (
    <Center>
      <Text>I am a login screen</Text>
      <Button
        title="go to register"
        onPress={() => {
          navigation.navigate("Register");
        }}
      />
      <Text>
        Route name is {route.name} {route.key}
      </Text>
    </Center>
  );
};

const Register = ({
  navigation,
}: AuthNavProps<'Register'>) => {
  return (
    <Center>
      <Text>Register page</Text>
      <Button
        title="go to register"
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        go to log in
      </Button>
    </Center>
  );
};
