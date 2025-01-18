import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
type TagProps = {
  onButtonPress?: () => void;
  TagText?: string;
  buttonColor?: string;
};
/**
 * The button component
 * For all the boop, click and etc. the user might need to trigger events you want when clicked
 *
 * Note: Do not use as a self destruct button. Do a physical large button for that like in the hit videogame among s-us.
 *
 * @param {Function} onButtonPress - Pass a function that you want to trigger when button is pressed
 * @param {string} buttonText - The text you want to put on the button
 * @param {string} buttonColor - (Optional) Pass warning(red), approve(green), color via text (EX:"blue") or a hex color number.
 * @returns {component} The button component set up as desired
 */
export default function Tag({ onButtonPress, TagText = "Tag" }: TagProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button]} onPress={onButtonPress}>
        <Text style={styles.text}>{TagText} X</Text>
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
    backgroundColor: "#3A5EAB",
  },
  text: {
    color: "#FFFFFF",
  },
});
