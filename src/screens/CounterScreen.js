import react, { useState } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
       <TouchableOpacity
        onPress={() => {
            setCounter(counter + 1);
        }}
      >
        <Text style={styles.btn}>Increase</Text>
      </TouchableOpacity>
       <TouchableOpacity
        onPress={() => {
            setCounter(counter - 1);
        }}
      >
        <Text style={styles.btn}>Decrease</Text>
      </TouchableOpacity>
       <TouchableOpacity
        onPress={() => {
            setCounter(0);
        }}
      >
        <Text style={styles.btn}>Reset</Text>
      </TouchableOpacity>
      <Text style={styles.textStyle}>Current Count : {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 40,
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

export default CounterScreen;
