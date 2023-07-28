import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../ui/MealItem";

function MealsOverviewScreen({ route, navigation }) {
  const mealId = route.params.itemId;
  const displayedMeals = MEALS.filter((mealItem) => {
    // if itemId doesnt exist inside mealItem it will return -1
    return mealItem.categoryIds.indexOf(mealId) >= 0;
  });

  // better than useEffect here as it loads with the component rather than after the component is rendered
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === mealId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [mealId, navigation]);

  function renderMealItems(itemData) {
    return <MealItem item={itemData.item} />;
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
