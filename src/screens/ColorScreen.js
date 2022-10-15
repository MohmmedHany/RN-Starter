import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const ColorScreen = () => {
  const listColors = [
    "blue",
    "red",
    "orange",
    "green",
    "pink",
    "purple",
    "black",
    "grey",
    "yellow",
  ];
  const [colors, setColors] = useState(["red"]);
  return (
    <View>
      <Button
        title="Add Color"
        onPress={() => {
          let randomChoice =
            listColors[Math.floor(Math.random() * listColors.length)];
          console.log(randomChoice);

          setColors([...colors, randomChoice]);
        }}
      />
      <FlatList
        keyExtractor={(color) => color}
        data={colors}
        renderItem={(color) => {
          return (
            <Text
              style={{ backgroundColor: color.item, width: 100, height: 100 }}
            ></Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorScreen;
