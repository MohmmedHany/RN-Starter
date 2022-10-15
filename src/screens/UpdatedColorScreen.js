import react, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import NewColorComponent from "../Components/NewColorComponent";

const incrementNumber = 5;

const reducer = (state, action) => {
  //state ==== {red : 0 , green : 0 , blue : 0}
  //action === {colorTochange : red , Amount : 15 }
  switch (action.type) {
    case "red":
      return state.red + action.payload < 0 || state.red + action.payload > 255
        ? state
        : { ...state, red: state.red + action.payload };
    case "green":
      return state.green + action.payload < 0 ||
        state.green + action.payload > 255
        ? state
        : { ...state, green: state.green + action.payload };
    case "blue":
      return state.blue + action.payload < 0 || state.blue + action.payload > 255
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const UpdatedColorScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  return (
    <View>
      <NewColorComponent
        color="red"
        incrementColor={() => {
          dispatch({ type: "red", payload: incrementNumber });
        }}
        decrementColor={() => {
          dispatch({ type: "red", payload: -1 * incrementNumber });
        }}
      />
      <NewColorComponent
        color="green"
        incrementColor={() => {
          dispatch({ type: "green", payload: incrementNumber });
        }}
        decrementColor={() => {
          dispatch({ type: "green", payload: -1 * incrementNumber });
        }}
      />
      <NewColorComponent
        color="blue"
        incrementColor={() => {
          dispatch({ type: "blue", payload: incrementNumber });
        }}
        decrementColor={() => {
          dispatch({ type: "blue", payload: -1 * incrementNumber });
        }}
      />
      <Text
        style={{
          backgroundColor: `rgb(${state.red},${state.green},${state.blue})`,
          width: 100,
          height: 100,
          alignSelf: "center",
          margin: 5,
        }}
      ></Text>
      <Text style={styles.text}>
        RGB({state.red + "," + state.green + "," + state.blue})
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 30,
  },
});

export default UpdatedColorScreen;
