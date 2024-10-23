import { Text, View, StyleSheet } from "react-native";
import React from "react";
import { Pressable } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function StyleTesting() {
    const placeholder = true
    if(placeholder) 
    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Style Testing Page</Text>
    </View>
    ) 
    else {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Access Denied</Text>
          <Text style={styles.subtext}>This feature is disabled. Enable it in settings to access this page.</Text>
          <Pressable onPress={() => navigation.navigate("settings")}/>
        </View>
      );
    }}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtext: {
    fontSize: 16,
    color: 'gray',
  },
  testingBox1: {
    fontSize: {box1FontSize}, //Make a textInput for the number of fontSize
    fontStyle: {box1FontStyle},  //Make a choice between italic and normal
    fontWeight: {box1FontWeight}, //Choice between black, bold, or condensed, (optional) put a box above to input 100-200-300 and so on, buttons beside either one to choose which one is used
    color: {box1Color}, //Input color
    shadowColor: {box1ShadowColor}, //Input color
    shadowOpacity: {box1ShadowOpacity}, //Input opacity percentage (numbers only)
    shadowOffset: {box1ShadowOffset}, //Input offset (numbers only)
    borderRadius: {box1BorderRadius}, //Input radius (numbers only)
    borderWidth: {box1BorderWidth}, //Input width (numbers only)
    padding: {box1Padding}, //Input Padding (numbers only)
    margin: {box1Margin}, //Input margin {numbers only}
  }
});