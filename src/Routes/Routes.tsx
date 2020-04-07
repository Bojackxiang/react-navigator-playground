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
import AuthStack from "../components/AuthStack";

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
          // !! here, what we import is another navigator, there are many pages, be careful
        <AppTabs/>
      ) : (
        <AuthStack/>  
      )}
    </NavigationContainer>
  );
};

export default Routes;
