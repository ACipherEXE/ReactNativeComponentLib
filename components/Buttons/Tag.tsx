import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Tag() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button, { backgroundColor: "#3A5EAB" }]}>
        <Text style={styles.text}>
          Tag <Text>X</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "100%",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#FFFFFF",
  },
  text_x_button: {
    borderLeftWidth: 2,
    borderLeftColor: "white",
    paddingLeft: 10,
  },
});
