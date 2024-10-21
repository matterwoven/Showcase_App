import { Text, View } from "react-native";
import React from "react";
import { TouchableHighlight } from "react-native-gesture-handler";

export default function PokemonList() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ padding: 5 }}>Article Screen</Text>
      <TouchableHighlight>Hello</TouchableHighlight>
    </View>
  );
}