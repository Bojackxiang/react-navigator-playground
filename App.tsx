import React from 'react';
import { StyleSheet, Text, View, ScrollView, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';


export default function App() {
  const screenScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    
  }

  return (
    <ScrollView contentContainerStyle={styles.container} onScroll={screenScroll} scrollEventThrottle={6}>

    </ScrollView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
