import { Text, View, StyleSheet } from "react-native";
import React from "react";
import { FlatList, TouchableHighlight } from "react-native-gesture-handler";
import { Pressable } from "react-native";
import { Image } from "react-native";
import { useState, useEffect } from "react";
import { fetchPokemonDetails, fetchPokemonList } from "../data_creditToClass/PokeRepo";

export default function PokemonList() {
  const placeholder = true

  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sound, setSound] = useState(null);
  const [error, setError] = useState(null);

  

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setIsLoading(true);
        const list = await fetchPokemonList();
        const detailedList = [];
        for (const pokemon of list) {
          const details = await fetchPokemonDetails(pokemon.url);
          detailedList.push(details);
        }
        setPokemonList(detailedList);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPokemon();

    return sound ? () => sound.unloadAsync() : undefined;
  }, [sound]);

  async function playSound(url) {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync({ uri: url });
    setSound(sound);
    console.log("Playing Sound");
    await sound.playAsync();
  }


  function renderItem({ item }) {
    return (
      <View style={styles.pokemonContainer}>
        <Text style={styles.pokemonName}>{item.name}</Text>
        <Image style={styles.pokemonImage} source={{ uri: item.sprites.front_default }} />
        <View style={{flexWrap:"nowrap"}}>
        <Pressable
          style={styles.button}
          onPress={() => playSound(`https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${item.id}.ogg`)}
        >
          <Text style={styles.buttonText}>Play Cry</Text>
        </Pressable>
        </View>
      </View>
    );
  }

  if (isLoading) {
    return <Text>Loading...</Text>; 
  }

  if (error) {
    return <Text>Error: {error}</Text>; 
  }

  if(placeholder)   
  return (
    <View style={styles.container}>
      <FlatList
        windowSize={3}
        data={pokemonList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  ) 
  else
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
      flex: 2,
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
    },
    pokemonContainer: {
      alignItems: 'center',
      marginRight: 20,
    },
    pokemonImage: {
      width: 100,
      height: 100,
      marginVertical: 10,
    },
    button: {
      backgroundColor: '#4285F4',
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    pokemonName: {
      fontFamily: 'cambria',
      fontSize: 20,
      fontWeight: "200",
      fontWeight: "condensed"
    }
  });;