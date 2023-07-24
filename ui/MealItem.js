import { Text, View } from "react-native";
import ChoiceButton from "./ChoiceButton";

function MealItem({ item }) {
  return (
    <View>
      <ChoiceButton title={item.title} />
    </View>
  );
}

export default MealItem;
