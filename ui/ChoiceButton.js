import { Pressable, StyleSheet, Text, View } from "react-native";

function ChoiceButton({ title, color }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable android_ripple={{ color: "#FFA41B" }} style={styles.button}>
        <View style={styles.innerContainer}>
          <Text style={styles.buttonText}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    height: 150,
    backgroundColor: "#FFD9C0",
    borderRadius: 8,
    margin: 15,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: "hidden",
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "900",
    fontSize: 18,
    fontWeight: 900,
  },
});

export default ChoiceButton;
