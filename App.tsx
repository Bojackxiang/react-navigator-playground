import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const inputFields = [
    {
      title: "First Name",
      id: "SignUpFirstName",
      type: "text",
      content: { value: "", errorMessage: "", errorStatus: false },
      width: "100%",
    },
    {
      title: "Last Name",
      id: "SignUpLastName",
      type: "text",
      content: { value: "", errorMessage: "", errorStatus: false },
      width: "100%",
    },
    {
      title: "Email",
      id: "SignUpEmail",
      type: "text",
      content: { value: "", errorMessage: "", errorStatus: false },
      width: "100%",
    },
    {
      title: "Confirm Email",
      id: "SignUpConfirmEmail",
      type: "text",
      content: { value: "", errorMessage: "", errorStatus: false },
      width: "100%",
    },
    {
      title: "Password",
      id: "SignUpPassword",
      type: "text",
      content: { value: "", errorMessage: "", errorStatus: false },
      width: "100%",
    },
    {
      title: "Confirm Password",
      id: "SignUpConfirmPassword",
      type: "text",
      content: { value: "", errorMessage: "", errorStatus: false },
      width: "100%",
    },
    {
      title: "Confirm Password",
      id: "SignUpConfirmPassword",
      type: "text",
      content: { value: "", errorMessage: "", errorStatus: false },
      width: "50%",
    },
    {
      title: "Confirm Password",
      id: "SignUpConfirmPassword",
      type: "text",
      content: { value: "", errorMessage: "", errorStatus: false },
      width: "50%",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {inputFields.map((item) => {
          return <TextInput key={item.id} placeholder={item.title} style={{width: '100%'}}/>;
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
