import { Button, StyleSheet, Text,TextInput,View } from 'react-native';

export default function HomeScreen() {
  return (
     <View style={styles.appContainer}>
     <View style={styles.textInputContainer}>
      <TextInput style={styles.textInput}/>
      <Button title='Add'/>
     </View>
     <View>
      <Text>Goals list...</Text>
     </View>
     </View>        
  );
}

const styles = StyleSheet.create({
  appContainer:{
    padding:50,
  },
  textInputContainer:{
   flexDirection:'row'
  },
  textInput:{
    borderColor:'#aaa',
    borderWidth:1,
    width:300
  }
});
