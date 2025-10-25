import React, { useState } from "react";
import GoalItem from "../components/GoalItem";
import GoalInput from "../components/GoalInput";
import { FlatList, StyleSheet, View, Button, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState<
    { text: string; key: string }[]
  >([]);

  function onDelete(id: string) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.key != id);
    });
  }

  function showModal() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText: string) {
    setCourseGoals((prev) => [
      ...prev,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  return (
    <>
      <StatusBar style='dark' />
      <View style={styles.appContainer}>
        <Button title="Add" color="purple" onPress={showModal} />

        {modalIsVisible && (
          <GoalInput
            onCancel={endAddGoalHandler}
            onAddInput={addGoalHandler}
            visible={modalIsVisible}
          />
        )}
        <View style={styles.listContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(dataItem) => {
              return (
                <GoalItem
                  text={dataItem.item.text}
                  id={dataItem.item.key}
                  onDeleteItem={onDelete}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.key;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 40,
    flex: 1,
    backgroundColor: "#1e085a",
  },
  listContainer: {
    flex: 3,
    paddingTop: 16,
  },
  goalItem: {
    margin: 8,
    borderRadius: 6,
    color: "white",
    padding: 5,
  },
});
