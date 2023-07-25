import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

function MealItem({ item }) {
  return (
    <View style={styles.mealItem}>
      <Pressable android_ripple={{ color: "#FD8A8A" }}>
        <View>
          <Image source={{ uri: item.imageUrl }} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={styles.desc}>
          <Text style={styles.detailItem}>{item.duration}</Text>
          <Text style={styles.detailItem}>{item.affordability}</Text>
          <Text style={styles.detailItem}>{item.complexity}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
  },

  image: {
    width: "100%",
    height: 200,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    margin: 8,
    fontWeight: "bold",
  },

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

export default MealItem;
