import React from "react";
import {
  Animated,
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  Text,
  SafeAreaView,
} from "react-native";

const deviceWidth = Dimensions.get("window").width;
const FIXED_BAR_WIDTH = 280;
const BAR_SPACE = 10;

export default function App() {
  const imageArray: any[] = [];
  const barArray: any[] = [];

  const images = [
    "https://s-media-cache-ak0.pinimg.com/originals/ee/51/39/ee5139157407967591081ee04723259a.png",
    "https://s-media-cache-ak0.pinimg.com/originals/40/4f/83/404f83e93175630e77bc29b3fe727cbe.jpg",
    "https://s-media-cache-ak0.pinimg.com/originals/8d/1a/da/8d1adab145a2d606c85e339873b9bb0e.jpg",
  ];

  const numItems = images.length;
  const itemWidth = FIXED_BAR_WIDTH / numItems - (numItems - 1) * BAR_SPACE;
  const animVal = new Animated.Value(0);

  images.forEach((image, idx) => {
    console.log(image, idx);
    const thisImage = (
      <Image
        key={`image${idx}`}
        source={{ uri: image }}
        style={{ width: deviceWidth }}
      />
    );
    imageArray.push(thisImage);

    const scrollBarVal = animVal.interpolate({
      inputRange: [deviceWidth * (idx - 1), deviceWidth * (idx + 1)],
      outputRange: [-itemWidth, itemWidth],
      extrapolate: "clamp",
    });

    const thisBar = (
      <View
        key={`bar${idx}`}
        style={[
          styles.track,
          {
            width: itemWidth,
            marginLeft: idx === 0 ? 0 : BAR_SPACE,
          },
        ]}
      >
        <Animated.View
          style={[
            styles.bar,
            {
              width: itemWidth,
              transform: [{ translateX: scrollBarVal }],
            },
          ]}
        />
      </View>
    );
    
    barArray.push(thisBar);
  });


  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>test</Text>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <View style={styles.container}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={10}
            pagingEnabled
            onScroll={Animated.event([
              { nativeEvent: { contentOffset: { x: animVal } } },
            ])}
          >
            {imageArray}
          </ScrollView>
          <View style={styles.barContainer}>{barArray}</View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  barContainer: {
    position: "absolute",
    zIndex: 2,
    top: 40,
    flexDirection: "row",
  },
  track: {
    backgroundColor: "#ccc",
    overflow: "hidden",
    height: 2,
  },
  bar: {
    backgroundColor: "#5294d6",
    height: 2,
    position: "absolute",
    left: 0,
    top: 0,
  },
});
