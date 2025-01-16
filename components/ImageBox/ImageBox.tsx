import { View, Image, StyleSheet, Dimensions } from "react-native";

export default function ImageBox() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="stretch"
        source={require("../../assets/images/coqui-example.jpg")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
  image: {
    width: "100%",
    height: 500,
  },
});
