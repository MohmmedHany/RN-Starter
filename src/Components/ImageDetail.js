import react from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = ({ title, imgUrl }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Image source={imgUrl} style={{ width: 150, height: 150 }} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
