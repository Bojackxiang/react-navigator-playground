import React from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Center from "./Center";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AuthContext } from "./AuthProvider";
import faker from "faker";
import { HomeStackList, HomeNavProps } from "../components/AppParams";
import { AuthNavProps } from "./AuthParamList";

type HomeStackProps = {};

const Stack = createStackNavigator<HomeStackList>();

const HomeStack: React.FC<HomeStackProps> = ({}) => {
  const userContext = React.useContext(AuthContext);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                userContext.logout();
              }}
            >
              <Text style={{ marginRight: 10 }}>Logout</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={({ route }) => ({ headerTitle: route.params.name })}
      />
      <Stack.Screen
        name="Edit"
        component={EditPage}
        options={({ route }) => ({
          headerTitle: "editing",
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                console.log("object");
              }}
            >
              <Text>Done</Text>
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;

const EditPage = ({ navigation, route }: HomeNavProps<"Edit">) => {
  return (
    <Center>
      <Text>Edit screen - {route.params.name}</Text>
    </Center>
  );
};

const Product = ({ navigation, route }: HomeNavProps<"Product">) => {
  return (
    <Center>
      <Text>product - {route.params.name}</Text>
      <Button
        title="edit"
        onPress={() => {
          navigation.navigate("Edit", { name: route.params.name });
        }}
      />
    </Center>
  );
};

const Feed = ({ navigation }: HomeNavProps<"Feed">) => {
  return (
    <Center>
      <FlatList
        style={{ width: "100%" }}
        data={Array.from(Array(50), () => faker.commerce.product())}
        keyExtractor={(product, idx) => product + idx}
        renderItem={({ item }) => {
          return (
            <Button
              title={item}
              onPress={() => {
                navigation.navigate("Product", { name: item });
              }}
            />
          );
        }}
      />
    </Center>
  );
};
