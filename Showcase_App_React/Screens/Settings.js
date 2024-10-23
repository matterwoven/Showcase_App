import { StyleSheet, Pressable, View, Text, Alert, Button} from "react-native";
import React, { useEffect } from "react";
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";
import { Stack } from "@react-navigation/native-stack"

export default function Settings( navigation ) {

  const [GuessingActive, setGuessingActive] = useState(true);
  const [PokemonActive, setPokemonActive] = useState(true);
  const [StyleTestActive, setStyleTestActive] = useState(true);

  const [darkMode, setDarkMode] = useState(false);

  const flipFlop = () => {
    if (darkMode === false) {
        setDarkMode(true);
        Alert.alert('Set to dark mode');
    } else {
        setDarkMode(false);
        Alert.alert('Set to light mode');
    }
  }

  const setPage = (page) => {
    if (page === 'Pokemon') {
      setPokemonActive(!PokemonActive);
      Alert.alert(`Set Pokemon List to ${!PokemonActive}`);
    }
    else if (page === 'Guessing') {
      setGuessingActive(!GuessingActive);
      Alert.alert(`Set Guessing Game to ${!GuessingActive}`);
    }
    else if (page === 'StyleTest') {
      setStyleTestActive(!StyleTestActive);
      Alert.alert(`Set Style Test to ${!StyleTestActive}`);
    }
  }
  return (
    <View style={darkMode? darkStyles.container : lightStyles.container }>
        <TextInput style={darkMode? darkStyles.Descriptors : lightStyles.Descriptors }>General toggles</TextInput>
        <Pressable style={darkMode? darkStyles.settings : lightStyles.settings} onPress={flipFlop}>
            <Text style={darkMode? darkStyles.Text : lightStyles.Text }>Toggle Dark Mode</Text>
        </Pressable>
        <TextInput style={darkMode? darkStyles.Descriptors : lightStyles.Descriptors }>Page settings</TextInput>
        <Pressable style={darkMode? darkStyles.settings : lightStyles.settings}  onPress={() => setPage('Pokemon')}>
            <Text style={darkMode? darkStyles.Text : lightStyles.Text}>Toggle Pokemon List</Text>
        </Pressable>
         <Pressable style={darkMode? darkStyles.settings : lightStyles.settings}  onPress={() => setPage('Guessing')}>
            <Text style={darkMode? darkStyles.Text : lightStyles.Text}>Toggle Guessing Game</Text>
        </Pressable>
        <Pressable style={darkMode? darkStyles.settings : lightStyles.settings}  onPress={() => setPage('StyleTest')}>
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
      backgroundColor: "#212121"
    },
    Text: {
      alignSelf: "center",
      textAlign: "center",
      fontSize: "14%",
      //Affected by settings
      color: "#dbdad5",
      //Affected by settings
      paddingVertical: 25,
    },
    settings: { 
      padding: 2,
      margin: "7%",
      borderRadius: 7,
      height: "10%",
      width: "50%",
      alignItems: "center",
      //Affected by settings
      backgroundColor: "#363431",       
      shadowOffset: 3,
      shadowColor: "#ffffff",
      shadowRadius: 2,
      shadowOpacity: 0.4,
      //Affected by settings
    },
    Descriptors: {
      fontWeight:"bold",
      borderBottomColor:"#ffffff",
      borderBottomWidth: 1,
      paddingBottom: 1,
      color: "#dbdad5",
    },
    DarkButton: {
      backgroundColor: "white",
      borderColor: "white",
      padding: 5,
    },
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
      paddingVertical: 25,
    },
    settings: { 
      padding: 2,
      margin: "7%",
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
    },
    DarkButton: {
      backgroundColor: "white",
      borderColor: "white",
      padding: 5,
    },
  });