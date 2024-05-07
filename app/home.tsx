import { View, Text, StyleSheet } from "react-native";
import React from "react";
import HomeList from "../components/HomeList";
import { Stack } from "expo-router";

export default function Home() {
  return (
    <View>
      <Stack.Screen
        options={{
          headerLeft: () => <View />,
          title: "",
        }}
      />
      <Text style={styles.text}>VENDA DE CARROS</Text>
      <HomeList title="Carros a Venda" />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    // fontFamily: "fantasy",
    textAlign: "center",
    marginTop: 16,
    marginBottom: 16,
    flex: 100,
  },
});
