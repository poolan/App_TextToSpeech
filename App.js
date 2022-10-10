import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import * as Speech from "expo-speech";
import React, { useState } from "react";

export default function App() {
  const [word, setWord] = useState("");
  const speak = () => {
    const thingToSay = word;
    Speech.speak(thingToSay);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={{ fontSize: 18 }}
        placeholder=" TEXT"
        onChangeText={(text) => setWord(text)}
      />
      <Button title="Press to hear some words" onPress={speak} />
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
