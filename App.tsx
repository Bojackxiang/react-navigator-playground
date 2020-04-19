import React from "react";
import { StyleSheet, Text, View, AppRegistry } from "react-native";

import Swiper from "react-native-swiper";

export default function App() {
  const _renderItem = (item: any, index: any) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
      <View
        style={{
          height: 300,
          width: 300,
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Swiper style={styles.wrapper} showsButtons={true}>
          <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: 300,
    
  },
  slide1: {
    height: 300,
    width: 250,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
  slide2: {
    height: 300,
    width: 250,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },
  slide3: {
    height: 300,
    width: 250,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});
