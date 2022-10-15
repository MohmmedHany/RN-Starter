import react from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../Components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="Forest" imgUrl={require("../../assets/forest.jpg")} />
      <ImageDetail title="Beach" imgUrl={require("../../assets/beach.jpg")} />
      <ImageDetail
        title="Sir Chungus"
        imgUrl={require("../../assets/download.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
