import { React, useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import PokemonList from './Screens/PokemonList';
import Settings from './Screens/Settings';
import StyleTesting from './Screens/Style-Testing';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Drawer = createDrawerNavigator();

function MyDrawer() {
  const [GuessingActive, setGuessingActive] = useState(true);
  const [PokemonActive, setPokemonActive] = useState(true);
  const [StyleTestActive, setStyleTestActive] = useState(true);

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Settings" component={Settings} />
      {/* Making the guessing game seems to be out of my skill range for now
          I can make the background black, but not the image itself */}
      {/* <Drawer.Screen name="GuessingGame" component={GuessingGame} /> */}
      <Drawer.Screen name="PokemonList" component={PokemonList} />
      <Drawer.Screen name="StyleTesting" component={StyleTesting} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>
  );
}