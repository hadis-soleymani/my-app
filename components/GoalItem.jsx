import { StyleSheet , Text} from "react-native";

function GoalItem(props) {
  return (
    <Text key={dataItem.index} style={styles.goalItem}>
      {props.text}
    </Text>
  );
}
export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
    padding: 5,
  },
});
