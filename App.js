import { StatusBar } from "expo-status-bar";
import { Button, ImageBackground, StyleSheet, Text, View } from "react-native";
import { CATEGORIES } from "./data/dummy-data";
import HomePage from "./screens/HomePage";
import ChoiceButton from "./ui/ChoiceButton";
import Title from "./ui/Title";

export default function App() {
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
  homeContainer: {
    marginVertical: 40,
    marginHorizontal: 20,
  },
  backgroundImage: {
    opacity: 0.19,
  },
});
