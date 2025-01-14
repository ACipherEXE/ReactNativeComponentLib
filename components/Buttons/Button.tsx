import { useEffect, useState } from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
type ButtonProps = {
  onButtonPress?: () => void;
  buttonText?: string;
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
 * @param {string} buttonColor - Optional. Pass warning(red), approve(green), color via text (EX:"blue") or a hex color number.
 * @returns {component} The button component set up as desired
 */
export default function Button({
  onButtonPress,
  buttonText = "Button",
  buttonColor = "#3A5EAB",
}: ButtonProps) {
  const [currentButtonColor, setCurrentButtonColor] = useState(buttonColor);
  useEffect(() => {
    if (buttonColor === "warning") {
      setCurrentButtonColor("#E92228");
    } else if (buttonColor === "approve") {
      setCurrentButtonColor("#E92228");
    } else {
      setCurrentButtonColor(buttonColor);
    }
  }, [buttonColor]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: currentButtonColor }]}
        onPress={onButtonPress}
      >
        <Text style={styles.text}>{buttonText}</Text>
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
});
function setState(): [any, any] {
  throw new Error("Function not implemented.");
}
