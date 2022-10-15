import react from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const NewColorComponent = ({ color, incrementColor, decrementColor }) => {
  return (
    <View>
      <Text style={styles.text}>{color}</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          incrementColor();
        }}
      >
        <Text>More {color}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          decrementColor();
        }}
      >
        <Text>Less {color}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
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

export default NewColorComponent;
