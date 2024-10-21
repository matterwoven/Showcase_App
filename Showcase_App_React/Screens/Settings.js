import { StyleSheet, Pressable, View, Text, Alert, Button} from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";

export default function Settings() {

  const darkMode = false;
  const flipFlop = () => {
    if (darkMode === false){
        darkMode = true
        Alert.alert('Set to dark mode')
    }
    else {
        darkMode = false
        Alert.alert('Set to light mode')
    }
  }

  return (
    <View style={darkMode? darkStyles.container : lightStyles.container }>
        <Button title="Press me" onPress={() => {flipFlop}}/>
        <TextInput style={darkMode? darkStyles.Descriptors : lightStyles.Descriptors }>General toggles</TextInput>
        <Pressable style={darkMode? darkStyles.settings : lightStyles.settings }>
            <Text style={darkMode? darkStyles.Text : lightStyles.Text }>Toggle Dark Mode</Text>
        </Pressable>
        <TextInput style={darkMode? darkStyles.Descriptors : lightStyles.Descriptors }>Page settings</TextInput>
        <Pressable style={darkMode? darkStyles.settings : lightStyles.settings}>
            <Text style={darkMode? darkStyles.Text : lightStyles.Text}>Toggle Pokemon List</Text>
        </Pressable>
         <Pressable style={darkMode? darkStyles.settings : lightStyles.settings}>
            <Text style={darkMode? darkStyles.Text : lightStyles.Text}>Toggle Guessing Game</Text>
        </Pressable>
        <Pressable style={darkMode? darkStyles.settings : lightStyles.settings}>
            <Text style={darkMode? darkStyles.Text : lightStyles.Text}>Setting Style Testing</Text>
        </Pressable>
    </View>
  );
}

const darkStyles = StyleSheet.create({
    //Still need to make it so that button text is centered vertically
    container: {
      flex: 1,
      padding: 15,
      alignItems: "center",
      justifyContent: "center",
    },
    Text: {
      alignSelf: "center",
      textAlign: "center",
      fontSize: "14%",
      //Affected by settings
      color: "white",
      //Affected by settings
    },
    settings: { 
      padding: 4,
      margin: "auto",
      borderRadius: 7,
      height: "10%",
      width: "50%",
      alignItems: "center",
      //Affected by settings
      
      backgroundColor: "white",       
      shadowOffset: 3,
      shadowColor: "black",
      shadowOpacity: 0.2,
      //Affected by settings
    },
    Descriptors: {
      fontWeight:"bold",
      borderBottomColor:"black",
      borderBottomWidth: 1,
      paddingBottom: 1,
    }
});

const lightStyles = StyleSheet.create({
    //Still need to make it so that button text is centered vertically
    container: {
      flex: 1,
      padding: 15,
      alignItems: "center",
      justifyContent: "center",
    },
    Text: {
      alignSelf: "center",
      textAlign: "center",
      fontSize: "14%",
      //Affected by settings
      color: "black",
      //Affected by settings
    },
    settings: { 
      padding: 4,
      margin: "auto",
      borderRadius: 7,
      height: "10%",
      width: "50%",
      alignItems: "center",
      //Affected by settings
      
      backgroundColor: "white",       
      shadowOffset: 3,
      shadowColor: "black",
      shadowOpacity: 0.2,
      //Affected by settings
    },
    Descriptors: {
      fontWeight:"bold",
      borderBottomColor:"black",
      borderBottomWidth: 1,
      paddingBottom: 1,
    }
  });