import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import { CATEGORIES, Item } from "../data/dummy-data";
import ChoiceButton from "../ui/ChoiceButton";

function HomePage() {
  return (
    <View style={styles.homeContainer}>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={CATEGORIES}
          renderItem={({ item }) => <ChoiceButton>{item.title}</ChoiceButton>}
          keyExtractor={(item) => item.id}
          horizontal={true}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    flexDirection: "row",
  },
});

export default HomePage;
