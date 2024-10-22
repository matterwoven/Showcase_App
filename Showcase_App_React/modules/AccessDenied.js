import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export function AccessDenied() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Access Denied</Text>
      <Text style={styles.subtext}>This feature is disabled. Enable it in settings to access this page.</Text>
      <Pressable onPress={() => navigation.navigate("settings")}/>
    </View>
  );
}

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
