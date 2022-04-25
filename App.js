import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [outputVal, setoutputVal] = useState("hello");
  return (
    <View style={styles.container}>
      <Text>{outputVal}</Text>
      <Button title="click me" onPress={() => setoutputVal("clicked")} />
      <Button title="restore" onPress={() => setoutputVal("back to hello")} />
      <StatusBar style="auto" />
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
