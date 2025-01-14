import { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
type TextboxProps = {
  placeholderText?: string;
  headerText?: string;
  fillTextbox?: string;
  onUserInputChange?: (userInputEvent: string) => void;
};
/**
 * The textbox component
 * For user input, autofill and etc.
 *
 * Note: If you like typeing you will love this. click-clack and tap that keyboard and be amazed!
 *
 * @param headerText - Add a header to the textbox
 * @param placeholderText - Put a placeholder on the textbox to guide the user
 * @param fillTextbox - Insert text that you want to fill in the textbox
 * @param onUserInputChange - A way to get input out of the component.
 * @returns The textbox component set up as desired
 */
export default function Textbox({
  headerText = "",
  placeholderText = "",
  fillTextbox = "",
  onUserInputChange = () => {},
}: TextboxProps) {
  const [userInput, setUserInput] = useState(fillTextbox);
  function handleInputChange(userInputEvent: string) {
    setUserInput(userInputEvent);
    onUserInputChange(userInputEvent);
  }
  return (
    <View style={styles.container}>
      {headerText && <Text style={styles.headerText}>{headerText}</Text>}
      <TextInput
        style={styles.textbox}
        placeholder={placeholderText}
        value={userInput}
        onChangeText={handleInputChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  headerText: { height: 30, color: "white" },
  textbox: {
    backgroundColor: "white",
    height: 30,
    padding: 10,
  },
});
