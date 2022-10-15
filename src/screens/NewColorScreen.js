import react, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import NewColorComponent from "../Components/NewColorComponent";

const NewColorScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const incrementColor = (color) => {
    switch (color) {
      case "red":
        red > 255 || red + 5 > 255 ? setRed(0) : setRed(red + 5);
        break;
      case "green":
        green > 255 || green + 5 > 255 ? setGreen(0) : setGreen(green + 5);
        break;
      case "blue":
        blue > 255 || blue + 5 > 255 ? setBlue(0) : setBlue(blue + 5);
        break;
    }
  };
  const decrementColor = (color) => {
    switch (color) {
      case "red":
        red < 0 || red - 5 < 0 ? setRed(0) : setRed(red - 5);
        break;
      case "green":
        green < 0 || green - 5 < 0 ? setGreen(0) : setGreen(green - 5);
        break;
      case "blue":
        blue < 0 || blue - 5 < 0 ? setBlue(0) : setBlue(blue - 5);
        break;
    }
  };

  return (
    <View>
      <NewColorComponent
        color="red"
        incrementColor={incrementColor}
        decrementColor={decrementColor}
      />
      <NewColorComponent
        color="green"
        incrementColor={incrementColor}
        decrementColor={decrementColor}
      />
      <NewColorComponent
        color="blue"
        incrementColor={incrementColor}
        decrementColor={decrementColor}
      />
      <Text
        style={{
          backgroundColor: `rgb(${red},${green},${blue})`,
          width: 100,
          height: 100,
          alignSelf: "center",
          margin: 5,
        }}
      ></Text>
      <Text style={styles.text}>RGB({red + "," + green + "," + blue})</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 30,
  },
});

export default NewColorScreen;
