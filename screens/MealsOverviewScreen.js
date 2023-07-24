import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { MEALS } from "../data/dummy-data";
import MealItem from "../ui/MealItem";

function MealsOverviewScreen({ route }) {
  const { mealId } = route.params.itemId;
  MealItem;
  const displayedMeals = MEALS.filter((mealItem) => {
    // if itemId doesnt exist inside mealItem it will return -1
    return mealItem.categoryIds.indexOf(mealId) >= 0;
  });

  function renderMealItems(itemData) {
    console.log("hello");
    return <MealItem title={itemData.item.title} />;
  }

  return (
    <View>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItems}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default MealsOverviewScreen;
