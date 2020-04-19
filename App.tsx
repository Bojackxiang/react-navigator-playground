import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ScrollableTabView, {
  DefaultTabBar,
} from "react-native-scrollable-tab-view";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollableTabView
        tabBarUnderlineStyle={{backgroundColor: 'pink'}}
        tabBarInactiveTextColor={"red"}
        style={{ marginTop: 20, width: 200}}
        initialPage={1}
        renderTabBar={() => <DefaultTabBar />}
      >
        <Text tabLabel="Tab #1">some one</Text>
        <Text tabLabel="Tab #2">favorite</Text>
        <Text tabLabel="Tab #3">project</Text>
      </ScrollableTabView>
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
