import React from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Animated } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{ height: 100 }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={10}
        onScroll={() => {console.log('scrolled')}}
      >
        {[1, 2, 3, 4, 5].map((item, index) => {
          return (
            <View
              key={index}
              style={{
                width: 200,
                height: 100,
                marginRight: 40,
                backgroundColor: "pink",
              }}
            >
              <Text>test</Text>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
