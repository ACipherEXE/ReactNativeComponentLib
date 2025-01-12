import { Button, View, StyleSheet } from "react-native";

type DefaultButtonProps = {
  buttonText?: string;
  onPress?: () => void;
};
// Note: Due to limitations on the button component from react native a other type of button needes to be made.
// But keep in case as its still needed in the future.
export function DefaultButton({
  buttonText = "Button",
  onPress,
}: DefaultButtonProps) {
  return (
    <View style={styles.container}>
      <Button
        title={buttonText}
        onPress={
          onPress ||
          (() => console.log("Set up a funtion for button component"))
        }
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
});
