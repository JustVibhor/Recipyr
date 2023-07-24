import { StyleSheet, Text, View } from "react-native";

function MealsOverviewScreen({ route }) {
  const { itemId } = route.params;
  return (
    <View>
      <Text>Item: {JSON.stringify(itemId)}</Text>
    </View>
  );
}

export default MealsOverviewScreen;
