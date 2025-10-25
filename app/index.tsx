import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.appContainer}>
      <Text>vbg</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 40,
    flex: 1,
    backgroundColor: "#1e085a",
  }
});
