import react, { useReducer } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { State } from "react-native-gesture-handler";

const reducer = (state, action) => {
  switch (action.type) {
    case "Add":
      return (state = state + action.payload);
    case "Subtract":
      return (state = state - action.payload);
    case "Reset":
      return (state = 0);
    default:
      return state;
  }
};

const UpdatedCounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <View>
      <Button
        title="Add"
        onPress={() => {
          dispatch({ type: "Add", payload: 10 });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: "Subtract", payload: 10 });
        }}
      />
      <Button
        title="Reset"
        onPress={() => {
          dispatch({ type: "Reset" });
        }}
      />
      <Text style={styles.textStyle}>Current Count : {state}</Text>
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

export default UpdatedCounterScreen;
