import { useLayoutEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import MealOverview from "../ui/MealOverview";

function MealDetails({ route, navigation }) {
  const meal = route.params.meal;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal.title,
    });
  });

  return (
    <ScrollView>
      <View>
        <Image source={{ uri: meal.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{meal.title}</Text>
        <MealOverview item={meal} />
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>Ingredients</Text>
        </View>
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
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>Recipe</Text>
        </View>
        <FlatList
          data={meal.steps}
          renderItem={(eachIngredient) => {
            return (
              <View>
                <Text>{eachIngredient.item}</Text>
              </View>
            );
          }}
        />
      </View>
    </ScrollView>
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
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    marginVertical: 4,
    padding: 6,
    marginHorizontal: 24,
    borderBottomColor: "white",
    borderBottomWidth: 2,
  },
});

export default MealDetails;
