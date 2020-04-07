import React from 'react'
import { StyleSheet, Text, View , Button} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import { AuthContext } from './AuthProvider'
import { AuthParamList, AuthNavProps } from "../components/AuthParamList";
import Center from './Center';

const AuthStack = () => {
    const userContext = React.useContext(AuthContext)
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator initialRouteName="Login">
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
    )
}

export default AuthStack

// -> when there is a screen, there is navigation can be passed in
const Login = ({ navigation, route }: AuthNavProps<"Login">) => {
    const userContext = React.useContext(AuthContext)
  return (
    <Center>
      <Text>I am a login screen</Text>
      <Button title="login now" onPress = {() => {userContext.login()}}/>
      <Button
        title="No Account ? go to register"
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

const Register = ({ navigation }: AuthNavProps<"Register">) => {
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

