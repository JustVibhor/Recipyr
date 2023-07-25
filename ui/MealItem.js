import { Image, Pressable, StyleSheet, Text, View } from "react-native";

function MealItem({ item }) {
  return (
    <View style={styles.mealItem}>
      <Pressable android_ripple={{ color: "#FD8A8A" }}>
        <View>
          <Image source={{ uri: item.imageUrl }} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={styles.desc}>
          <Text>Duration: {item.duration}</Text>
          <Text>Affordability: {item.affordability}</Text>
          <Text>complexity: {item.complexity}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
  },

  image: {
    width: "100%",
    height: 200,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },

  desc: {
    // backgroundColor: "#FFF38C",
  },
});

export default MealItem;
