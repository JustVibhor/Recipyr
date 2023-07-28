import { useLayoutEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import MealOverview from "../ui/MealOverview";

function MealDetails({ route, navigation }) {
  const meal = route.params.meal;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal.title,
    });
  });

  return (
    <View>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <MealOverview item={meal} />
      <View>
        <Text style={styles.title}>{meal.title}</Text>
        <FlatList
          data={meal.ingredients}
          renderItem={(eachIngredient) => {
            return (
              <View>
                <Text>{eachIngredient.item}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
  },
});

export default MealDetails;
