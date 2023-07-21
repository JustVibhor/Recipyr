import { Pressable, StyleSheet, Text, View } from "react-native";

function ChoiceButton({ title, color }) {
  return (
    <View>
      <Pressable style={styles.button}>
        <View>
          <Text style={styles.buttonText}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 120,
    height: 120,
    backgroundColor: "#F4D160",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    padding: 5,
  },
  buttonText: {
    color: "#FF6666",
    fontSize: 20,
    fontWeight: 900,
  },
});

export default ChoiceButton;
