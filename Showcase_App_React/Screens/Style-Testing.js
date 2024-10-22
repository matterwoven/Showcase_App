import { Text, View, StyleSheet } from "react-native";
import React from "react";
import { Pressable } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function StyleTesting() {
    const placeholder = false
    if(placeholder) 
    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Article Screen</Text>
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
});