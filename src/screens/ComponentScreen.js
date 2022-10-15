import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {
    const myName = "Mohmmed"
  return (
    <View>
        <Text style={styles.textStyle}>Getting Started With React Native!</Text>
        <Text style={styles.welcomeStyle}>Welcome {myName} To This Amazing App</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
    color: "red",
    padding: 10,
  },
  welcomeStyle : {
    fontSize : 20
  }
});

export default ComponentScreen;
