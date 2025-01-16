import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

type ImageBoxProps = {
  onImagePress?: () => void;
  imagePath: any;
};
/**
 * The ImageBox component
 * For all the images you want to display and clickable to trigger functions you want to happen on click.
 *
 * Note: This is just a button with extra steps XD
 * @param onImagePress - Pass a cuntion to be triggered after click of the image.
 * @param imagePath - Pass the url of the image you want to display. Use require() if you have a local image you want to use.
 * @returns The ImageBox component as wanted.
 */
export default function ImageBox({ onImagePress, imagePath }: ImageBoxProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onImagePress}>
        <Image style={styles.image} source={imagePath} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
  image: {
    width: "100%",
  },
});
