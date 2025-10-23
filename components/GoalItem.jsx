import { StyleSheet, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <Pressable
      android_ripple={{ color: "#ccc" }}
      style={({ pressed }) => pressed && styles.pressStyle}
      onPress={props.onDeleteItem.bind(this, props.id)}
    >
      <Text style={styles.goalItem}>{props.text}</Text>
    </Pressable>
  );
}
export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
    padding: 8,
  },
  pressStyle: {
    opacity: 0.5,
  },
});
