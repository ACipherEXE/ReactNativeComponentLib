import { View, Image } from "react-native";

export default function ImageBox() {
  return (
    <View>
      <Image source={require("../../assets/images/coqui-example.jpg")} />
    </View>
  );
}
