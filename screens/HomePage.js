import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import { CATEGORIES, Item } from "../data/dummy-data";
import ChoiceButton from "../ui/ChoiceButton";

function renderCategoryItem(itemData, navigation) {
  function PressHandler() {
    navigation.navigate("MealsOverview", {
      itemId: itemData.item.id,
      itemTitle: itemData.item.title,
    });
  }

  return (
    <ChoiceButton
      title={itemData.item.title}
      color={itemData.item.color}
      onPress={PressHandler}
    />
  );
}

function HomePage({ navigation }) {
  return (
    <View style={styles.homeContainer}>
      <FlatList
        data={CATEGORIES}
        renderItem={(itemData) => renderCategoryItem(itemData, navigation)}
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
