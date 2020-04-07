import React from "react";
import {
  Text,
  Button,
  ActivityIndicator,
  RecyclerViewBackedScrollView,
  AsyncStorage,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Center from "../components/Center";
import { AuthParamList, AuthNavProps } from "../components/AuthParamList";
import { AuthContext } from "../components/AuthProvider";
import AppTabs from "../components/AppTabs";

interface RoutesProps {}

const Stack = createStackNavigator<AuthParamList>();

const Routes: React.FC<RoutesProps> = ({}) => {
  const [loading, setLoading] = React.useState<Boolean>(true);
  const { user } = React.useContext(AuthContext);
  const userContext = React.useContext(AuthContext)

  React.useEffect(() => {
    // check the if the user is login
    console.log('use effect runs')
    AsyncStorage.getItem("user")
      .then((user) => {
        if(user){
            userContext.login();
        }else{
            setLoading(false)
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Center>
        <ActivityIndicator size="large" />
      </Center>
    );
  }

  return (
    //   basic structure for router
    <NavigationContainer>
      {user ? (
        <AppTabs/>
      ) : (
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
      )}
    </NavigationContainer>
  );
};

export default Routes;

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
