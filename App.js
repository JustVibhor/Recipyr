import { useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import HomePage from "./screens/HomePage";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <ImageBackground
      source={require("./assets/images/coffee.jpg")}
      resizeMode="cover"
      style={styles.rootContainer}
      imageStyle={styles.backgroundImage}
    >
      <HomePage />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.19,
  },
});
