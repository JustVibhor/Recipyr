import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";

function MealsOverviewScreen({ route }) {
  const { meal, setMeal } = useState();

  const { itemId } = route.params;

  function handleItem() {
    setMeal(() => {
      return MEALS.find((meal) => meal.id);
    });
  }

  return (
    <View>
      <Text>
        Item: {JSON.stringify(handleItem)} {meal}
      </Text>
    </View>
  );
}

export default MealsOverviewScreen;
