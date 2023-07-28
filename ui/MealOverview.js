import { StyleSheet, Text, View } from "react-native";

function MealOverview({ item }) {
  return (
    <View style={styles.desc}>
      <Text style={styles.detailItem}>{item.duration}</Text>
      <Text style={styles.detailItem}>{item.affordability}</Text>
      <Text style={styles.detailItem}>{item.complexity}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  desc: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    fontSize: 14,
    marginHorizontal: 4,
    textAlign: "center",
  },
});

export default MealOverview;
