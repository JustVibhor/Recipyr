import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

function ChoiceButton({ title, color }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={() => {
          console.log(title);
        }}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
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
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontWeight: "900",
    fontSize: 18,
    fontWeight: 900,
  },
});

export default ChoiceButton;
