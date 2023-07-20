import { StyleSheet, Text, View } from "react-native";

function Title({ children }) {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#4C3A51",
    textAlign: "center",
  },
});

export default Title;
