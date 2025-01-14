import { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
type TextboxProps = {
  placeholderText?: string;
  headerText?: string;
  fillTextbox?: string;
  onUserInputChange: (userInputEvent: string) => void;
};
export default function Textbox({
  placeholderText = "",
  headerText = "",
  fillTextbox = "",
  onUserInputChange,
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
