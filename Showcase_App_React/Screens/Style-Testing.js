import { Text, View, StyleSheet } from "react-native";
import React from "react";
import { Pressable } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";
import { FlatList } from "react-native-gesture-handler";

export default function StyleTesting() {
    placeholder = true;
    //Credit to chatgpt for generating this list for me
    const [box1FontSize, setBox1FontSize] = useState(16);
    const [box1FontStyle, setBox1FontStyle] = useState("normal");
    const [box1FontWeight, setBox1FontWeight] = useState("normal");
    const [box1Color, setBox1Color] = useState("#000000");
    const [box1ShadowColor, setBox1ShadowColor] = useState("#000000");
    const [box1ShadowOpacity, setBox1ShadowOpacity] = useState(0.0);
    const [box1ShadowOffset, setBox1ShadowOffset] = useState(2);
    const [box1BorderRadius, setBox1BorderRadius] = useState(5);
    const [box1BorderWidth, setBox1BorderWidth] = useState(1);
    const [box1Padding, setBox1Padding] = useState(10);
    const [box1Margin, setBox1Margin] = useState(10);
    //The instructions were to make useStates for StyleSheet
    
    const presets = [
        {
            label: "Preset 1",
            style: {
                fontSize: 20,
                fontStyle: "normal",
                fontWeight: "bold",
                color: "#4A90E2",
                shadowColor: "#333",
                shadowOpacity: 0.6,
                shadowOffset: 3,
                borderRadius: 10,
                borderWidth: 2,
                padding: 15,
                margin: 15,
            }
        },
        {
            label: "Preset 2",
            style: {
                fontSize: 18,
                fontStyle: "italic",
                fontWeight: "300",
                color: "#E94E77",
                shadowColor: "#444",
                shadowOpacity: 0.4,
                shadowOffset: 5,
                borderRadius: 15,
                borderWidth: 1,
                padding: 10,
                margin: 10,
            }
        },
        {
            label: "Preset 3",
            style: {
                fontSize: 22,
                fontStyle: "normal",
                fontWeight: "900",
                color: "#00B894",
                shadowColor: "#111",
                shadowOpacity: 0.8,
                shadowOffset: 4,
                borderRadius: 20,
                borderWidth: 3,
                padding: 20,
                margin: 20,
            }
        }
    ];

    const applyPreset = (preset) => {
      if (preset === "Preset 1") {
        setBox1FontSize(20);
        setBox1FontStyle("normal");
        setBox1FontWeight("bold");
        setBox1Color("#4A90E2");
        setBox1ShadowColor("#333");
        setBox1ShadowOpacity(0);
        setBox1ShadowOffset(3);
        setBox1BorderRadius(10);
        setBox1BorderWidth(2);
        setBox1Padding(15);
        setBox1Margin(15);
    } else if (preset === "Preset 2") {
        setBox1FontSize(18);
        setBox1FontStyle("italic");
        setBox1FontWeight("300");
        setBox1Color("#E94E77");
        setBox1ShadowColor("#444");
        setBox1ShadowOpacity(0.4);
        setBox1ShadowOffset(5);
        setBox1BorderRadius(0);
        setBox1BorderWidth(1);
        setBox1Padding(10);
        setBox1Margin(10);
    } else if (preset === "Preset 3") {
        setBox1FontSize(22);
        setBox1FontStyle("normal");
        setBox1FontWeight("900");
        setBox1Color("#00B894");
        setBox1ShadowColor("#111");
        setBox1ShadowOpacity(0.8);
        setBox1ShadowOffset(4);
        setBox1BorderRadius(20);
        setBox1BorderWidth(3);
        setBox1Padding(20);
        setBox1Margin(20);
    }
    };
    const styleSettings = [
      { label: "Font Style (italic/normal)", value: box1FontStyle, setValue: setBox1FontStyle },
      { label: "Font Weight (e.g., bold, 100)", value: box1FontWeight, setValue: setBox1FontWeight },
      { label: "Font Size", value: box1FontSize, setValue: setBox1FontSize, type: "numeric" },
      { label: "Color", value: box1Color, setValue: setBox1Color },
      { label: "Shadow Color", value: box1ShadowColor, setValue: setBox1ShadowColor },
      { label: "Shadow Opacity", value: box1ShadowOpacity, setValue: setBox1ShadowOpacity, type: "numeric" },
      { label: "Shadow Offset", value: box1ShadowOffset, setValue: setBox1ShadowOffset, type: "numeric" },
      { label: "Border Radius", value: box1BorderRadius, setValue: setBox1BorderRadius, type: "numeric" },
      { label: "Border Width", value: box1BorderWidth, setValue: setBox1BorderWidth, type: "numeric" },
      { label: "Padding", value: box1Padding, setValue: setBox1Padding, type: "numeric" },
      { label: "Margin", value: box1Margin, setValue: setBox1Margin, type: "numeric" },
    ];

    const renderItem = ({item}) => (
      <View style={styles.inputContainer}>
        <Text>{item.label}:</Text>
        <TextInput
            style={styles.input}
            keyboardType={item.type === "numeric" ? "numeric" : "default"}
            onChangeText={(text) => item.setValue(item.type === "numeric" ? parseFloat(text) || 0 : text)}
            value={item.value.toString()}
        />
      </View>
    )

    if (placeholder) {

    return (
      <View style={styles.container}>
          
          <Text style={styles.title}>Style Testing Page</Text>
          <Text style={styles.paragraph}>
              Customize the styles below and see the changes in real-time.
          </Text>
          <Text style={[styles.testingBox1, {
              fontSize: box1FontSize,
              fontStyle: box1FontStyle,
              fontWeight: box1FontWeight,
              color: box1Color,
              shadowColor: box1ShadowColor,
              shadowOpacity: box1ShadowOpacity,
              shadowOffset: { width: box1ShadowOffset, height: box1ShadowOffset },
              borderRadius: box1BorderRadius,
              borderWidth: box1BorderWidth,
              padding: box1Padding,
              margin: box1Margin,
          }]}>
              Preview Text
          </Text>
          <View style={{height:"30%", width: "90%"}}>
            <FlatList
                data={styleSettings}
                renderItem={renderItem}
                keyExtractor={(item) => item.label}
                style={{height:10}}
            />
          </View>
          <View style={styles.presetsContainer}>
            <Pressable style={styles.presets} onPress={() => applyPreset("Preset 1")}>
              <Text>Preset 1</Text>
            </Pressable>
            <Pressable style={styles.presets} onPress={() => applyPreset("Preset 2")}>
              <Text>Preset 2</Text>
            </Pressable>
            <Pressable style={styles.presets} onPress={() => applyPreset("Preset 3")}>
              <Text>Preset 3</Text>
            </Pressable>
          </View>
          
      </View>
    );
  }else {
    return (
      <View style={styles.container}>
          <Text style={styles.accesstext}>Access Denied</Text>
          <Text style={styles.accesssubtext}>This feature is disabled. Enable it in settings to access this page.</Text>
          <Pressable onPress={() => navigation.navigate("settings")}>
              <Text style={styles.buttonText}>Go to Settings</Text>
          </Pressable>
      </View>)
  }
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
  },
  title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
  },
  paragraph: {
      fontSize: 16,
      marginBottom: 20,
      textAlign: 'center',
  },
  accesstext: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
  },
  accesssubtext: {
      fontSize: 16,
      color: 'gray',
  },
  buttonText: {
      color: 'blue',
      textDecorationLine: 'underline',
      marginTop: 10,
  },
  inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
      width: "100%",
      paddingHorizontal: 10,
  },
  input: {
      borderWidth: 1,
      borderColor: 'gray',
      padding: 5,
      marginLeft: 5,
      flex: 1,
  },
  testingBox1: {
      marginTop: 20,
      padding: 10,
      borderWidth: 1,
      textAlign: 'center',
  },
  presets: {
      borderColor: "gray",
      borderWidth: 2,
      shadowColor: "black",
      shadowOffset: 10,
      paddingVertical: 5,
      paddingHorizontal: 10,
      margin: 5,
  },
  presetsContainer: {
      flexDirection: "row"
  }
});