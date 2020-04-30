import React, { Children } from "react";
import { StyleSheet, Text, View, TextProperties } from "react-native";
import ScrollableTabView, {
  DefaultTabBar,
} from "react-native-scrollable-tab-view";

interface LabelTextProps extends TextProperties {
  tabLabel: string,
  text: string
}

const LabelText:React.SFC<LabelTextProps> = (props) => {
  const {text, ...restProps} = props;

return <Text {...restProps}>{text}</Text>
}

const App = (props: any) => {
  return (
    <View style={styles.container}>
      <View style={{height: 400, width: 300, backgroundColor: "lightgreen", overflow: 'hidden' }}>
        <ScrollableTabView
          style={{ marginTop: 20 }}
          initialPage={1}
          renderTabBar={() => <DefaultTabBar />}
        >
          <LabelText tabLabel="Tab #1" text="test_a"/>
          <LabelText tabLabel="Tab #2" text="test_b"/>
          <LabelText tabLabel="Tab #3" text="test_c"/>
        </ScrollableTabView>
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

export default App;