import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.textInputContainer}>
        <TextInput placeholder="add a goal" style={styles.textInput} />
        <Button title="Add Goals" />
      </View>
      <View style={styles.listContainer}>
        <Text>Goals list...</Text>
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
});
