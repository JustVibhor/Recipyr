import { StyleSheet, Text, View } from "react-native";

function MealOverview({ item, style, textStyle }) {
  return (
    <View style={[styles.desc, style]}>
      <Text style={[styles.detailItem, textStyle]}>{item.duration}</Text>
      <Text style={[styles.detailItem, textStyle]}>{item.affordability}</Text>
      <Text style={[styles.detailItem, textStyle]}>{item.complexity}</Text>
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
