import { useState } from "react";
import { Modal, StyleSheet } from "react-native";
import { View, TextInput, Button, Image } from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoadText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoadText(enteredText);
  }

  function addGoalHandler() {
    props.onAddInput(enteredGoalText);
    setEnteredGoadText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.textInputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          onChangeText={goalInputHandler}
          placeholder="add a goal"
          style={styles.textInput}
          value={enteredGoalText}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title="Add Goals" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  textInputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 16,
    backgroundColor: "#311b6a",
  },
  textInput: {
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 8,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
  },
  button: {
    width: 100,
  },
  image: {
    width: 80,
    height: 80,
    marginHorizontal: "auto",
    marginBottom: 32,
  },
});
