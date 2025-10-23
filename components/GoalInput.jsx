import { useState } from "react";
import { Modal, StyleSheet } from "react-native";
import { View, TextInput, Button } from "react-native";

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
    marginHorizontal: 16,
  },
  textInput: {
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 16,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent:'center',
    gap:16
  },
  button: {
    width:100
  },
});
