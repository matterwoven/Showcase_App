import { Text, View, StyleSheet } from "react-native";
import React from "react";
import { FlatList, TouchableHighlight } from "react-native-gesture-handler";
import { Pressable } from "react-native";
import { Image } from "react-native";
import { useState, useEffect } from "react";
import { fetchPokemonDetails, fetchPokemonList } from "../data_creditToClass/PokeRepo";
import { Audio } from 'expo-av';

export default function PokemonList() {
  const placeholder = true;
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sound, setSound] = useState(null);
  const [error, setError] = useState(null);

  const loadData = async () => {
    try {
      setIsLoading(true);
      const list = await fetchPokemonList();
      const detailedList = await Promise.all(
        list.map(async (pokemon) => {
          const details = await fetchPokemonDetails(pokemon.url);
          return details;
        })
      );
      setPokemonList(detailedList);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [])

  useEffect(() => {
    return sound ? () => sound.unloadAsync() : undefined; //If sound returns false, undefined, if true, play
  }, [sound]);

  async function playSound(url) {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync({ uri: url });
    setSound(sound);
    console.log("Playing Sound");
    await sound.playAsync();
  }

  function renderItem({ item }) {
    const type1 = item.types[0]?.type?.name || "unknown"; // Simplified checking
    const type2 = item.types[1]?.type?.name || "none";
    // if (item.types.name[1] != false) {typeCountMax = 1, type2 = "none"} else {typeCountMax = 2}

    // for (var typeCount = 0; typeCount < typeCountMax; i++) {
    // if (item.types.name === "normal" | "fire" | "flying" | "dark" | "ghost" | "grass" | "dragon" | "water" | "fighting" | "poison" | "electric" | "ground" | "psychic" | "rock" | "ice" | "bug" | "steel" | "fairy") 
    // { 
    //   if (typeCount === 0){ type1 = item.types.name[0] }
    //   else { type2 = item.types.name[1] }
    // }
    return (
      <View style={styles.pokemonContainer}>
        <Text style={styles.pokemonName}>{item.name}</Text>
        <FlatList
          data={[item.sprites.front_default, item.sprites.back_default, item.sprites.front_shiny, item.sprites.back_shiny].filter(Boolean)}
          horizontal
          keyExtractor={(image, index) => index.toString()}
          renderItem={({ item }) => (
            <Image style={styles.pokemonImage} source={{ uri: item }} />
          )}
          showsHorizontalScrollIndicator={false}
        />
        {/* Conditional render for types */}
        {type2 === "none" ? (<Text style={{paddingBottom:20}}>Id: {item.id}  Type: {type1}</Text>) : ( <Text style={{paddingBottom:20}}>Id: {item.id}  Type 1: {type1}, Type 2: {type2}</Text>)}
        
        {/* Pressable for playing the Pokémon cry, unfortunately does not play because it's a .ogg file */}
        <View style={{ flexWrap: "nowrap" }}>
          <Pressable
            style={styles.button}
            onPress={() =>
              playSound(
                `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${item.id}.ogg`
                //Problem, was unable to convert file type
              )
            }
          >
            <Text style={styles.buttonText}>Play Cry</Text>
          </Pressable>
        </View>
      </View>
    );
  }
  
  // function renderItem({ item }) {
  //   return (
  //     <View style={styles.pokemonContainer}>
  //       <Text style={styles.pokemonName}>{item.name}</Text>
  //       {/* Above, name, below list of images for pokemon*/}
  //       <Image style={styles.pokemonImage} source={{ uri: item.sprites.front_default }} />
  //       {/* Below, pressable for cry */}
  //       <View style={{flexWrap:"nowrap"}}>
  //       <Pressable
  //         style={styles.button}
  //         onPress={() => playSound(`https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${item.id}.ogg`)}
  //       >
  //         <Text style={styles.buttonText}>Play Cry</Text>
  //       </Pressable>
  //       </View>
  //     </View>
  //   );
  // }

  if (isLoading) {
    return <Text>Loading...</Text>; 
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Error: {error}</Text>
        <Pressable title="Retry" onPress={loadData}>
          <Text style={styles.retrybox}>Press here to Retry</Text>
        </Pressable>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {placeholder ? ( 
        <View>
          <Text style={{ fontSize: 15, padding: 10, textAlign: "center", shadowColor: "white", color: "black", borderBottomColor: "black" }}>
            This is a note regarding the Play Cry OnPress:
          </Text>
          <Text style={{ fontSize: 10, paddingBottom: 10, textAlign: "center" }}>
            As of Oct 23rd, 2024, due to the file type for cries being .ogg instead of .mp3, the cries do not work
          </Text>
          <FlatList
            windowSize={3}
            data={pokemonList}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
          />
        </View>
      ) : ( 
        <View style={styles.container}>
          <Text style={styles.text}>Access Denied</Text>
          <Text style={styles.subtext}>This feature is disabled. Enable it in settings to access this page.</Text>
        </View>
      )}
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
        fontWeight: "condensed",
        paddingTop: 10,
      },
      text: {
        fontSize: 20,
        padding: 20,
        alignContent: "center",
        alignSelf: "auto",
        fontWeight: "Bold",
        fontFamily: "cambria",
        borderColor: "#ededed",
        borderRadius: 5,
        borderWidth: 2,
        
      },
      subtext: {
        fontSize: 15,
        padding: 5,
        alignContent: "center",
        alignSelf: "auto",
        fontWeight:"300"
      },
      retrybox: {
        padding: 40,
        margin: 5,
        alignSelf: "center"

      }
    })  