import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
export default function ItemDescriptionCard() {
  return (
    <View style={styles.container}>
      <View style={styles.column1}>
        <TouchableOpacity onPress={() => console.log()}>
          <Image
            style={styles.image}
            source={require("../../assets/images/coqui-example.jpg")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.column2}>
        <Text style={styles.text}>Column 2</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Align items horizontally in a row
    flex: 1,
  },
  column1: {
    width: "20%", // Column 1 takes 40% of the width
    justifyContent: "center",
    alignItems: "center",
  },
  column2: {
    width: "60%", // Column 2 takes 60% of the width
    backgroundColor: "lightgreen",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
  image: {
    width: 200,
    height: 200,
  },
});
