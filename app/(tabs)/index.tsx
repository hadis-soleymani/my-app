import React, { useState } from "react";
import GoalItem from "../../components/GoalItem";
import {
  Button,
  FlatList,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

export default function HomeScreen() {
  const [enteredGoalText, setEnteredGoadText] = useState("");
  const [courseGoals, setCourseGoals] = useState<
    { text: string; key: string }[]
  >([]);

  function goalInputHandler(enteredText: string) {
    setEnteredGoadText(enteredText);
  }

  function addGoalHandler() {
    console.log(enteredGoalText);
    setCourseGoals((prev) => [
      ...prev,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.textInputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          placeholder="add a goal"
          style={styles.textInput}
        />
        <Button title="Add Goals" onPress={addGoalHandler} />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(dataItem) => {
            return <GoalItem text={dataItem.item} />;
          }}
          keyExtractor={(item, index) => {
            return item.key;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 40,
    flex: 1,
  },
  textInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  textInput: {
    borderColor: "#ccc",
    borderWidth: 1,
    width: "70%",
  },
  listContainer: {
    flex: 3,
    borderTopWidth: 1,
    borderColor: "#ccc",
    paddingTop: 16,
  },
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
    padding: 5,
  },
});
