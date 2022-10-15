import react, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [txt, setTxt] = useState("");

  return (
    <View>
    <Text>Enter Your Name :</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Your Text Here..."
        autoCapitalize="none"
        autoCorrect={false}
        value={txt}
        onChangeText={(newValue) => {
          setTxt(newValue);
        }}
      />
      <Text>Your Name is {txt}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
