import { Pressable, StyleSheet, Text, View } from "react-native";

function ChoiceButton({ title, color }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable>
        <View style={styles.innerContainer}>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    height: 150,
    backgroundColor: "#F4D160",
    borderRadius: 8,
    margin: 15,
    elevation: 4,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: 900,
  },
});

export default ChoiceButton;
