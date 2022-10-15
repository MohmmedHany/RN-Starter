import react from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const names = [
    { name: "Mohmmed", age: 25 },
    { name: "Ahmed", age: 26 },
    { name: "Omar", age: 8 },
    { name: "Mostafa", age: 100 },
    { name: "Amr", age: 56 },
  ];
  return (
    <FlatList
      keyExtractor={(name) => name.age}
      data={names}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            Hello {item.name}, Your Age is {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    borderBottomWidth: 2,
  },
});

export default ListScreen;
