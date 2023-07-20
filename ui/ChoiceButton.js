import { Pressable, StyleSheet, Text } from "react-native";

function ChoiceButton({ children }) {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 120,
    height: 120,
    backgroundColor: "red",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    padding: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});

export default ChoiceButton;
