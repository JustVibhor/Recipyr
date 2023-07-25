import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import ChoiceButton from "./ChoiceButton";

function MealItem({ item }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: item.imageUrl }}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.button}>
          <ChoiceButton title={item.title} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 200,
    height: 200,
    alignContent: "center",
    justifyContent: "center",
    margin: 8,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  button: {
    // opacity: 0,
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});

export default MealItem;
