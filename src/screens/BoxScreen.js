import react, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>BoxScreen</Text>
      <Text style={styles.textStyle}>BoxScreen</Text>
      <Text style={styles.textStyle}>BoxScreen</Text>
      <Text style={styles.uniqueStyle}>Unique</Text>
      <Text style={styles.uniqueStyle2}>Unique2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    height: 100,
    borderWidth: 3,
    borderColor: "black",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  textStyle: {
    borderWidth: 1,
    borderColor: "red",
  },
  uniqueStyle: {
    borderWidth: 1,
    borderColor: "red",
    alignSelf: "stretch",
  },
  uniqueStyle2: {
    borderWidth: 1,
    borderColor: "red",
    ...StyleSheet.absoluteFillObject, //To take entire parent container
  },
});

export default BoxScreen;
