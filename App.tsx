import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Animated,
  Dimensions,
  NativeEventEmitter,
} from "react-native";

export default function App() {
  let itemArray: any[] = [];

  const dataArray = [0, 1, 2, 3, 4];

  let scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, 300);

  dataArray.forEach((item, idx) => {
    // 将 item 放到 item 的 array 中
    itemArray.push(
      <View
        style={{
          height: 100,
          width: 300,
          backgroundColor: "pink",
          marginRight: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>{idx}</Text>
      </View>
    );
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={{ height: 100 }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={27}
        // onScroll={(e:any) => {
        //   scrollX = e.nativeEvent.contentOffset.x
        //   console.log(scrollX)
        //   // return Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }]);
        // }}
        onScroll={Animated.event( [{ nativeEvent: { contentOffset: { x: scrollX } } }])}
      >
        {itemArray}
      </ScrollView>
      <View>
        <View style={{ flexDirection: "row" }}>
          {/* 根据dataarray的长度来生成一系列的点*/}
          {dataArray.map((_, i) => {
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: "clamp",
            });
            console.log(i, opacity)
            return (
              <Animated.View
                key={i}
                style={{
                  opacity,
                  height: 10,
                  width: 10,
                  backgroundColor: "#595959",
                  margin: 8,
                  borderRadius: 5,
                }}
              />
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
}
