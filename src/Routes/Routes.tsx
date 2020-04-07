import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Center from "../components/Center";

import {AuthParamList} from '../components/AuthParamList'

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
        <Stack.Screen options={{headerTitle: 'Login Page'}} name="Login" component={Login} />
        <Stack.Screen options={{headerTitle: 'Register Page'}} name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

// -> when there is a screen, there is navigation can be passed in
const Login = (props: any) => {
  const { navigation } = props;
  return (
    <Center>
      <Text>I am a login screen</Text>
      <Button
        title="go to register"
        onPress={() => {
          navigation.navigate("Register");
        }}
      >
        go to register
      </Button>
    </Center>
  );
};

const Register = (props: any) => {
  const { navigation } = props;
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
