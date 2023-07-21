import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import { CATEGORIES, Item } from "../data/dummy-data";
import ChoiceButton from "../ui/ChoiceButton";

function renderCategoryItem(itemData) {
  return (
    <ChoiceButton title={itemData.item.title} color={itemData.item.color} />
  );
}

function HomePage() {
  return (
    <View style={styles.homeContainer}>
      <FlatList
        data={CATEGORIES}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: 40,
  },
});

export default HomePage;
