import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hello World</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("List");
        }}
      >
        <Text style={styles.btn}>List</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ImageScreen");
        }}
      >
        <Text style={styles.btn}>ImageScreen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Counter");
        }}
      >
        <Text style={styles.btn}>Counter</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("UpdatedCounter");
        }}
      >
        <Text style={styles.btn}>Updated Counter</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Color");
        }}
      >
        <Text style={styles.btn}>Color</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("NewColor");
        }}
      >
        <Text style={styles.btn}>New Color</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("UpdatedColor");
        }}
      >
        <Text style={styles.btn}>Updated Color</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Text");
        }}
      >
        <Text style={styles.btn}>Text Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Box");
        }}
      >
        <Text style={styles.btn}>Box Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
  },
  btn: {
    backgroundColor: "#0E86D4",
    color: "white",
    padding: 5,
    borderRadius: 6,
    textAlign: "center",
    width: 200,
    alignSelf: "center",
    fontSize: 20,
    marginTop: 10,
  },
});

export default HomeScreen;
